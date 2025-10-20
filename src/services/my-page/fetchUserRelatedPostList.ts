import { createClient } from '@/utils/supabase/client';

export const fetchUserRelatedPostList = async (userId: string) => {
  const client = createClient();

  const { data, error } = await client
    .from('running_proof_posts')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed fetch to userRelatedPostList: ', error);
  }

  return data ?? [];
};
