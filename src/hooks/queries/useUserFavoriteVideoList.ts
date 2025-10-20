import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchUserFavoriteVideoList } from '@/services/my-page/fetchUserFavoriteVideoList';

export const useUserFavoriteVideoList = (userId: string) => {
  const { data: userfavoriteVideoList } = useQuery({
    queryKey: QUERY_KEYS.userFavoriteVideos(userId),
    queryFn: () => fetchUserFavoriteVideoList(userId),
  });

  return userfavoriteVideoList ?? [];
};
