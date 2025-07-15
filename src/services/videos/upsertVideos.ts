import { YoutubeVideo } from '@/types/videos.types';
import { convertDistanceToNumber } from '@/utils/convertDistanceToNumber';
import { createClient } from '@/utils/supabase/server';

export const upsertVideos = async (videos: YoutubeVideo[], distance: string) => {
  const distanceValue = convertDistanceToNumber(distance);
  const client = await createClient();

  const videoUpsertPromises = videos.map(async (video) => {
    if (
      !video.id ||
      !video.snippet?.title ||
      !video.snippet?.thumbnails?.medium?.url ||
      !video.contentDetails?.duration
    ) {
      console.warn('[upsert] 영상 데이터 누락:', {
        id: video.id,
        title: video.snippet?.title,
        thumbnails: video.snippet?.thumbnails,
        duration: video.contentDetails?.duration,
      });
      return;
    }

    const { error } = await client.from('videos').upsert(
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

    if (error) {
      console.error('DB upsert error:', error);
    }
  });

  await Promise.all(videoUpsertPromises);
};
