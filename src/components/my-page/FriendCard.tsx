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
        <UnFriendButton modalId={'unfriend'} />
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
