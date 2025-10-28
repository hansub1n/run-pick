import { UserChallenges } from '@/types/userChallenges.type';
import Image from 'next/image';
import DefaultChallengeImg from '/public/assets/images/default-challenge-img.webp';

type CompletedChallengeListProps = {
  list: UserChallenges;
};

const CompletedChallengeList = ({ list }: CompletedChallengeListProps) => {
  return (
    <>
      {list.slice(0, 3).map((challenge) => (
        <div
          key={challenge.id}
          className='flex flex-col items-center'
        >
          <div className='relative w-[100px] h-[65px] rounded-[5px]'>
            <Image
              src={challenge.info.image_url || DefaultChallengeImg}
              alt={`${challenge.info.title} 이미지`}
              fill
              className='object-cover'
            />
          </div>

          <h3 className='flex items-center text-[12px] gap-[3px]'>{challenge.info.title}</h3>
        </div>
      ))}
    </>
  );
};

export default CompletedChallengeList;
