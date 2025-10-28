import { createClient } from '@/utils/supabase/client';

export const deleteFriend = async (myId: string, friendId: string) => {
  const client = createClient();

  const { error } = await client.from('friends').delete().eq('user_id', myId).eq('friend_id', friendId);

  if (error) {
    console.error('Failed to delete error: ', error);
    return;
  }

  alert('정상적으로 처리되었습니다');
};
