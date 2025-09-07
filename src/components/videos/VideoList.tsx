'use client';
import { FaPersonRunning, FaStar } from 'react-icons/fa6';
import Card from '../Card';
import { useRouter } from 'next/navigation';
import { Distance, DBVideo } from '@/types/videos.types';
import { useVideoList } from '@/hooks/queries/useVideoList';
import { formatVideoDuration } from '@/utils/formatVideoDuration';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';

type VideoListProps = {
  distance: Distance;
};

const VideoList = ({ distance }: VideoListProps) => {
  const { setVideoDetail } = useVideoDetailStore();
  const router = useRouter();
  const videoList: DBVideo[] = useVideoList(distance) ?? [];

  const onClickHandler = (video: DBVideo) => {
    setVideoDetail(video);
    router.push(`/videos/${video.youtube_video_id}`);
  };

  return (
    <>
      {videoList.map((video) => (
        <Card
          key={video.id}
          imageUrl={video.thumbnail_url}
          title={video.title}
          subtitle={() => formatVideoDuration(video.duration)}
          statIcons={[
            { icon: <FaStar />, label: video.favorite_count },
            { icon: <FaPersonRunning />, label: video.proof_count },
          ]}
          onClick={() => onClickHandler(video)}
          isOpenModal={false}
        />
      ))}
    </>
  );
};

export default VideoList;
