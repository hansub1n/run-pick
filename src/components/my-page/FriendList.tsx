import { Friends } from '@/types/friends.types';
import FriendCard from './FriendCard';

type FriendListProps = {
  friendList: Friends;
};

const FriendList = ({ friendList }: FriendListProps) => {
  return (
    <div className='flex flex-col w-full pb-[10px] max-h-[346px] overflow-y-auto'>
      {friendList.map((friend) => (
        <FriendCard
          key={friend.id}
          isFavorite={friend.is_favorite}
          friendInfo={friend.info}
        />
      ))}
    </div>
  );
};

export default FriendList;
