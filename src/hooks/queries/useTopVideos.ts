import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchTopVideos } from '@/services/home/fetchTopVideos';

export const useTopVideos = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.topVideos(),
    queryFn: () => fetchTopVideos(),
    refetchInterval: 12 * 60 * 60 * 1000,
  });

  return { topVideoList: data, isLoading };
};
