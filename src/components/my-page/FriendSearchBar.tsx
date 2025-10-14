import { FaSearch } from 'react-icons/fa';
import { ImUserPlus } from 'react-icons/im';

const FriendSearchBar = () => {
  return (
    <div className='flex w-full justify-between items-center'>
      <div className='relative flex items-center'>
        <FaSearch className='absolute left-[8px] w-[20px] h-[20px] text-[#787878]' />
        <input
          placeholder='이름으로 친구를 검색하세요'
          className='pl-[30px] w-[290px] h-[35px] border border-[#787878] rounded-[10px]'
        />
      </div>
      <ImUserPlus className='w-[27px] h-[27px]' />
    </div>
  );
};

export default FriendSearchBar;
