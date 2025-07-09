'use client';
import { useAuthStatus } from '@/hooks/queries/useAuthStatus';
import { useUserStore } from '@/stores/useUserStore';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

const MotivationSection = () => {
  const { isSignedIn } = useAuthStatus();
  const { nickname } = useUserStore();

  const isChallengeSelected = true;
  return (
    <div className='h-[135px] px-[17px] py-[15px] rounded-[10px] bg-[#D9D9D9] font-semibold flex flex-col justify-between'>
      <div className='flex flex-col'>
        <h1 className='leading-[23px]'>
          {isSignedIn ? `${nickname}님` : '로그인을 하고'}
          <br />
          오늘도 힘차게 달려봐요!
        </h1>
        <p className='text-[7px] text-[#787878]'>이번 주도 달린다! 목표까지 GO! ️🏃‍♂️</p>
      </div>
      {isSignedIn && isChallengeSelected ? (
        <section>
          <div className='flex justify-between items-end'>
            <p className='text-[8px] text-[#4F4F4F] pb-[4px]'>47% 달성 · 10km</p>
            <h1 className='text-[24px]'>15Km</h1>
          </div>
          <div className='w-[279px] h-[9px] rounded-[10px] bg-white flex'>
            <div className='w-[130px] h-[9px] rounded-[10px] bg-[#787878]' />
          </div>
        </section>
      ) : (
        <section className='flex items-center justify-end text-[8px] text-[#5C5C5C]'>
          <Link
            href='/challenges'
            className='flex items-center gap-[2px]'
          >
            다양한 챌린지를 확인하고, 지금 바로 시작해보세요!
            <FaChevronRight />
          </Link>
        </section>
      )}
    </div>
  );
};

export default MotivationSection;
