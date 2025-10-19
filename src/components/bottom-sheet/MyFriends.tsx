import FriendSearchBar from '../my-page/FriendSearchBar';
import FriendList from '../my-page/FriendList';
import { Friends } from '@/types/friends.types';

type MyFriendsProps = {
  userId: string;
  friendList: Friends;
};

const MyFriends = ({ userId, friendList }: MyFriendsProps) => {
  return (
    <div className='relative flex flex-col items-center px-[23px] gap-[10px]'>
      <FriendSearchBar userId={userId} />
      {friendList ? <FriendList friendList={friendList} /> : <p> 친구 목록이 비어있습니다.</p>}
    </div>
  );
};

export default MyFriends;
