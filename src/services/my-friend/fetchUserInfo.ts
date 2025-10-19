import { createClient } from '@/utils/supabase/server';

export const fetchUserInfo = async (userId: string) => {
  const client = await createClient();

  const { data, error } = await client.from('users').select('id, profile_img_url, nickname').eq('id', userId).single();

  if (error) {
    console.error('Failed to fetch error: ', error);
  }

  return data;
};
