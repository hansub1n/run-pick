import { Videos } from '@/types/videos.types';
import { convertDistanceToNumber } from '@/utils/convertDistanceToNumber';
import { createClient } from '@/utils/supabase/server';

export const upsertVideos = async (videos: Videos, distance: string) => {
  const distanceValue = convertDistanceToNumber(distance);
  const client = await createClient();

  for (const video of videos) {
    await client.from('videos').upsert(
      {
        youtube_video_id: video.id,
        title: video.snippet.title,
        thumbnail_url: video.snippet.thumbnails.medium.url,
        duration: video.contentDetails.duration,
        distance_category: distanceValue,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'youtube_video_id' },
    );
  }
};
