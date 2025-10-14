import Link from 'next/link';
import React, { useState } from 'react';
import { FaCircleMinus } from 'react-icons/fa6';
import { GoStar, GoStarFill } from 'react-icons/go';

type FriendCardProps = {
  id: number;
  friend_id: string;
  friend_nickname: string;
  is_favorite: boolean;
};

const FriendCard = ({ friend_id, friend_nickname, is_favorite }: FriendCardProps) => {
  const [isFavorite, setIsFavorite] = useState(is_favorite);

  const onClickHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className='flex items-center w-full px-[6px] py-[15px] border-b'>
      <div onClick={() => onClickHandler()}>
        {isFavorite ? (
          <GoStar className='w-[24px] h-[24px] p-[1px] mr-[21px]' />
        ) : (
          <GoStarFill className='w-[24px] h-[24px] mr-[21px]' />
        )}
      </div>

      <Link
        href={`/my-friend/${friend_id}`}
        className='flex-grow'
      >
        {friend_nickname}
      </Link>
      <div>
        <FaCircleMinus className='w-[20px] h-[20px]' />
      </div>
    </div>
  );
};

export default FriendCard;
