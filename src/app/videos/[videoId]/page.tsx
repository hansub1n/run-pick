'use client';
import VideoActionButtons from '@/components/videos/[videoId]/VideoActionButtons';
import VideoRelatedPosts from '@/components/videos/[videoId]/VideoRelatedPosts';
import { useParams } from 'next/navigation';

const VideoDetailPage = () => {
  const params = useParams();

  if (!params?.videoId) return null;

  return (
    <div className='pt-[23px] flex flex-col gap-[24px]'>
      <div>
        <iframe
          width='100%'
          height='165'
          src={`https://www.youtube.com/embed/${params.videoId}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='rounded-[10px]'
        />
        <VideoActionButtons videoId={params.videoId} />
      </div>
      <VideoRelatedPosts videoId={params.videoId} />
    </div>
  );
};

export default VideoDetailPage;
