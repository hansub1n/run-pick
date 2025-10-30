import { useToggleFavoriteFriend } from '@/hooks/queries/useToggleFavoriteFriend';
import { useUserStore } from '@/stores/useUserStore';
import Link from 'next/link';
import { GoStar, GoStarFill } from 'react-icons/go';
import UnFriendButton from './UnFriendButton';
import Modal from '../Modal';
import Unfirend from '../modal/Unfirend';
import { useModalStore } from '@/stores/useModalStore';

type FriendCardProps = {
  isFavorite: boolean;
  friendInfo: { id: string; nickname: string };
};

const FriendCard = ({ isFavorite, friendInfo }: FriendCardProps) => {
  const { id: myId } = useUserStore();
  const { mutate: toggleFavorite } = useToggleFavoriteFriend(myId);
  const { activeModal } = useModalStore();

  const onClickHandler = () => {
    toggleFavorite({ myId, friendId: friendInfo.id, isFavorite: !isFavorite });
  };

  return (
    <>
      <div className='flex items-center w-full px-[10px] py-[15px] border-b border-[#2A2A2A] hover:bg-[#1E1E1E] transition-colors'>
        <div onClick={() => onClickHandler()}>
          {isFavorite ? (
            <GoStarFill className='cursor-pointer w-[22px] h-[22px] mr-[16px] text-[#007AFF]' />
          ) : (
            <GoStar className='cursor-pointer w-[22px] h-[22px] mr-[16px] text-[#777]' />
          )}
        </div>

        <Link
          href={`/my-friend/${friendInfo.id}`}
          className='flex-grow text-[14px] text-[#EAEAEA]'
        >
          {friendInfo.nickname}
        </Link>

        <UnFriendButton modalId='unfriend' />
      </div>
      <Modal id={'unfriend'}>
        {activeModal === 'unfriend' && (
          <Unfirend
            myId={myId}
            friendId={friendInfo.id!}
            friendNickname={friendInfo.nickname!}
          />
        )}
      </Modal>
    </>
  );
};

export default FriendCard;
