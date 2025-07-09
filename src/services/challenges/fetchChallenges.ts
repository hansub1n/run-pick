import { createClient } from '@/utils/supabase/client';

export const fetchChallenges = async (level: string) => {
  const client = createClient();

  const { data, error } = await client.from('challenges').select('*').eq('level', level);

  if (error) {
    console.error('Failed to fetch challenges: ', error);
    return [];
  }

  return data;
};
