import { YoutubeVideo } from '@/types/videos.types';
import { convertDistanceToNumber } from '@/utils/convertDistanceToNumber';
import { createClient } from '@/utils/supabase/server';

export const upsertVideos = async (videos: YoutubeVideo[], distance: string) => {
  const distanceValue = convertDistanceToNumber(distance);
  const client = await createClient();

  for (const video of videos) {
    if (
      !video.id ||
      !video.snippet?.title ||
      !video.snippet?.thumbnails?.medium?.url ||
      !video.contentDetails?.duration
    ) {
      console.warn('[업서트 스킵] 영상 데이터 누락:', {
        id: video.id,
        title: video.snippet?.title,
        thumbnails: video.snippet?.thumbnails,
        duration: video.contentDetails?.duration,
      });
      continue;
    }

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
