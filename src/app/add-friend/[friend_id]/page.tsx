import { insertFriend } from '@/services/add-friend/insertFriend';
import { getPublicUserInfo } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const AddFriendPage = async ({ params }: { params: Promise<{ friend_id: string }> }) => {
  const { friend_id } = await params;

  const userInfo = await getPublicUserInfo();

  if (!userInfo) {
    redirect('/signin');
  }

  const { status, friendNickname } = await insertFriend(userInfo.id, friend_id);

  redirect(
    '/my-page?friend_status=' +
      encodeURIComponent(status) +
      '&friend_nickname=' +
      encodeURIComponent(friendNickname ?? ''),
  );
};

export default AddFriendPage;
