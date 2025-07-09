import Link from 'next/link';
import { FaChevronRight, FaMedal } from 'react-icons/fa6';

const TopVideosSection = () => {
  //
  return (
    <section>
      <div>
        <h1 className='flex items-center'>
          <Link
            href={'/videos'}
            className='flex items-center gap-[2px]'
          >
            모두가 달린 이달의 영상 TOP 3
            <FaChevronRight />
          </Link>
        </h1>
        <p className='text-[7px] text-[#787878]'>5분만 뛰어도 러너는 러너지. 이번 달도 같이 가요!</p>
      </div>
      <section className='flex gap-[7px] pt-[8px]'>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[10px] gap-[3px]'>
            <FaMedal />
            1004
          </h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[10px] gap-[3px]'>
            <FaMedal />
            1004
          </h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[10px] gap-[3px]'>
            <FaMedal />
            1004
          </h3>
        </div>
      </section>
    </section>
  );
};

export default TopVideosSection;
