import VideoActionButtons from '@/components/videos/[videoId]/VideoActionButtons';
import VideoRelatedPosts from '@/components/videos/[videoId]/VideoRelatedPosts';

const VideoDetailPage = () => {
  return (
    <div className='w-[294px] pt-[23px] flex flex-col gap-[24px]'>
      <div>
        <div className='w-full h-[155px] rounded-[10px] bg-[#D9D9D9]' />
        <VideoActionButtons />
      </div>
      <VideoRelatedPosts />
    </div>
  );
};

export default VideoDetailPage;
