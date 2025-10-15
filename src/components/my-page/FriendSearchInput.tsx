import { FaSearch } from 'react-icons/fa';

const FriendSearchInput = () => {
  return (
    <div className='relative flex items-center'>
      <FaSearch className='absolute left-[8px] w-[20px] h-[20px] text-[#787878]' />
      <input
        placeholder='이름으로 친구를 검색하세요'
        className='pl-[30px] w-[290px] h-[35px] border border-[#787878] rounded-[10px]'
      />
    </div>
  );
};

export default FriendSearchInput;
