import { createClient } from '@/utils/supabase/client';

export const fetchTopVideos = async () => {
  const client = createClient();

  let { data, error } = await client
    .from('video_with_counts')
    .select('*')
    .order('proof_count', { ascending: false })
    .limit(3);

  if (error) throw error;

  if (data && data.length > 0) return data;

  ({ data, error } = await client
    .from('video_with_counts')
    .select('*')
    .order('favorite_count', { ascending: false })
    .limit(3));

  if (error) throw error;

  if (data && data.length > 0) return data;

  ({ data, error } = await client
    .from('video_with_counts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3));

  if (error) throw error;

  return data ?? [];
};
