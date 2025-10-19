import MyPageClient from '@/components/my-page/MyPageClient';

const MyPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ friend_status?: string; friend_nickname?: string }>;
}) => {
  const { friend_status, friend_nickname } = (await searchParams) ?? {
    friend_status: undefined,
    friend_nickname: undefined,
  };

  return (
    <MyPageClient
      friendStatus={friend_status}
      friendNickname={friend_nickname}
    />
  );
};

export default MyPage;
