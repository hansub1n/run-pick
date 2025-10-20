import { updateFavoriteStatus } from '@/services/my-page/updateFavoriteStatus';
import { useUserStore } from '@/stores/useUserStore';
import Link from 'next/link';
import { FaCircleMinus } from 'react-icons/fa6';
import { GoStar, GoStarFill } from 'react-icons/go';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Friends } from '@/types/friends.types';

type FriendCardProps = {
  isFavorite: boolean;
  friendInfo: { id: string; nickname: string };
};

const FriendCard = ({ isFavorite, friendInfo }: FriendCardProps) => {
  const { id: userId } = useUserStore();
  const queryClient = useQueryClient();

  const mutation = useMutation<
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
        queryClient.setQueryData(QUERY_KEYS.friends(userId), context?.previousFriends);
        console.error('Failed to upload favoriteStauts: ', error.message);
      }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.friends(userId) }),
  });

  const onClickHandler = () => {
    const newValue = !isFavorite;
    mutation.mutate({ userId, friendId: friendInfo.id, isFavorite: newValue });
  };

  return (
    <div className='flex items-center w-full px-[6px] py-[15px] border-b'>
      <div onClick={() => onClickHandler()}>
        {isFavorite ? (
          <GoStarFill className='w-[24px] h-[24px] mr-[21px]' />
        ) : (
          <GoStar className='w-[24px] h-[24px] p-[1px] mr-[21px]' />
        )}
      </div>

      <Link
        href={`/my-friend/${friendInfo.id}`}
        className='flex-grow'
      >
        {friendInfo.nickname}
      </Link>
      <div>
        <FaCircleMinus className='w-[20px] h-[20px]' />
      </div>
    </div>
  );
};

export default FriendCard;
