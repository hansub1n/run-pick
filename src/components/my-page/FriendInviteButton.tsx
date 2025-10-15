import { ImUserPlus } from 'react-icons/im';
import UrlCopyButton from './UrlCopyButton';
import { useState } from 'react';

type FriendInviteButtonProps = {
  userId: string;
};
const FriendInviteButton = ({ userId }: FriendInviteButtonProps) => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const onClickHandler = () => {
    setIsInviteOpen((prev) => !prev);
  };
  return (
    <div>
      {isInviteOpen && <UrlCopyButton userId={userId} />}
      <ImUserPlus
        onClick={onClickHandler}
        className='w-[27px] h-[27px]'
      />
    </div>
  );
};

export default FriendInviteButton;
