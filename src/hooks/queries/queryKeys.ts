import { Level } from '@/types/challenges.types';
import { Distance } from '@/types/videos.types';
import { ParamValue } from 'next/dist/server/request/params';

export const QUERY_KEYS = {
  authStatus: () => ['authStatus'],
  videos: (distance: Distance) => ['videos', distance],
  challenges: (level: Level) => ['challenges', level],
  proofPosts: (videoId: ParamValue) => ['proofPosts', videoId],
  activeChallenge: (userId: string) => ['activeChallenge', userId],
  userChallenges: (userId: string) => ['userChallenges', userId],
  userProofPosts: (userId: string) => ['userProofPosts', userId],
  userFavoriteVideos: (userId: string) => ['userFavoriteVideos', userId],
  monthlyStats: (userId: string) => ['monthlyStats', userId],
  friends: (userId: string) => ['friends', userId],
  topVideos: () => ['topVideos'],
};
