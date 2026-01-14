'use client';
import { Distance, SortOption, Behavior } from '@/types/videos.types';
import { useVideoList } from '@/hooks/queries/useVideoList';
import CardSkeleton from '../skeletons/CardSkeleton';
import { useEffect, useRef } from 'react';
import VideoCard from './VideoCard';
import { saveBehaviorStore } from '@/utils/behaviorStorage';

type VideoListProps = {
  distance: Distance;
  sortOption: SortOption;
};

const VideoList = ({ distance, sortOption }: VideoListProps) => {
  const { videoList, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useVideoList(distance);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const behaviorStore = useRef<Record<string, Behavior>>(
    typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('video_behavior') || '{}') : {},
  );
  const saveHandler = () => saveBehaviorStore(behaviorStore);

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
    if (sortOption === 'proof') return b.post_count - a.post_count;
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
