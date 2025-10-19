import { createClient } from '@/utils/supabase/server';

export const insertFriend = async (userId: string, friendId: string) => {
  const client = await createClient();

  if (userId === friendId) {
    return { status: 400 };
  }

  const { data: exists } = await client
    .from('friends')
    .select('id')
    .eq('user_id', userId)
    .eq('friend_id', friendId)
    .maybeSingle();

  if (exists) {
    return { status: 409 };
  }

  const { error } = await client.from('friends').upsert(
    [
      { user_id: userId, friend_id: friendId },
      { user_id: friendId, friend_id: userId },
    ],
    { onConflict: 'user_id, friend_id' },
  );

  if (error) {
    console.error('DB insert error: ', error);

    if (error.code === '23503') {
      return { status: 404 };
    }
    if (error.code === '23505') {
      return { status: 409 };
    }

    return {
      status: 500,
    };
  }

  const { data } = await client.from('users').select('nickname').eq('id', friendId).single();

  return {
    status: 200,
    friendNickname: data?.nickname,
  };
};
