import { FaChevronRight } from 'react-icons/fa6';

type TopRunnerHeaderProps = {
  onClick: () => void;
};
const TopRunnerHeader = ({ onClick }: TopRunnerHeaderProps) => {
  return (
    <div>
      <h1 className='flex items-center font-semibold'>
        <button
          onClick={onClick}
          className='cursor-pointer flex items-center gap-[2px]'
        >
          이달의 러너 TOP 3
          <FaChevronRight />
        </button>
      </h1>
      <p className='text-[10px] text-[#787878] font-medium'>Top 3는 통과점! 목표는 내가 도달할 곳!</p>
    </div>
  );
};

export default TopRunnerHeader;
