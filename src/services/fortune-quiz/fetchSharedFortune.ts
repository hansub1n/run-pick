import { createClient } from '@/utils/supabase/client';

export const fetchSharedFortune = async (fortuneId: string) => {
  if (!fortuneId) return;

  const client = createClient();

  const { data, error } = await client.from('fortune_share').select('*').eq('id', fortuneId).single();

  if (error) {
    console.error('Failed to fetch error: ', error);
  }

  return data;
};
