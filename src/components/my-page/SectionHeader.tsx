import { FaChevronRight } from 'react-icons/fa6';

type SectionHeaderProps = {
  title: string;
  onClick: () => void;
};

const SectionHeader = ({ title, onClick }: SectionHeaderProps) => {
  return (
    <div className='font-semibold flex items-center'>
      <h1
        onClick={onClick}
        className='flex items-center font-semibold gap-[4px] cursor-pointer text-[16px] leading-[22px] hover:text-[#007AFF] transition-colors'
      >
        {title}
        <FaChevronRight className='text-[#007AFF]' />
      </h1>
    </div>
  );
};

export default SectionHeader;
