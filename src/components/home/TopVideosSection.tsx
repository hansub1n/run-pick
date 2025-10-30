import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';
import TopVideoList from './TopVideoList';

const TopVideosSection = () => {
  return (
    <div>
      <div>
        <h1 className='flex items-center font-semibold text-[#FAFAFA] text-[16px] leading-[22px]'>
          <Link
            href={'/videos'}
            className='flex items-center gap-[4px] hover:text-[#007AFF] transition-colors'
          >
            모두가 달린 이달의 영상 TOP 3
            <FaChevronRight className='text-[#007AFF]' />
          </Link>
        </h1>
        <p className='text-[10px] text-[#787878] font-medium mt-[2px]'>
          5분만 뛰어도 러너는 러너지. 이번 달도 같이 가요!
        </p>
      </div>
      <TopVideoList />
    </div>
  );
};

export default TopVideosSection;
