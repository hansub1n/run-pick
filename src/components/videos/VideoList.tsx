'use client';
import { FaPersonRunning, FaStar } from 'react-icons/fa6';
import Card from '../Card';
import { useRouter } from 'next/navigation';
import { Distance, DBVideo, SortOption } from '@/types/videos.types';
import { useVideoList } from '@/hooks/queries/useVideoList';
import { formatVideoDuration } from '@/utils/formatVideoDuration';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { useEffect } from 'react';

type VideoListProps = {
  distance: Distance;
  sortOption: SortOption;
};

const VideoList = ({ distance, sortOption }: VideoListProps) => {
  const { setVideoDetail } = useVideoDetailStore();
  const router = useRouter();
  const videoList: DBVideo[] = useVideoList(distance) ?? [];

  const sortedVidoList = [...videoList].sort((a, b) => {
    if (sortOption === 'proof') return b.proof_count - a.proof_count;
    if (sortOption === 'favorite') return b.favorite_count - a.proof_count;
    return 0;
  });

  const onClickHandler = (video: DBVideo) => {
    setVideoDetail(video);
    router.push(`/videos/${video.youtube_video_id}`);
  };

  return (
    <>
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
    </>
  );
};

export default VideoList;
