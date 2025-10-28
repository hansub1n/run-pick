import { updateFavoriteStatus } from '@/services/my-page/updateFavoriteStatus';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Friends } from '@/types/friends.types';

export const useToggleFavoriteFriend = (myId: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<
    void,
    Error,
    { myId: string; friendId: string; isFavorite: boolean },
    { previousFriends?: Friends }
  >({
    mutationFn: ({ myId, friendId, isFavorite }) => updateFavoriteStatus(myId, friendId, isFavorite),

    onMutate: async ({ friendId }) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.friends(myId) });
      const previousFriends = (await queryClient.getQueryData(QUERY_KEYS.friends(myId))) as Friends;

      if (previousFriends) {
        const newData = previousFriends.map((friend) =>
          friend.info.id === friendId ? { ...friend, is_favorite: !friend.is_favorite } : friend,
        );

        await queryClient.setQueryData(QUERY_KEYS.friends(myId), newData);
      }

      return { previousFriends };
    },

    onError: (error, _, context) => {
      if (context?.previousFriends) {
        queryClient.setQueryData(QUERY_KEYS.friends(myId), context.previousFriends);
        console.error('Failed to upload favoriteStauts: ', error.message);
      }
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.friends(myId) }),
  });

  return { mutate };
};
