import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchActiveChallenge } from '@/services/home/fetchActiveChallenge';

export const useActiveChallenge = (userId: string) => {
  const { data: activeChallenge } = useQuery({
    queryKey: QUERY_KEYS.activeChallenge(userId),
    queryFn: () => fetchActiveChallenge(userId),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });

  let completionRate: number | null = null;

  if (activeChallenge?.challenges) {
    const type = activeChallenge.challenges.type;
    const target = activeChallenge.challenges.target;

    if (type === 'distance') {
      completionRate = (activeChallenge.progress_km / target) * 100;
    } else if (type === 'count') {
      completionRate = (activeChallenge.run_count / target) * 100;
    }

    if (completionRate !== null) {
      completionRate = Math.min(100, Math.max(0, completionRate));
    }
  }

  return { activeChallenge, completionRate };
};
