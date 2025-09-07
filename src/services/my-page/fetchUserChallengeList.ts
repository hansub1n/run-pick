import { createClient } from '@/utils/supabase/client';

export const fetchUserChallengeList = async (id: string) => {
  const client = createClient();

  const { data, error } = await client
    .from('user_challenges')
    .select(`*, challenges(title, image_url, description)`)
    .eq('user_id', id)
    .eq('status', 'completed');

  if (error) {
    console.error('Failed to fetch userChallegeList: ', error);
  }

  return data;
};
