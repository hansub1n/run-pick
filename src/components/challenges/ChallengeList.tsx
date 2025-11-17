import { Challenge, Level } from '@/types/challenges.types';
import Card from '../Card';
import { FaStamp } from 'react-icons/fa6';
import { useModalStore } from '@/stores/useModalStore';
import Modal from '../Modal';
import { useState } from 'react';
import ConfirmChallengeRegister from '../modal/ConfirmChallengeRegister';
import { useAuthStatus } from '@/hooks/queries/useAuthStatus';
import { useRouter } from 'next/navigation';
import { useChallengeList } from '@/hooks/queries/useChallengeList';
import CardSkeleton from '../skeletons/CardSkeleton';

type ChallengeListProps = {
  level: Level;
};

const ChallengeList = ({ level }: ChallengeListProps) => {
  const { isSignedIn } = useAuthStatus();
  const { activeModal, open, close } = useModalStore();
  const { challengeList, isLoading } = useChallengeList(level);
  const [selectedChallenge, setSelectedChallenge] = useState<null | Challenge>(null);
  const router = useRouter();

  const onClickhandler = (challenge: Challenge) => {
    if (!isSignedIn) {
      router.replace('/login');
      return;
    }
    setSelectedChallenge(challenge);
    open('confirm-challenge-register');
  };

  const onClosehandler = () => {
    setSelectedChallenge(null);
    close();
  };

  if (isLoading) {
    return (
      <div
        aria-busy='true'
        aria-label='Top videos loading'
        className='w-[313px]'
      >
        <CardSkeleton
          isOpenModal={false}
          statIconsCount={1}
          count={5}
        />
      </div>
    );
  }

  return (
    <div className='w-[313px]'>
      {challengeList.map((challenge) =>
        challenge.level === level ? (
          <Card
            key={challenge.id}
            imageUrl={challenge.image_url}
            title={challenge.title}
            subtitle={challenge.description}
            statIcons={[{ icon: <FaStamp />, label: '도전하기', onClick: () => onClickhandler(challenge) }]}
            isOpenModal={false}
          />
        ) : null,
      )}

      {selectedChallenge && (
        <Modal id={'confirm-challenge-register'}>
          {activeModal === 'confirm-challenge-register' && (
            <ConfirmChallengeRegister
              selectedChallenge={selectedChallenge}
              onClick={onClosehandler}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default ChallengeList;
