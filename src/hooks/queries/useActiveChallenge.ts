import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { checkAndUpdateChallengeStatus } from '@/services/challenges/checkAndUpdateChallengeStatus';
import { calculateCompletionRate } from '@/utils/calculateCompletionRate';

export const useActiveChallenge = (userId: string) => {
  const { data: activeChallenge } = useQuery({
    queryKey: QUERY_KEYS.activeChallenge(userId),
    queryFn: () => checkAndUpdateChallengeStatus(userId),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });

  const completionRate = calculateCompletionRate(activeChallenge ?? null);

  return { activeChallenge, completionRate };
};
