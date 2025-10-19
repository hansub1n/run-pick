import { ImUserPlus } from 'react-icons/im';
import UrlCopyButton from './UrlCopyButton';
import { useState } from 'react';
import { useUserStore } from '@/stores/useUserStore';

const FriendInviteButton = () => {
  const { id } = useUserStore();
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const onClickHandler = () => {
    setIsInviteOpen((prev) => !prev);
  };
  return (
    <div>
      {isInviteOpen && <UrlCopyButton userId={id} />}
      <ImUserPlus
        onClick={onClickHandler}
        className='w-[27px] h-[27px]'
      />
    </div>
  );
};

export default FriendInviteButton;
