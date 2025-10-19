import { Friends } from '@/types/friends.types';
import { createClient } from '@/utils/supabase/client';

export const fetchMyFriendList = async (userId: string) => {
  const client = createClient();
  const { data, error } = await client
    .from('friends')
    .select('id, is_favorite, info:users!friend_id(id, nickname)')
    .eq('user_id', userId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Failed to fetch error: ', error);
    return [];
  }

  return (data as unknown as Friends) ?? [];
};
