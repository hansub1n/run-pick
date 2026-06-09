'use client';
import { Distance, SortOption, Behavior, YoutubeVideo, RecommendedVideo } from '@/types/videos.types';
import { useVideoList } from '@/hooks/queries/useVideoList';
import CardSkeleton from '../skeletons/CardSkeleton';
import { useEffect, useRef, useState } from 'react';
import VideoCard from './VideoCard';
import { saveBehaviorStore } from '@/utils/behaviorStorage';
import { getPreferredCategory } from '@/utils/getPreferredCategory';
import { fetchVideosFromYoutube } from '@/services/videos/fetchVideosFromYoutube';
import { convertYoutubeToDBVideo } from '@/services/videos/convertYoutubeToDBVideo';

type VideoListProps = {
  distance: Distance;
  sortOption: SortOption;
};

const VideoList = ({ distance, sortOption }: VideoListProps) => {
  const { videoList, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useVideoList(distance);
  const [recommended, setRecommended] = useState<RecommendedVideo[]>([]);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const behaviorStore = useRef<Record<string, Behavior>>(
    typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('video_behavior') || '{}') : {},
  );
  const saveHandler = () => saveBehaviorStore(behaviorStore);

  useEffect(() => {
    const load = async () => {
      const preferred = getPreferredCategory(behaviorStore.current);
      if (!preferred) return;

      const videos = await fetchVideosFromYoutube(distance, preferred);
      const converted = videos.map((video: YoutubeVideo) => convertYoutubeToDBVideo(video, distance));
      setRecommended(converted);
    };

    load();
  }, [distance]);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const sortedVidoList = [...videoList].sort((a, b) => {
    if (sortOption === 'proof') return b.proof_count - a.proof_count;
    if (sortOption === 'favorite') return b.favorite_count - a.favorite_count;
    return 0;
  });

  if (isLoading) {
    return (
      <div
        aria-busy='true'
        aria-label='Top videos loading'
        className='w-[313px]'
      >
        <CardSkeleton
          isOpenModal={false}
          statIconsCount={2}
          count={5}
        />
      </div>
    );
  }

  return (
    <div className='w-[313px]'>
      {recommended.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          behaviorStore={behaviorStore}
          saveHandler={saveHandler}
        />
      ))}

      {sortedVidoList.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          behaviorStore={behaviorStore}
          saveHandler={saveHandler}
        />
      ))}

      {isFetchingNextPage && (
        <CardSkeleton
          isOpenModal={false}
          statIconsCount={2}
          count={3}
        />
      )}

      <div ref={targetRef} />
    </div>
  );
};

export default VideoList;
