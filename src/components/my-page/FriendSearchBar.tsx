import FriendInviteButton from './FriendInviteButton';
import FriendSearchInput from './FriendSearchInput';

type FriendSearchBarProps = {
  searchNickname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FriendSearchBar = ({ searchNickname, onChange }: FriendSearchBarProps) => {
  return (
    <div className='flex w-full justify-between items-center'>
      <FriendSearchInput
        searchNickname={searchNickname}
        onChange={onChange}
      />
      <FriendInviteButton />
    </div>
  );
};

export default FriendSearchBar;
