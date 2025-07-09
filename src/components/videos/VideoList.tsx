'use client';
import { FaPersonRunning, FaStar } from 'react-icons/fa6';
import Card from '../Card';
import VideoCard from './VideoCard';
import { useRouter } from 'next/navigation';
import { Distance, Videos } from '@/types/videos.types';
import { useVideoList } from '@/hooks/queries/useVideoList';
import { formatVideoDuration } from '@/utils/formatVideoDuration';

type VideoListProps = {
  distance: Distance;
};

const VideoList = ({ distance }: VideoListProps) => {
  const router = useRouter();
  const videoList: Videos = useVideoList(distance) ?? [];

  return (
    <>
      {/* <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard /> */}

      {videoList.map((video) => (
        <Card
          key={video.id}
          image={video.snippet.thumbnails.medium}
          title={video.snippet.title}
          subtitle={() => formatVideoDuration(video.contentDetails.duration)}
          statIcons={[
            { icon: <FaStar />, label: 2580 },
            { icon: <FaPersonRunning />, label: 2580 },
          ]}
          onClick={() => router.push(`/videos/${video.id}`)}
        />
      ))}
    </>
  );
};

export default VideoList;
