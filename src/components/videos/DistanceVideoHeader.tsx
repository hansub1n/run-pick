import { SortOption } from '@/types/videos.types';
import { FaCaretDown } from 'react-icons/fa6';

type DistanceVideoHeaderProps = {
  sortOption: SortOption;
  onSortOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DistanceVideoHeader = ({ sortOption, onSortOptionChange }: DistanceVideoHeaderProps) => {
  return (
    <div className='flex justify-between items-center mb-[7px]'>
      <h1 className='font-semibold text-[20px]'> 거리별 영상</h1>
      <div className='relative'>
        <select
          value={sortOption}
          onChange={onSortOptionChange}
          className='appearance-none font-regular text-[9px] w-[100px] h-[23px] pl-[15px] rounded-[15px] border'
        >
          <option value='default'>기본 순</option>
          <option value='proof'>인증글 순</option>
          <option value='favorite'>즐겨찾기 순</option>
        </select>
        <FaCaretDown className='absolute right-[10px] top-[5px] pointer-events-none' />
      </div>
    </div>
  );
};

export default DistanceVideoHeader;
