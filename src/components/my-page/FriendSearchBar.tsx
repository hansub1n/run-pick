import FriendInviteButton from './FriendInviteButton';
import FriendSearchInput from './FriendSearchInput';

const FriendSearchBar = () => {
  return (
    <div className='flex w-full justify-between items-center'>
      <FriendSearchInput />
      <FriendInviteButton />
    </div>
  );
};

export default FriendSearchBar;
