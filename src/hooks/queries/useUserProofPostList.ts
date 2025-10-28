import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchUserProofPostList } from '@/services/my-page/fetchUserProofPostList';

export const useUserProofPostList = (id: string) => {
  const { data: userProofPostList } = useQuery({
    queryKey: QUERY_KEYS.userProofPosts(id),
    queryFn: () => fetchUserProofPostList(id),
    enabled: !!id,
  });

  return userProofPostList ?? [];
};
