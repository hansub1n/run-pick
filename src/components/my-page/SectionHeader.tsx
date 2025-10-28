import { FaChevronRight } from 'react-icons/fa6';

type SectionHeaderProps = {
  title: string;
  onClick: () => void;
};

const SectionHeader = ({ title, onClick }: SectionHeaderProps) => {
  return (
    <div className='font-semibold flex items-center gap-[2px]'>
      <h1 className='font-[19px]'>{title}</h1>
      <button
        onClick={onClick}
        className='cursor-pointer'
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SectionHeader;
