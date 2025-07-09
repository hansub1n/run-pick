import { Level } from '@/types/challenges.types';
import { Distance } from '@/types/videos.types';

export const QUERY_KEYS = {
  authStatus: () => ['authStatus'],
  user: (userId: string) => ['user', userId],
  videos: (distance: Distance) => ['videos', distance],
  challenges: (level: Level) => ['challenges', level],
};
