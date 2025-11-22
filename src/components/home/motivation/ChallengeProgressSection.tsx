'use client';
import { useActiveChallenge } from '@/hooks/queries/useActiveChallenge';

const ChallengeProgressSection = ({ userId }: { userId: string }) => {
  const { activeChallenge, completionRate } = useActiveChallenge(userId);

  if (!activeChallenge) {
    return null;
  }

  if (Array.isArray(activeChallenge?.info)) {
    activeChallenge.info = activeChallenge.info[0];
  }

  return (
    <>
      <div className='flex justify-between items-end'>
        <p className='text-[10px] text-[#BDBDBD] font-medium pb-[4px]'>
          {completionRate}% 달성 ·{' '}
          {activeChallenge!.info.type === 'distance'
            ? `${activeChallenge!.progress_km}km`
            : `${activeChallenge!.run_count}회`}
        </p>
        <h1 className='text-[24px] font-semibold text-[#FAFAFA]'>
          {activeChallenge!.info.type === 'distance'
            ? `${activeChallenge!.info.target}km`
            : `${activeChallenge!.info.target}회`}
        </h1>
      </div>
      <div className='w-[279px] h-[9px] rounded-[10px] bg-[#3A3A3C] flex overflow-hidden'>
        <div
          className='h-[9px] rounded-[10px] bg-[#007AFF] transition-all duration-300'
          style={{ width: `${completionRate}%` }}
        />
      </div>
    </>
  );
};

export default ChallengeProgressSection;
