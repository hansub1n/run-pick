import FriendCard from './FriendCard';

const MOCK_FRIENDS = [
  { id: 0, friend_id: '0', friend_nickname: '한수빈', is_favorite: false },
  { id: 1, friend_id: '1', friend_nickname: '최태호', is_favorite: true },
  { id: 2, friend_id: '2', friend_nickname: '최지현', is_favorite: false },
  { id: 3, friend_id: '3', friend_nickname: '박미진', is_favorite: false },
  { id: 4, friend_id: '4', friend_nickname: '신채은', is_favorite: false },
  { id: 5, friend_id: '5', friend_nickname: '한가영', is_favorite: false },
]; // TODO: 삭제 할 것

const FriendList = () => {
  return (
    <div className='flex flex-col w-full pb-[10px] max-h-[346px] overflow-y-auto'>
      {MOCK_FRIENDS.map((friend) => (
        <FriendCard
          key={friend.id}
          {...friend}
        />
      ))}
    </div>
  );
};

export default FriendList;
