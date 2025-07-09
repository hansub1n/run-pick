'use client';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { Level } from '@/types/challenges.types';
import { fetchChallenges } from '@/services/challenges/fetchChallenges';

export const useChallengeList = (level: Level) => {
  const { data: challengeList } = useQuery({
    queryKey: QUERY_KEYS.challenges(level),
    queryFn: () => fetchChallenges(level),
  });

  return challengeList ?? [];
};
