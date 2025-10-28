'use client';
import { useUserProofPostList } from '@/hooks/queries/useUserProofPostList';
import { useUserStore } from '@/stores/useUserStore';
import Modal from '../Modal';
import UserProofPosts from '../modal/UserProofPosts';
import { useModalStore } from '@/stores/useModalStore';
import ProofPostList from './ProofPostList';
import SectionHeader from './SectionHeader';
import ListSection from './ListSection';
import { ProofPosts } from '@/types/proofPosts.types';

const MyPostsSection = () => {
  const { open, activeModal } = useModalStore();
  const { id } = useUserStore();
  const userProofPostList = useUserProofPostList(id) as ProofPosts;

  const onClickHandler = () => {
    if (userProofPostList.length > 0) {
      open('user-proof-posts');
    }
  };

  return (
    <>
      <div>
        <SectionHeader
          title={'내가 작성한 글'}
          onClick={onClickHandler}
        />
        <ListSection
          list={userProofPostList}
          emptyMessage={'아직 글이 없어요. 런픽을 보고 달린 뒤, 나만의 기록을 공유해보세요!'}
        >
          <ProofPostList list={userProofPostList} />
        </ListSection>
      </div>
      <Modal id={'user-proof-posts'}>
        {activeModal === 'user-proof-posts' && <UserProofPosts list={userProofPostList} />}
      </Modal>
    </>
  );
};

export default MyPostsSection;
