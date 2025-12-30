'use client';
import { FaPersonRunning, FaStar } from 'react-icons/fa6';
import Card from '../Card';
import { useRouter } from 'next/navigation';
import { Distance, DBVideo, SortOption } from '@/types/videos.types';
import { useVideoList } from '@/hooks/queries/useVideoList';
import { formatVideoDuration } from '@/utils/formatVideoDuration';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import CardSkeleton from '../skeletons/CardSkeleton';
import { useEffect, useRef } from 'react';

type VideoListProps = {
  distance: Distance;
  sortOption: SortOption;
};

const VideoList = ({ distance, sortOption }: VideoListProps) => {
  const { setVideoDetail } = useVideoDetailStore();
  const { videoList, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useVideoList(distance);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        console.log('발견--------------');
        fetchNextPage();
      }
    });

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const sortedVidoList = [...videoList].sort((a, b) => {
    if (sortOption === 'proof') return b.proof_count - a.proof_count;
    if (sortOption === 'favorite') return b.favorite_count - a.proof_count;
    return 0;
  });

  const onClickHandler = (video: DBVideo) => {
    setVideoDetail(video);
    router.push(`/videos/${video.youtube_video_id}`);
  };

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
