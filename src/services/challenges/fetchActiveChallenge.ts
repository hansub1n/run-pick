import { createClient } from '@/utils/supabase/client';

export const fetchActiveChallenge = async (userId: string) => {
  const client = createClient();

  const { data, error } = await client
    .from('user_challenges')
    .select('*, challenges(*)')
    .eq('user_id', userId)
    .eq('status', 'in_progress')
    .maybeSingle();

  if (error || !data) {
    console.error('Failed to fetch user_challenge: ', error);
    return;
  }

  if (data.end_date) {
    const today = new Date();
    const isExpired = today > new Date(data.end_date);
    if (isExpired) {
    }
  }

  return data;
};
