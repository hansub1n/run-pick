import { UserChallenge } from '@/types/userChallenges.type';
import DefaultChallengeImg from '/public/assets/images/default-challenge-img.webp';
import Card from '../Card';

type CompletedChallengesProps = {
  list: UserChallenge[];
};

const CompletedChallenges = ({ list }: CompletedChallengesProps) => {
  return (
    <div className='font-semibold flex flex-col items-center'>
      <h1 className='text-[20px] mb-[5px]'>완료한 챌린지</h1>
      {list.map((challenge) => (
        <Card
          key={challenge.id}
          imageUrl={challenge.info.image_url || DefaultChallengeImg}
          title={challenge.info.title}
          subtitle={challenge.info.description}
          statIcons={[]}
          isOpenModal={true}
        />
      ))}
    </div>
  );
};

export default CompletedChallenges;
