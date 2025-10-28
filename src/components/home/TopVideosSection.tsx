import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';
import TopVideoList from './TopVideoList';

const TopVideosSection = () => {
  return (
    <section>
      <div>
        <h1 className='flex items-center font-semibold'>
          <Link
            href={'/videos'}
            className='flex items-center gap-[2px]'
          >
            모두가 달린 이달의 영상 TOP 3
            <FaChevronRight />
          </Link>
        </h1>
        <p className='text-[10px] text-[#787878] font-medium'>5분만 뛰어도 러너는 러너지. 이번 달도 같이 가요!</p>
      </div>
      <TopVideoList />
    </section>
  );
};

export default TopVideosSection;
