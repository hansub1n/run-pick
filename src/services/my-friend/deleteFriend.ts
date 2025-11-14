import { createClient } from '@/utils/supabase/client';
import { toast } from 'react-toastify';

export const deleteFriend = async (myId: string, friendId: string) => {
  const client = createClient();

  const { error } = await client.from('friends').delete().eq('user_id', myId).eq('friend_id', friendId);

  if (error) {
    console.error('Failed to delete error: ', error);
    return;
  }

  toast.info('정상적으로 처리되었습니다');
};
