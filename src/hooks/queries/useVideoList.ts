import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { Distance } from '@/types/videos.types';

const fetchVideosFromAPI = async (distance: Distance) => {
  const res = await fetch(`/api/videos?distance=${distance}`);
  const data = await res.json();

  return data ?? [];
};

export const useVideoList = (distance: Distance) => {
  const { data: videoList } = useQuery({
    queryKey: QUERY_KEYS.videos(distance),
    queryFn: () => fetchVideosFromAPI(distance),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return videoList ?? [];
};
