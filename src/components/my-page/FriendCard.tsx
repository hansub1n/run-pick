import { updateFavoriteStatus } from '@/services/my-page/updateFavoriteStatus';
import { useUserStore } from '@/stores/useUserStore';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCircleMinus } from 'react-icons/fa6';
import { GoStar, GoStarFill } from 'react-icons/go';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { useQueryClient } from '@tanstack/react-query';

type FriendCardProps = {
  isFavorite: boolean;
  friendInfo: { id: string; nickname: string };
};

const FriendCard = ({ isFavorite: initialFavorite, friendInfo }: FriendCardProps) => {
  const { id: userId } = useUserStore();
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const queryClient = useQueryClient();

  const onClickHandler = async () => {
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    await updateFavoriteStatus(userId, friendInfo.id, newValue);
    await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.friends(userId) });
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
