import { UserChallenge } from '@/types/userChallenges.type';
import DefaultChallengeImg from '/public/assets/images/default-challenge-img.webp';
import Card from '../Card';

type CompletedChallengesProps = {
  list: UserChallenge[];
};

const CompletedChallenges = ({ list }: CompletedChallengesProps) => {
  return (
    <div className='relative flex flex-col items-center'>
      <h1 className='font-semibold top-[-1px] sticky bg-[#1a1a1a] w-full text-center text-[20px] z-10 pb-[5px]'>
        완료한 챌린지
      </h1>
      <section className='w-full pt-[5px]'>
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
      </section>
    </div>
  );
};

export default CompletedChallenges;
