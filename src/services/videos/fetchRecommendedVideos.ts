import { Category, Distance, YoutubeItems } from '@/types/videos.types';
import { keywordMap, YOUTUBE_API_BASE_URL, YOUTUBE_API_KEY } from './fetchVideosFromYoutube';

export const fetchRecommendedVideos = async (distance: string, preferredCategory: Category) => {
  const keywordByCategory = keywordMap[(distance as Distance) ?? '3km'][preferredCategory];

  const fetches = keywordByCategory.map((keyword) =>
    fetch(
      `${YOUTUBE_API_BASE_URL}/search?part=snippet&maxResults=3&q=${encodeURIComponent(keyword)}&type=video&key=${YOUTUBE_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        return (data.items ?? []).map((item: YoutubeItems) => ({
          ...item,
          category: preferredCategory,
        }));
      }),
  );

  return fetches;
};
