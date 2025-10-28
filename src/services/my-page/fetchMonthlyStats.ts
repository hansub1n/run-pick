import { getCurrentMonthRange } from '@/utils/getCurrnetMonthRange';
import { createClient } from '@/utils/supabase/client';

export const fetchMonthlyStats = async (userId: string) => {
  const client = createClient();
  const { startOfMonth, endOfMonth } = getCurrentMonthRange();

  const { data, error } = await client
    .from('running_proof_posts')
    .select('id, created_at, distance_km')
    .eq('user_id', userId)
    .gte('created_at', startOfMonth.toISOString())
    .lte('created_at', endOfMonth.toISOString());

  if (error) {
    console.error('Failed to fetch MothlyStats: ', error);
  }

  return data ?? [];
};
