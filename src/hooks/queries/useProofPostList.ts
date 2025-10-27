import { useQuery } from '@tanstack/react-query';
import { ParamValue } from 'next/dist/server/request/params';
import { QUERY_KEYS } from './queryKeys';
import { fetchProofPosts } from '@/services/run-proof/fetchProofPosts';

export const useProofPostList = (videoId: ParamValue) => {
  const { data: proofPostList } = useQuery({
    queryKey: QUERY_KEYS.proofPosts(videoId),
    queryFn: () => fetchProofPosts(videoId),
  });

  return proofPostList ?? [];
};
