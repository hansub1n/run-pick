import { Friends } from '@/types/friends.types';
import FriendCard from './FriendCard';

type FriendListProps = {
  searchNickname: string;
  friendList: Friends;
};

const FriendList = ({ searchNickname, friendList }: FriendListProps) => {
  const filteredFriends = friendList.filter((friend) =>
    searchNickname ? friend.info.nickname.toLowerCase().includes(searchNickname.toLowerCase()) : true,
  );
  return (
    <div className='flex flex-col w-full pb-[10px] max-h-[346px] overflow-y-auto scrollbar-hide'>
      {filteredFriends.length === 0 ? (
        <p className='w-full px-[6px] py-[17px] text-center text-[12px] text-[#5C5C5C]'>
          검색 결과가 없어요. 다시 검색해보세요!
        </p>
      ) : (
        filteredFriends.map((friend) => (
          <FriendCard
            key={friend.id}
            isFavorite={friend.is_favorite}
            friendInfo={friend.info}
          />
        ))
      )}
    </div>
  );
};

export default FriendList;
