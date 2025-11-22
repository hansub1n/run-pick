'use client';
// import TopRunnerPodium from './TopRunnerPodium';
// import TopRunnerHeader from './TopRunnerHeader';
// import { useTopRunners } from '@/hooks/queries/useTopRunners';
import TopRunnersSkeleton from '../skeletons/TopRunnersSkeleton';
// import { useUserStore } from '@/stores/useUserStore';

const TopRunnersSection = () => {
  // const { id: userId } = useUserStore();
  // const { topRunnerList, myRank, isLoading } = useTopRunners(userId);

  // if (isLoading) {
  return <TopRunnersSkeleton />;
  // }
  // return (
  // <>
  //   <div>
  //     <TopRunnerHeader
  //       topRunnerList={topRunnerList}
  //       myRank={myRank}
  //     />
  //     <div className='relative mt-[8px] h-[203px] rounded-[12px] bg-[#2C2C2E] flex flex-col items-center justify-between shadow-md'>
  //       <TopRunnerPodium topRunnerList={topRunnerList.slice(0, 3)} />

  //       <div className='flex items-end absolute bottom-0 gap-[10px]'>
  //         <div className='w-[84px] h-[72px] bg-[#007AFF] rounded-t-[6px] shadow-sm shadow-[#007AFF]/30' />
  //         <div className='w-[84px] h-[109px] bg-[#FFD60A] rounded-t-[6px] shadow-sm shadow-[#FFD60A]/30' />
  //         <div className='w-[84px] h-[55px] bg-[#9C9C9C] rounded-t-[6px] shadow-sm shadow-[#9C9C9C]/30' />
  //       </div>
  //     </div>
  //   </div>
  // </>
  // );
};

export default TopRunnersSection;
