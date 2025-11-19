import TopRunnerPodium from './TopRunnerPodium';
import TopRunnerHeader from './TopRunnerHeader';
import { getPublicUserInfo } from '@/utils/supabase/server';
import { fetchTopRunners } from '@/services/home/fetchTopRunners';
import { calculateTopRunnerDisplay } from '@/utils/calculateTopRunnerDisplay';

const TopRunnersSection = async () => {
  const [userInfo, topRunnerList] = await Promise.all([getPublicUserInfo(), fetchTopRunners()]);
  const { displayedRunners, myRank } = calculateTopRunnerDisplay(topRunnerList ?? null, userInfo?.id);

  return (
    <>
      <div>
        <TopRunnerHeader
          topRunnerList={displayedRunners}
          myRank={myRank}
        />
        <div className='relative mt-[8px] h-[203px] rounded-[12px] bg-[#2C2C2E] flex flex-col items-center justify-between shadow-md'>
          <TopRunnerPodium topRunnerList={displayedRunners.slice(0, 3)} />

          <div className='flex items-end absolute bottom-0 gap-[10px]'>
            <div className='w-[84px] h-[72px] bg-[#007AFF] rounded-t-[6px] shadow-sm shadow-[#007AFF]/30' />
            <div className='w-[84px] h-[109px] bg-[#FFD60A] rounded-t-[6px] shadow-sm shadow-[#FFD60A]/30' />
            <div className='w-[84px] h-[55px] bg-[#9C9C9C] rounded-t-[6px] shadow-sm shadow-[#9C9C9C]/30' />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRunnersSection;
