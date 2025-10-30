'use client';
import Modal from '../Modal';
import { useModalStore } from '@/stores/useModalStore';
import TopRunners from '../modal/TopRunners';
import { useTopRunnerList } from '@/hooks/queries/useTopRunnerList';
import { useUserStore } from '@/stores/useUserStore';
import TopRunnerPodium from './TopRunnerPodium';
import TopRunnerHeader from './TopRunnerHeader';

const TopRunnersSection = () => {
  const { id: userId } = useUserStore();
  const { activeModal, open } = useModalStore();
  const { topRunnerList, myRank } = useTopRunnerList(userId);
  const onClickHandler = () => {
    if (topRunnerList.length > 3) {
      open('top-runners');
    }
  };

  const MOCK_MYRANK = 2;
  return (
    <>
      <div>
        <TopRunnerHeader onClick={onClickHandler} />
        <div className='relative mt-[8px] h-[203px] rounded-[12px] bg-[#2C2C2E] flex flex-col items-center justify-between shadow-md'>
          <TopRunnerPodium topRunnerList={topRunnerList.slice(0, 3)} />

          <div className='flex items-end absolute bottom-0 gap-[10px]'>
            <div className='w-[84px] h-[72px] bg-[#007AFF] rounded-t-[6px] shadow-sm shadow-[#007AFF]/30' />
            <div className='w-[84px] h-[109px] bg-[#FFD60A] rounded-t-[6px] shadow-sm shadow-[#FFD60A]/30' />
            <div className='w-[84px] h-[55px] bg-[#9C9C9C] rounded-t-[6px] shadow-sm shadow-[#9C9C9C]/30' />
          </div>
        </div>
      </div>

      <Modal id='top-runners'>
        {activeModal === 'top-runners' && (
          <TopRunners
            topRunnerList={topRunnerList}
            myRank={MOCK_MYRANK}
          />
        )}
      </Modal>
    </>
  );
};

export default TopRunnersSection;
