import MyPageClient from '@/components/my-page/MyPageClient';
import { getAuthUserInfo } from '@/utils/supabase/server';

const MyPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ friend_status?: string; friend_nickname?: string }>;
}) => {
  const { friend_status, friend_nickname } = (await searchParams) ?? {
    friend_status: undefined,
    friend_nickname: undefined,
  };
  const userInfo = await getAuthUserInfo();

  return (
    <MyPageClient
      userId={userInfo!.id}
      friendStatus={friend_status}
      friendNickname={friend_nickname}
    />
  );
};

export default MyPage;
