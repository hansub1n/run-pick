import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchTopVideos } from '@/services/videos/fetchTopVideos';

export const useTopVideoList = () => {
  const { data: topVideoList } = useQuery({
    queryKey: QUERY_KEYS.topVideos(),
    queryFn: () => fetchTopVideos(),
  });

  return { topVideoList };
};
