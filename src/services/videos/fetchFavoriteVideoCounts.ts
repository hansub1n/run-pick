import { createClient } from '@/utils/supabase/client';

export const fetchFavoriteVideoCounts = async (videoId: string) => {
  const client = createClient();
  const { data } = await client.from('video_favorite_counts').select('count').eq('youtube_video_id', videoId);
  if (!data) return 0;

  return data;
};
