import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { Distance } from '@/types/videos.types';

const fetchVideosFromAPI = async (distance: Distance, pageParam: number) => {
  const res = await fetch(`/api/videos?distance=${distance}&page=${pageParam}&limit=10`);
  const data = await res.json();

  return data;
};

export const useVideoList = (distance: Distance) => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: QUERY_KEYS.videos(distance),
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchVideosFromAPI(distance, pageParam),
    getNextPageParam: (lastPage, allPages) => (lastPage.videos.length < 10 ? undefined : allPages.length + 1),
  });

  const videoList = data?.pages.flatMap((page) => page.videos) ?? [];

  return { videoList, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage };
};
