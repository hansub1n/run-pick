import { ActiveChallenge } from '@/types/userChallenges.type';

export const calculateCompletionRate = (challenge: ActiveChallenge) => {
  if (!challenge?.info) return null;

  const info = Array.isArray(challenge.info) ? challenge.info[0] : challenge.info;

  let completionRate: number | null = null;

  if (info.type === 'distance' && challenge.progress_km !== undefined) {
    completionRate = Math.floor((challenge.progress_km / info.target) * 100);
  } else if (info.type === 'count' && challenge.run_count !== undefined) {
    completionRate = Math.floor((challenge.run_count / info.target) * 100);
  }

  if (completionRate !== null) {
    completionRate = Math.min(100, Math.max(0, completionRate));
  }

  return completionRate;
};
