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
    if (topRunnerList.length >= 3) {
      open('top-runners');
    }
  };

  return (
    <>
      <div>
        <TopRunnerHeader onClick={onClickHandler} />
        <div className='relative mt-[8px] h-[193px] rounded-[10px] bg-[#D9D9D9] flex flex-col items-center justify-between'>
          <TopRunnerPodium topRunnerList={topRunnerList.slice(0, 3)} />
          <div className='flex items-end absolute bottom-0'>
            <div className='w-[84px] h-[72px] bg-[#787878]' />
            <div className='w-[84px] h-[109px] bg-[#787878]' />
            <div className='w-[84px] h-[55px] bg-[#787878]' />
          </div>
        </div>
      </div>
      <Modal id={'top-runners'}>
        {activeModal === 'top-runners' && (
          <TopRunners
            topRunnerList={topRunnerList}
            myRank={myRank}
          />
        )}
      </Modal>
    </>
  );
};

export default TopRunnersSection;
