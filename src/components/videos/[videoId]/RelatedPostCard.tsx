import { BiSolidLike } from 'react-icons/bi';

const RelatedPostCard = () => {
  return (
    <div className='h-[100px] py-[17px] border-b border-[#D9D9D9] flex gap-[16px]'>
      <div className='w-[104px] rounded-[10px] bg-[#A4A2A2]' />
      <div className='flex-grow'>
        <div>
          <h1 className='font-semibold text-[13px]'>배고프다배고프다배고프다배(15)</h1>
          <p className='font-medium text-[10px] text-[#4F4F4F]'>40:00 | 😵‍💫 피곤</p>
        </div>
        <div className='font-semibold text-[10px] flex gap-[6px] justify-end mt-[16px]'>
          <h3 className='flex items-center gap-[2px]'>
            <BiSolidLike />
            1004
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostCard;
