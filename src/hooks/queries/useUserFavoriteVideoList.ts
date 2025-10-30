import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchUserFavoriteVideoList } from '@/services/my-page/fetchUserFavoriteVideoList';
import { UserFavoriteVideos } from '@/types/userFavoriteVideos.type';

export const useUserFavoriteVideoList = (userId: string) => {
  const { data: userFavoriteVideoList } = useQuery({
    queryKey: QUERY_KEYS.userFavoriteVideos(userId),
    queryFn: () => fetchUserFavoriteVideoList(userId),
    enabled: !!userId,
  });

  return (userFavoriteVideoList as unknown as UserFavoriteVideos) ?? [];
};
