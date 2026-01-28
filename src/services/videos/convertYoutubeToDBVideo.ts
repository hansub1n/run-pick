import { DBVideo, Distance, RecommendedVideo, YoutubeVideo } from '@/types/videos.types';
import { convertDistanceToNumber } from '@/utils/convertDistanceToNumber';

export const convertYoutubeToDBVideo = (video: YoutubeVideo, distance: Distance): RecommendedVideo => ({
  isRecommended: true,
  id: `recommended_${video.id}`,
  youtube_video_id: video.id,
  title: video.snippet.title,
  thumbnail_url: video.snippet.thumbnails.medium.url,
  duration: video.contentDetails.duration,
  distance_category: convertDistanceToNumber(distance),
  video_category: video.category,
});
