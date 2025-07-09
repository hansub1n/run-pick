import { Distance } from '@/types/videos.types';
import { NextResponse } from 'next/server';
export const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export const keywords3km = [
  '3km 러닝 브이로그',
  '조깅 음악 모음',
  '아이돌 무대 모음',
  '조깅 할 때 듣는 노래',
  '가볍게 달릴 때 좋은 음악',
  '운동 브금 모음',
  '런닝 입문 브이로그',
  'Kpop 퍼포먼스 모음',
];
export const keywords5km = [
  '5km 러닝 브이로그',
  '5km 달리기 음악',
  '빠른 bpm 러닝 음악',
  '러닝할 때 듣는 댄스곡',
  '러닝 메이트 브이로그',
  '5km 운동 루틴',
  '살 빼는 달리기',
  '아이돌 직캠 몰아보기',
];

export const keywords10km = [
  '10km 러닝 브금',
  '장거리 달리기 음악',
  '런닝머신용 플레이리스트',
  '에너지 채워주는 아이돌 무대',
  '러닝 다큐멘터리',
  '10km 러닝 vlog',
  '런닝 중 집중 잘 되는 음악',
  '운동할 때 듣는 감성 노래',
];

export const keywordMap: Record<Distance, string[]> = {
  '3km': keywords3km,
  '5km': keywords5km,
  '10km': keywords10km,
};

export const fetchVideosFromYoutube = async (distance: string) => {
  const keywords = keywordMap[(distance as Distance) ?? '3km'];
  const fetches = keywords.map((keyword) =>
    fetch(
      `${YOUTUBE_API_BASE_URL}/search?part=snippet&maxResults=5&q=${encodeURIComponent(keyword)}&type=video&key=${YOUTUBE_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        return data.items ?? [];
      }),
  );

  const searchResults = await Promise.all(fetches);

  const allItems = searchResults.flat().filter(Boolean);

  const videoIdsSet = new Set();

  allItems.forEach((item) => {
    if (item.id?.videoId) videoIdsSet.add(item.id.videoId);
  });
  const videoIds = Array.from(videoIdsSet).join(',');

  if (!videoIds) {
    return NextResponse.json([]);
  }

  const videosRes = await fetch(
    `${YOUTUBE_API_BASE_URL}/videos?part=contentDetails,snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`,
  );
  const videosData = await videosRes.json();

  return videosData.items ?? [];
};
