import { ParamValue } from 'next/dist/server/request/params';
import LoadMoreButton from './LoadMoreButton';
import RelatedPostList from './RelatedPostList';

type VideoRelatedPostsProps = {
  videoId: string;
};

const VideoRelatedPosts = ({ videoId }: VideoRelatedPostsProps) => {
  return (
    <div>
      <h1 className='font-semibold'>이 영상으로 인증한 게시글</h1>
      <RelatedPostList videoId={videoId} />
      <LoadMoreButton />
    </div>
  );
};

export default VideoRelatedPosts;
