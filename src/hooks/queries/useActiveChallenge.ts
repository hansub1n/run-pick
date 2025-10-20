import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { checkAndUpdateChallengeStatus } from '@/services/challenges/checkAndUpdateChallengeStatus';

export const useActiveChallenge = (userId: string) => {
  const { data: activeChallenge } = useQuery({
    queryKey: QUERY_KEYS.activeChallenge(userId),
    queryFn: () => checkAndUpdateChallengeStatus(userId),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });

  let completionRate: number | null = null;

  if (Array.isArray(activeChallenge?.info)) {
    activeChallenge.info = activeChallenge.info[0];
  }

  if (activeChallenge?.info) {
    const type = activeChallenge.info.type;
    const target = activeChallenge.info.target;

    if (type === 'distance') {
      completionRate = Math.floor((activeChallenge.progress_km / target) * 100);
    } else if (type === 'count') {
      completionRate = Math.floor((activeChallenge.run_count / target) * 100);
    }

    if (completionRate !== null) {
      completionRate = Math.min(100, Math.max(0, completionRate));
    }
  }

  return { activeChallenge, completionRate };
};
