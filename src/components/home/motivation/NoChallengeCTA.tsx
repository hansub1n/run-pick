import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

const NoChallengeCTA = () => {
  return (
    <div className='flex items-center justify-end text-[10px] text-[#BDBDBD]'>
      <Link
        href='/challenges'
        className='flex items-center gap-[4px] font-medium hover:text-[#007AFF] transition-colors'
      >
        다양한 챌린지를 확인하고, 지금 바로 시작해보세요!
        <FaChevronRight className='text-[#007AFF]' />
      </Link>
    </div>
  );
};

export default NoChallengeCTA;
