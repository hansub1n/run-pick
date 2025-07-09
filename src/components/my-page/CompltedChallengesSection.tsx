import { FaChevronRight } from 'react-icons/fa6';

const CompltedChallengesSection = () => {
  return (
    <section>
      <div>
        <h1 className='flex items-center font-[19px]'>
          완료한 챌린지
          <FaChevronRight />
        </h1>
      </div>
      <section className='flex gap-[7px] pt-[8px]'>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[12px] gap-[3px]'>주 3회 러닝</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[12px] gap-[3px]'>주 3회 러닝</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[12px] gap-[3px]'>주 3회 러닝</h3>
        </div>
      </section>
    </section>
  );
};

export default CompltedChallengesSection;
