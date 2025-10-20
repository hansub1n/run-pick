import { createClient } from '@/utils/supabase/client';

export const fetchUserFavoriteVideoList = async (userId: string) => {
  const client = createClient();
  const { data, error } = await client
    .from('video_favorites')
    .select('id, info:videos(youtube_video_id, title, thumbnail_url, distance_category, duration)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch userFavoriteVideoList: ', error);
  }
  return data ?? [];
};
