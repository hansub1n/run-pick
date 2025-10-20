import FriendSearchBar from '../my-page/FriendSearchBar';
import FriendList from '../my-page/FriendList';
import { useFriendList } from '@/hooks/queries/useFriendList';
import { useUserStore } from '@/stores/useUserStore';

const MyFriends = () => {
  const { id: userId } = useUserStore();
  const { sortedFriendList: friendList } = useFriendList(userId);

  return (
    <div className='relative flex flex-col items-center px-[23px] gap-[10px]'>
      <FriendSearchBar />
      {friendList.length === 0 ? (
        <p className='w-full px-[6px] py-[22px] text-center text-[14px] text-[#5C5C5C]'>
          아직 친구가 없어요. 새로운 친구를 추가해보세요!
        </p>
      ) : (
        <FriendList friendList={friendList} />
      )}
    </div>
  );
};

export default MyFriends;
