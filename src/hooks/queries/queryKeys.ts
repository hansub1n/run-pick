import { Level } from '@/types/challenges.types';
import { Distance } from '@/types/videos.types';
import { ParamValue } from 'next/dist/server/request/params';

export const QUERY_KEYS = {
  authStatus: () => ['authStatus'],
  user: (userId: string) => ['user', userId],
  videos: (distance: Distance) => ['videos', distance],
  challenges: (level: Level) => ['challenges', level],
  relatedPosts: (videoId: ParamValue) => ['relatedPosts', videoId],
  activeChallenge: (userId: string) => ['activeChallenge', userId],
  // videoDetail: (videoId: ParamValue) => ['videoDetail', videoId],
};
