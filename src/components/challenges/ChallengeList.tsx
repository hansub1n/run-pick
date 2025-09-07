import { Challenge, Level } from '@/types/challenges.types';
import Card from '../Card';
import { FaStamp } from 'react-icons/fa6';
import { useChallengeList } from '@/hooks/queries/useChallengeList';
import { useModalStore } from '@/stores/useModalStore';
import Modal from '../Modal';
import { useState } from 'react';
import ConfirmChallengeRegister from '../modal/ConfirmChallengeRegister';

type ChallengeListProps = {
  level: Level;
};

const ChallengeList = ({ level }: ChallengeListProps) => {
  const { activeModal, open, close } = useModalStore();
  const challengeList = useChallengeList(level);
  const [selectedChallenge, setSelectedChallenge] = useState<null | Challenge>(null);

  const onClickhandler = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    open('confirm-challenge-register');
  };

  const onClosehandler = () => {
    setSelectedChallenge(null);
    close();
  };

  return (
    <div>
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
