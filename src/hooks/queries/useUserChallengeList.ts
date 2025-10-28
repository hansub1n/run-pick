import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchUserChallengeList } from '@/services/my-page/fetchUserChallengeList';

export const useUserChallengeList = (id: string) => {
  const { data: userChallegeList } = useQuery({
    queryKey: QUERY_KEYS.userChallenges(id),
    queryFn: () => fetchUserChallengeList(id),
    enabled: !!id,
  });

  return userChallegeList ?? [];
};
