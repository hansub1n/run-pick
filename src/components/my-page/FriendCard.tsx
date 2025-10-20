import { useToggleFavoriteFriend } from '@/hooks/queries/useToggleFavoriteFriend';
import { useUserStore } from '@/stores/useUserStore';
import Link from 'next/link';
import { FaCircleMinus } from 'react-icons/fa6';
import { GoStar, GoStarFill } from 'react-icons/go';

type FriendCardProps = {
  isFavorite: boolean;
  friendInfo: { id: string; nickname: string };
};

const FriendCard = ({ isFavorite, friendInfo }: FriendCardProps) => {
  const { id: userId } = useUserStore();
  const { mutate: toggleFavorite } = useToggleFavoriteFriend(userId);

  const onClickHandler = () => {
    toggleFavorite({ userId, friendId: friendInfo.id, isFavorite: !isFavorite });
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
