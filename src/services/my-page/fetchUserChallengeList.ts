import { createClient } from '@/utils/supabase/client';

export const fetchUserChallengeList = async (userId: string) => {
  const client = createClient();

  const { data, error } = await client
    .from('user_challenges')
    .select(`*, info:challenges(title, image_url, description)`)
    .eq('user_id', userId)
    .eq('status', 'completed');

  if (error) {
    console.error('Failed to fetch userChallegeList: ', error);
  }

  return data ?? [];
};
