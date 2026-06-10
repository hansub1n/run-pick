import { createClient } from '@/utils/supabase/client';
import { toast } from 'react-toastify';

export const deleteFriend = async (myId: string, friendId: string) => {
  const client = createClient();

  const [result1, result2] = await Promise.all([
    client.from('friends').delete().eq('user_id', myId).eq('friend_id', friendId),
    client.from('friends').delete().eq('user_id', friendId).eq('friend_id', myId),
  ]);

  if (result1.error || result2.error) {
    console.error('Failed to delete error:', result1.error ?? result2.error);
    return;
  }

  toast.info('정상적으로 처리되었습니다');
};
