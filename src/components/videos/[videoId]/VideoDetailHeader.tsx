import BackButton from '@/components/BackButton';
import { createClient } from '@/utils/supabase/server';

const VideoDetailHeader = async ({ videoId }: { videoId: string }) => {
  const client = await createClient();
  const { data, error } = await client.from('videos').select('title').eq('youtube_video_id', videoId).single();

  if (!data || error) {
    return null;
  }

  return (
    <header className='fixed absolute top-0 z-10 w-full h-[55px] px-[13px] flex items-center bg-[#1a1a1a]'>
      <BackButton />
      <h1 className='font-semibold text-[20px] flex-grow text-center break-words line-clamp-1'>{data.title}</h1>
    </header>
  );
};

export default VideoDetailHeader;
