'use client';
import { useUserRelatedPostList } from '@/hooks/queries/useUserRelatedPostList';
import { useUserStore } from '@/stores/useUserStore';
import Modal from '../Modal';
import UserRelatedPosts from '../modal/UserRelatedPosts';
import { useModalStore } from '@/stores/useModalStore';
import RelatedPostList from './RelatedPostList';
import SectionHeader from './SectionHeader';
import ListSection from './ListSection';
import { RelatedPosts } from '@/types/relatedPosts.types';

const MyPostsSection = () => {
  const { open, activeModal } = useModalStore();
  const { id } = useUserStore();
  const userRelatedPostList = useUserRelatedPostList(id) as RelatedPosts;

  const onClickHandler = () => {
    userRelatedPostList.length > 0 && open('user-related-posts');
  };

  return (
    <>
      <div>
        <SectionHeader
          title={'내가 작성한 글'}
          onClick={onClickHandler}
        />
        <ListSection
          list={userRelatedPostList}
          emptyMessage={'아직 글이 없어요. 런픽을 보고 달린 뒤, 나만의 기록을 공유해보세요!'}
        >
          <RelatedPostList list={userRelatedPostList} />
        </ListSection>
      </div>
      <Modal id={'user-related-posts'}>
        {activeModal === 'user-related-posts' && <UserRelatedPosts list={userRelatedPostList} />}
      </Modal>
    </>
  );
};

export default MyPostsSection;
