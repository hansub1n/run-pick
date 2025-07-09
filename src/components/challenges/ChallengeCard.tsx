import { FaStamp } from 'react-icons/fa6';

const ChallengeCard = () => {
  return (
    <div className='h-[100px] py-[17px] border-b border-[#D9D9D9] flex gap-[16px]'>
      <div className='w-[104px] rounded-[10px] bg-[#A4A2A2]' />
      <div className='flex-grow'>
        <div>
          <h1 className='font-semibold text-[13px]'>주 3회, 하루 2km 걷기/뛰기</h1>
          <p className='font-medium text-[10px]'>3일만 움직여도 내 몸이 바뀐다!</p>
        </div>
        <div className='font-semibold text-[10px] flex gap-[6px] justify-end mt-[16px]'>
          <h3 className='flex items-center gap-[2px]'>
            <FaStamp />
            도전하기
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
