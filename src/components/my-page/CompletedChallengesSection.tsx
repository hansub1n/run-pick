'use client';

import { useUserChallengeList } from '@/hooks/queries/useUserChallengeList';
import { useModalStore } from '@/stores/useModalStore';
import { useUserStore } from '@/stores/useUserStore';
import Modal from '../Modal';
import CompletedChallenges from '../modal/CompletedChallenges';
import { UserChallenges } from '@/types/userChallenges.type';
import CompletedChallengeList from './CompletedChallengeList';
import SectionHeader from './SectionHeader';
import ListSection from './ListSection';

const CompletedChallengesSection = () => {
  const { activeModal, open } = useModalStore();
  const { id } = useUserStore();
  const userChallengeList = useUserChallengeList(id) as UserChallenges;

  const onClickHandler = () => {
    if (userChallengeList.length > 0) {
      open('completed-challenges');
    }
  };

  return (
    <>
      <div>
        <SectionHeader
          title={'완료한 챌린지'}
          onClick={onClickHandler}
        />
        <ListSection
          list={userChallengeList}
          emptyMessage={'완료한 챌린지가 없어요. 챌린지에 참여해 나만의 성취를 기록해보세요!'}
        >
          <CompletedChallengeList list={userChallengeList} />
        </ListSection>
      </div>
      <Modal id={'completed-challenges'}>
        {activeModal === 'completed-challenges' && <CompletedChallenges list={userChallengeList} />}
      </Modal>
    </>
  );
};

export default CompletedChallengesSection;
