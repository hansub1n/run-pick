import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchTopRunners } from '@/services/home/fetchTopRunners';
import { calculateTopRunnerDisplay } from '@/utils/calculateTopRunnerDisplay';

export const useTopRunners = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.topRunners(),
    queryFn: () => fetchTopRunners(),
  });

  const { displayedRunners, myRank } = calculateTopRunnerDisplay(data ?? null, userId);

  return { topRunnerList: displayedRunners, myRank, isLoading };
};
