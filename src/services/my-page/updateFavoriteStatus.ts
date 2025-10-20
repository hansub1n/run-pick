import { createClient } from '@/utils/supabase/client';

export const updateFavoriteStatus = async (userId: string, friendId: string, isFavorite: boolean) => {
  const client = createClient();

  const { error } = await client
    .from('friends')
    .update({ is_favorite: isFavorite })
    .eq('user_id', userId)
    .eq('friend_id', friendId);

  if (error) {
    throw new Error();
  }
};
