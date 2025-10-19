import MonthlyStatsSection from '@/components/my-page/MonthlyStatsSection';
import UserProfileSection from '@/components/my-page/UserProfileSection';
import { fetchUserInfo } from '@/services/my-friend/fetchUserInfo';

const MyFriendPage = async ({ params }: { params: Promise<{ friend_id: string }> }) => {
  const { friend_id } = await params;
  const friendInfo = await fetchUserInfo(friend_id);

  return (
    <div className='w-[313px] flex flex-col pt-[30px] pb-[23px]'>
      <UserProfileSection friendInfo={friendInfo!} />
      <MonthlyStatsSection friendId={friendInfo?.id} />
    </div>
  );
};

export default MyFriendPage;
