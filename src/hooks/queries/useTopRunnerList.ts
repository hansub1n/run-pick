import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchTopRunners } from '@/services/home/fetchTopRunners';
import { calculateTopRunnerDisplay } from '@/utils/calculateTopRunnerDisplay';

export const useTopRunnerList = (userId: string) => {
  const { data: topRunnerList } = useQuery({
    queryKey: QUERY_KEYS.topRunners(),
    queryFn: () => fetchTopRunners(),
  });

  const { displayedRunners, myRank } = calculateTopRunnerDisplay(topRunnerList ?? null, userId);
  return { displayedRunners, myRank };
};
