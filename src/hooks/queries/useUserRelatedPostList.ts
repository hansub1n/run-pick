import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchUserRelatedPostList } from '@/services/my-page/fetchUserRelatedPostList';

export const useUserRelatedPostList = (id: string) => {
  const { data: userRelatedPostList } = useQuery({
    queryKey: QUERY_KEYS.userRelatedPosts(id),
    queryFn: () => fetchUserRelatedPostList(id),
    enabled: !!id,
  });

  return userRelatedPostList ?? [];
};
