import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchUserProofPostList } from '@/services/my-page/fetchUserProofPostList';
import { ProofPosts } from '@/types/proofPosts.types';

export const useUserProofPostList = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.userProofPosts(id),
    queryFn: () => fetchUserProofPostList(id),
    enabled: !!id,
  });

  return { userProofPostList: data as ProofPosts, isLoading };
};
