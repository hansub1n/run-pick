import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchUserChallengeList } from '@/services/my-page/fetchUserChallengeList';
import { UserChallenges } from '@/types/userChallenges.type';

export const useUserChallengeList = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.userChallenges(id),
    queryFn: () => fetchUserChallengeList(id),
    enabled: !!id,
  });

  return { userChallengeList: data as UserChallenges, isLoading };
};
