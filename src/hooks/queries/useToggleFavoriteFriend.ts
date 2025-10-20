import { updateFavoriteStatus } from '@/services/my-page/updateFavoriteStatus';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Friends } from '@/types/friends.types';

export const useToggleFavoriteFriend = (userId: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<
    void,
    Error,
    { userId: string; friendId: string; isFavorite: boolean },
    { previousFriends?: Friends }
  >({
    mutationFn: ({ userId, friendId, isFavorite }) => updateFavoriteStatus(userId, friendId, isFavorite),

    onMutate: async ({ friendId }) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.friends(userId) });
      const previousFriends = (await queryClient.getQueryData(QUERY_KEYS.friends(userId))) as Friends;

      if (previousFriends) {
        const newData = previousFriends.map((friend) =>
          friend.info.id === friendId ? { ...friend, is_favorite: !friend.is_favorite } : friend,
        );

        await queryClient.setQueryData(QUERY_KEYS.friends(userId), newData);
      }

      return { previousFriends };
    },

    onError: (error, _, context) => {
      if (context?.previousFriends) {
        queryClient.setQueryData(QUERY_KEYS.friends(userId), context.previousFriends);
        console.error('Failed to upload favoriteStauts: ', error.message);
      }
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.friends(userId) }),
  });

  return { mutate };
};
