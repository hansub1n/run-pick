import { FaSearch } from 'react-icons/fa';

type FriendSearchInputProps = {
  searchNickname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FriendSearchInput = ({ searchNickname, onChange }: FriendSearchInputProps) => {
  return (
    <div className='relative flex items-center'>
      <FaSearch className='absolute left-[8px] w-[18px] h-[18px] text-[#787878]' />
      <input
        value={searchNickname}
        placeholder='이름으로 친구를 검색하세요'
        onChange={onChange}
        className='pl-[30px] w-[270px] h-[35px] text-[13px] rounded-[10px] border border-[#5C5C5C] bg-[#1E1E1E] focus:border-[#007AFF] outline-none transition-colors'
      />
    </div>
  );
};

export default FriendSearchInput;
