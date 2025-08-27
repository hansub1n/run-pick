import { useQuery } from '@tanstack/react-query';
import { ParamValue } from 'next/dist/server/request/params';
import { QUERY_KEYS } from './queryKeys';
import { fetchRelatedPosts } from '@/services/run-proof/fetchRelatedPosts';

export const useRelatedPostList = (videoId: ParamValue) => {
  const { data: realatedPostList } = useQuery({
    queryKey: QUERY_KEYS.relatedPosts(videoId),
    queryFn: () => fetchRelatedPosts(videoId),
  });

  return realatedPostList ?? [];
};
