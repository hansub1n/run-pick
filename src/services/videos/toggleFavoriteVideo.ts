import { createClient } from '@/utils/supabase/client';

export const toggleFavoriteVideo = async (userId: string, videoId: string, isFavorite: boolean) => {
  const client = createClient();

  if (isFavorite) {
    const { error: deleteError } = await client
      .from('video_favorite')
      .delete()
      .eq('user_id', userId)
      .eq('youtube_video_id', videoId);

    if (deleteError) {
      throw new Error('Failed to insert error: ' + deleteError.message);
    }
  } else {
    const { error: insertError } = await client.from('video_favorite').insert({
      user_id: userId,
      youtube_video_id: videoId,
    });

    if (insertError) {
      throw new Error('Failed to insert error: ' + insertError.message);
    }
  }
};
