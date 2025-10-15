import FriendInviteButton from './FriendInviteButton';
import FriendSearchInput from './FriendSearchInput';

type FriendSearchBarProps = {
  userId: string;
};
const FriendSearchBar = ({ userId }: FriendSearchBarProps) => {
  return (
    <div className='flex w-full justify-between items-center'>
      <FriendSearchInput />
      <FriendInviteButton userId={userId} />
    </div>
  );
};

export default FriendSearchBar;
