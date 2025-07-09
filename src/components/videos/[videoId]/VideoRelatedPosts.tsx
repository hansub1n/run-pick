import LoadMoreButton from './LoadMoreButton';
import RelatedPostList from './RelatedPostList';

const VideoRelatedPosts = () => {
  return (
    <div>
      <h1 className='font-semibold'>이 영상으로 인증한 게시글</h1>
      <RelatedPostList />
      <LoadMoreButton />
    </div>
  );
};

export default VideoRelatedPosts;
