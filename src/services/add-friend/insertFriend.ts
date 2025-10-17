import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const insertFriend = async (userId: string, friendId: string) => {
  const client = await createClient();

  if (userId === friendId) {
    return { status: 400 };
  }

  const { error } = await client.from('friends').insert([
    { user_id: userId, friend_id: friendId },
    { user_id: friendId, friend_id: userId },
  ]);

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
