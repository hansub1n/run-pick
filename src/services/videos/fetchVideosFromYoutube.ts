import { Category, Distance, YoutubeVideo } from '@/types/videos.types';
import { durationToSeconds } from '@/utils/durationToSeconds';
import { promiseWithConcurrency } from '@/utils/promiseWithConcurrency';
import { fetchVideos } from './fetchVideos';
import { fetchRecommendedVideos } from './fetchRecommendedVideos';
export const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export const keywords3km: KeywordMapByCategory = {
  music: ['조깅 플레이리스트', '가볍게 달릴 때 듣는 음악'],
  vlog: ['러닝 입문 브이로그', '첫 러닝 3km 후기'],
  training: ['러닝 초보 3km 루틴', '조깅 자세 설명'],
  info: ['러닝화 추천 입문', '조깅 효과'],
  motivation: [],
};

export const keywords5km: KeywordMapByCategory = {
  music: ['러닝 bpm 160 음악', '달리기 템포 음악'],
  vlog: ['5km 러닝 브이로그', '퇴근 후 러닝 브이로그'],
  training: ['5km 러닝 훈련법', '페이스 유지하는 법'],
  motivation: ['러닝 동기부여 영상', '살 빼는 러닝 루틴'],
  info: [],
};

export const keywords10km: KeywordMapByCategory = {
  music: ['장거리 러닝 플레이리스트', '집중 잘 되는 러닝 음악'],
  vlog: ['10km 러닝 브이로그', '러닝 다큐멘터리'],
  training: ['10km 러닝 훈련 계획', '지구력 키우는 러닝'],
  motivation: ['러닝 멘탈 관리', '포기하고 싶을 때 러닝'],
  info: [],
};

export type KeywordMapByCategory = Record<Category, string[]>;
export const keywordMap: Record<Distance, KeywordMapByCategory> = {
  '3km': keywords3km,
  '5km': keywords5km,
  '10km': keywords10km,
};

export const fetchVideosFromYoutube = async (distance: string, preferredCategory?: Category) => {
  console.log(
    '[fetchVideosFromYoutube] distance:',
    distance,
    'preferredCategory:',
    preferredCategory,
    'YOUTUBE_API_KEY exists:',
    !!YOUTUBE_API_KEY,
  );

  const fetches = preferredCategory
    ? await fetchRecommendedVideos(distance, preferredCategory)
    : await fetchVideos(distance);

  console.log('[fetchVideosFromYoutube] fetches count:', fetches.length);

  const searchResults = await promiseWithConcurrency(
    fetches.map((p) => () => p),
    4,
  );

  const allItems = searchResults.flat().filter(Boolean);

  const categoryMap = new Map<string, Category>();

  allItems.forEach((item) => {
    if (item.id?.videoId && item.category) categoryMap.set(item.id.videoId, item.category);
  });
  const videoIds = [...categoryMap.keys()].join(',');
  if (!videoIds) {
    return [];
  }

  const videosRes = await fetch(
    `${YOUTUBE_API_BASE_URL}/videos?part=contentDetails,snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`,
  );
  const videosData = await videosRes.json();
  const items = Array.isArray(videosData?.items) ? videosData.items : [];

  const filteredVideos = items
    .filter((video: YoutubeVideo) => {
      const seconds = durationToSeconds(video.contentDetails.duration);
      return seconds >= 180;
    })
    .map((video: YoutubeVideo) => ({
      ...video,
      category: categoryMap.get(video.id),
    }));

  return filteredVideos;
};
