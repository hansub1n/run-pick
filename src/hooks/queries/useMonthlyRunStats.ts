'use client';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchMonthlyStats } from '@/services/my-page/fetchMonthlyStats';

export const useMonthlyStats = (userId: string) => {
  const { data } = useQuery({
    queryKey: QUERY_KEYS.monthlyStats(userId),
    queryFn: () => fetchMonthlyStats(userId),
    enabled: !!userId,
  });

  const totalDistance = data?.reduce((sum, post) => sum + Number(post.distance_km), 0) ?? 0;
  const totalRuns = data?.length ?? 0;

  return { totalDistance, totalRuns, posts: data ?? [] };
};
