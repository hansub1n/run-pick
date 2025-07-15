import { Level } from '@/types/challenges.types';
import Card from '../Card';
import { FaStamp } from 'react-icons/fa6';
import { useChallengeList } from '@/hooks/queries/useChallengeList';

type ChallengeListProps = {
  level: Level;
};

const ChallengeList = ({ level }: ChallengeListProps) => {
  const challengeList = useChallengeList(level);
  return (
    <div>
      {challengeList.map((challenge) =>
        challenge.level === level ? (
          <Card
            key={challenge.id}
            imageUrl={challenge.image_url}
            title={challenge.title}
            subtitle={challenge.description}
            statIcons={[
              { icon: <FaStamp />, label: '도전하기', onClick: () => alert(`'${challenge.title}' 챌린지 등록!`) },
            ]}
          />
        ) : null,
      )}
    </div>
  );
};

export default ChallengeList;
