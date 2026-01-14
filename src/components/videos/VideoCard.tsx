import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { Behavior, DBVideo } from '@/types/videos.types';
import { useRouter } from 'next/navigation';
import { RefObject, useEffect, useRef } from 'react';
import Card from '../Card';
import { formatVideoDuration } from '@/utils/formatVideoDuration';
import { FaPersonRunning, FaStar } from 'react-icons/fa6';

type VideoCardProps = {
  video: DBVideo;
  behaviorStore: RefObject<Record<string, Behavior>>;
  saveHandler: () => void;
};

const VideoCard = ({ video, behaviorStore, saveHandler }: VideoCardProps) => {
  const { setVideoDetail } = useVideoDetailStore();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const videoId = video.youtube_video_id;
  const category = video.video_category;

  useEffect(() => {
    if (!targetRef.current) return;

    const getStore = () => {
      if (!behaviorStore.current[videoId]) {
        behaviorStore.current[videoId] = {
          videoId,
          viewStartTime: 0,
          viewTime: 0,
          clicked: false,
          category,
        };
      }
      return behaviorStore.current[videoId];
    };

    const startView = () => {
      const store = getStore();
      if (store.viewStartTime === 0) {
        store.viewStartTime = Date.now();
      }
    };

    const finalizeView = () => {
      const store = getStore();
      if (store.viewStartTime === 0) return;

      const duration = (Date.now() - store.viewStartTime) / 1000;
      store.viewTime += duration;
      store.viewStartTime = 0;
      saveHandler();
    };

    startView();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startView();
        } else {
          finalizeView();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(targetRef.current);

    return () => {
      finalizeView();
      observer.disconnect();
    };
  }, [videoId]);

  const onClickHandler = (video: DBVideo) => {
    setVideoDetail(video);

    if (!behaviorStore.current[videoId]) {
      behaviorStore.current[videoId] = {
        videoId,
        viewStartTime: 0,
        viewTime: 0,
        clicked: true,
        category,
      };
    } else {
      behaviorStore.current[videoId].clicked = true;
    }
    saveHandler();
    router.push(`/videos/${videoId}`);
  };

  return (
    <div ref={targetRef}>
      <Card
        imageUrl={video.thumbnail_url}
        title={video.title}
        subtitle={() => formatVideoDuration(video.duration)}
        statIcons={[
          { icon: <FaStar />, label: video.favorite_count },
          { icon: <FaPersonRunning />, label: video.post_count },
        ]}
        onClick={() => onClickHandler(video)}
        isOpenModal={false}
      />
    </div>
  );
};

export default VideoCard;
