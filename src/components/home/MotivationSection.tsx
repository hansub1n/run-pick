'use client';
import { useActiveChallenge } from '@/hooks/queries/useActiveChallenge';
import { useAuthStatus } from '@/hooks/queries/useAuthStatus';
import { useUserStore } from '@/stores/useUserStore';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

const MotivationSection = () => {
  const { isSignedIn } = useAuthStatus();
  const { id, nickname } = useUserStore();
  const { activeChallenge, completionRate } = useActiveChallenge(id);

  if (Array.isArray(activeChallenge?.info)) {
    activeChallenge.info = activeChallenge.info[0];
  }

  return (
    <div
      className={`h-[135px] px-[17px] py-[15px] rounded-[10px] flex flex-col justify-between ${activeChallenge ? 'bg-[#4F4F4F]' : ' bg-[#007AFF]'}`}
    >
      <div className='flex flex-col'>
        <h1 className='leading-[23px] font-semibold text-[#141414]'>
          {isSignedIn ? `${nickname}님` : '로그인을 하고'}
          <br />
          오늘도 힘차게 달려봐요!
        </h1>
        <p className='text-[10px] text-[#141414] font-medium'>이번 주도 달린다! 목표까지 GO! ️🏃‍♂️</p>
      </div>
      {isSignedIn && activeChallenge ? (
        <section>
          <div className='flex justify-between items-end'>
            <p className='text-[10px] text-[#FAFAFA] pb-[4px]'>
              {completionRate}% 달성 ·{' '}
              {activeChallenge.info.type === 'distance'
                ? `${activeChallenge.progress_km}km`
                : `${activeChallenge.run_count}회`}
            </p>
            <h1 className='text-[24px] text-[#141414]'>
              {activeChallenge.info.type === 'distance'
                ? `${activeChallenge.info.target}km`
                : `${activeChallenge.info.target}회`}
            </h1>
          </div>
          <div className='w-[279px] h-[9px] rounded-[10px] bg-[#141414] flex'>
            <div
              className='h-[9px] rounded-[10px] bg-[#007AFF] transition-all duration-300'
              style={{
                width: `${completionRate}%`,
              }}
            />
          </div>
        </section>
      ) : (
        <section className='flex items-center justify-end text-[10px] text-[#141414]'>
          <Link
            href='/challenges'
            className='flex items-center gap-[2px] font-medium'
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
