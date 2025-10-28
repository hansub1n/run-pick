import { createClient } from '@/utils/supabase/client';

export const fetchTopVideos = async () => {
  const client = createClient();

  const { data, error } = await client
    .from('video_with_counts')
    .select('*')
    .order('proof_count', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Failed to fetch video_with_counts: ');
  }

  return data;
};
