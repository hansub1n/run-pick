import VideoActionButtons from '@/components/videos/[videoId]/VideoActionButtons';
import VideoProofPosts from '@/components/videos/[videoId]/VideoProofPosts';

const VideoDetailPage = async ({ params }: { params: Promise<{ videoId: string }> }) => {
  const { videoId } = await params;

  return (
    <>
      <div className='pt-[23px] flex flex-col gap-[24px]'>
        <div>
          <iframe
            width='100%'
            height='165'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='rounded-[10px]'
          />
          <VideoActionButtons videoId={videoId} />
        </div>
        <VideoProofPosts videoId={videoId} />
      </div>
    </>
  );
};

export default VideoDetailPage;
