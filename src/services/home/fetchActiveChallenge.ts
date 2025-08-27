import { createClient } from '@/utils/supabase/client';

export const fetchActiveChallenge = async (userId: string) => {
  const client = createClient();

  const { data, error } = await client
    .from('user_challenges')
    .select('*, challenges(*)')
    .eq('user_id', userId)
    .eq('status', 'in_progress')
    .single();

  if (error) {
    console.error('Failed to fetch user_challenge: ', error);
  }

  return data;
};
