'use client';
import { useRelatedPostList } from '@/hooks/queries/useRelatedPostList';
import RelatedPostList from './RelatedPostList';

type VideoRelatedPostsProps = {
  videoId: string;
};

const VideoRelatedPosts = ({ videoId }: VideoRelatedPostsProps) => {
  const relatedPostList = useRelatedPostList(videoId);

  return (
    <div>
      <h1 className='font-semibold'>이 영상으로 인증한 게시글</h1>
      {relatedPostList.length === 0 ? (
        <p className='w-[313px] min-h-[100px] py-[17px] text-[12px] text-[#5C5C5C]'>
          아직 인증글이 없어요. 영상을 보고 첫 인증글을 남겨보세요!
        </p>
      ) : (
        <RelatedPostList list={relatedPostList} />
      )}
    </div>
  );
};

export default VideoRelatedPosts;
