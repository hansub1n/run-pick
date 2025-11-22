import { useModalStore } from '@/stores/useModalStore';
import { FaChevronRight } from 'react-icons/fa6';
import Modal from '../Modal';
import TopRunners from '../modal/TopRunners';
import { TopRunnerList } from '@/types/topRunners.types';

type TopRunnerHeaderProps = {
  topRunnerList: TopRunnerList;
  myRank?: number;
};
const TopRunnerHeader = ({ topRunnerList, myRank }: TopRunnerHeaderProps) => {
  const { activeModal, open } = useModalStore();

  const onClickHandler = () => {
    if (topRunnerList.length > 3) {
      open('top-runners');
    }
  };

  return (
    <>
      <div>
        <h1 className='flex items-center font-semibold text-[#FAFAFA] text-[16px] leading-[22px]'>
          <button
            onClick={onClickHandler}
            className='cursor-pointer flex items-center gap-[4px] hover:text-[#007AFF] transition-colors'
          >
            이달의 러너 TOP 3
            <FaChevronRight className='text-[#007AFF]' />
          </button>
        </h1>
        <p className='text-[10px] text-[#787878] font-medium mt-[2px]'>Top 3는 통과점! 목표는 내가 도달할 곳!</p>
      </div>
      <Modal id='top-runners'>
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

export default TopRunnerHeader;
