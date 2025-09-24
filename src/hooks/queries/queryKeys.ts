import { Level } from '@/types/challenges.types';
import { Distance } from '@/types/videos.types';
import { ParamValue } from 'next/dist/server/request/params';

export const QUERY_KEYS = {
  authStatus: () => ['authStatus'],
  videos: (distance: Distance) => ['videos', distance],
  challenges: (level: Level) => ['challenges', level],
  relatedPosts: (videoId: ParamValue) => ['relatedPosts', videoId],
  activeChallenge: (userId: string) => ['activeChallenge', userId],
  topVideos: () => ['topVideos'],
  userChallenges: (userId: string) => ['userChallenges', userId],
  userRelatedPosts: (userId: string) => ['userRelatedPosts', userId],
  MonthlyStats: (userId: string) => ['MonthlyStats', userId],
};
