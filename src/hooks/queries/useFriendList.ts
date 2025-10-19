import { useQueries, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchMyFriendList } from '@/services/my-page/fetchMyFriendList';
import { Friends } from '@/types/friends.types';

export const useFriendList = (userId: string) => {
  const { data: friendList } = useQuery({
    queryKey: QUERY_KEYS.friends(userId),
    queryFn: () => fetchMyFriendList(userId),
  });

  const sortedFriendList: Friends = friendList
    ? [...friendList.filter((friends) => friends.is_favorite), ...friendList.filter((friends) => !friends.is_favorite)]
    : [];

  return { sortedFriendList };
};
