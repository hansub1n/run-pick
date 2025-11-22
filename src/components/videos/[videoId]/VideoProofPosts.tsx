import ProofPostList from './ProofPostList';
import { fetchProofPosts } from '@/services/run-proof/fetchProofPosts';

type VideoProofPostsProps = {
  videoId: string;
};

const VideoProofPosts = async ({ videoId }: VideoProofPostsProps) => {
  const proofPostList = await fetchProofPosts(videoId);

  if (!proofPostList) {
    return null;
  }

  return (
    <div>
      <h1 className='font-semibold'>이 영상으로 인증한 게시글</h1>
      {proofPostList.length === 0 ? (
        <p className='w-[313px] min-h-[100px] py-[17px] font-medium text-[12px] text-[#5C5C5C]'>
          아직 인증글이 없어요. 영상을 보고 첫 인증글을 남겨보세요!
        </p>
      ) : (
        <ProofPostList list={proofPostList} />
      )}
    </div>
  );
};

export default VideoProofPosts;
