import { YoutubeVideo } from '@/types/videos.types';
import { convertDistanceToNumber } from '@/utils/convertDistanceToNumber';
import { createAdminClient } from '@/utils/supabase/server';

export const upsertVideos = async (videos: YoutubeVideo[], distance: string) => {
  const distanceValue = convertDistanceToNumber(distance);
  const client = createAdminClient();

  const videoUpsertPromises = videos.map(async (video) => {
    if (
      !video.id ||
      !video.snippet?.title ||
      !video.snippet?.thumbnails?.medium?.url ||
      !video.contentDetails?.duration ||
      !video.category
    ) {
      console.warn('[upsert] 영상 데이터 누락:', {
        id: video.id,
        title: video.snippet?.title,
        thumbnails: video.snippet?.thumbnails,
        duration: video.contentDetails?.duration,
        video_category: video.category,
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
        video_category: video.category,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'youtube_video_id' },
    );

    if (error) {
      console.error('DB upsert error:', error);
      return;
    }
  });

  await Promise.all(videoUpsertPromises);
};
