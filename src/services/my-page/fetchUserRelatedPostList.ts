import { createClient } from '@/utils/supabase/client';

export const fetchUserRelatedPostList = async (id: string) => {
  const client = createClient();

  const { data, error } = await client.from('running_proof_posts').select('*').eq('user_id', id);

  if (error) {
    console.error('Failed fetch to userRelatedPostList: ', error);
  }

  return data ?? [];
};
