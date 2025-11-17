import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchTopVideos } from '@/services/home/fetchTopVideos';

export const useTopVideoList = () => {
  const { data: topVideoList, isLoading } = useQuery({
    queryKey: QUERY_KEYS.topVideos(),
    queryFn: () => fetchTopVideos(),
  });

  return { topVideoList, isLoading };
};
