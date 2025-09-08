import { UserChallenge } from '@/types/userChallenge.type';
import DefaultChallengeImg from '/public/assets/images/default-challenge-img.webp';
import Card from '../Card';

type CompletedChallengesProps = {
  userChallengeList: UserChallenge[];
};

const CompletedChallenges = ({ userChallengeList }: CompletedChallengesProps) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-[20px] mb-[5px]'>완료한 챌린지</h1>
      {userChallengeList.map((userChallenge) => (
        <Card
          key={userChallenge.id}
          imageUrl={userChallenge.challenges.image_url || DefaultChallengeImg}
          title={userChallenge.challenges.title}
          subtitle={userChallenge.challenges.description}
          statIcons={[]}
          isOpenModal={true}
        />
      ))}
    </div>
  );
};

export default CompletedChallenges;
