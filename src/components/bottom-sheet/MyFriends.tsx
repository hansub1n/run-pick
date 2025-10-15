import FriendSearchBar from '../my-page/FriendSearchBar';
import FriendList from '../my-page/FriendList';

type MyFriendsProps = {
  userId: string;
};

const MyFriends = ({ userId }: MyFriendsProps) => {
  return (
    <div className='relative flex flex-col items-center px-[23px] gap-[10px]'>
      <FriendSearchBar userId={userId} />
      <FriendList />
    </div>
  );
};

export default MyFriends;
