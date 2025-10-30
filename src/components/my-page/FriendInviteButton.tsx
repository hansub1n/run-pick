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
      <div
        onClick={onClickHandler}
        className='cursor-pointer flex items-center justify-center
             w-[35px] h-[35px] rounded-full 
             bg-[#2C2C2C] text-[#EDEDED]
             transition-all hover:bg-[#3A3A3A] hover:scale-[1.05] active:scale-[0.97]'
      >
        <ImUserPlus className='w-[20px] h-[20px]' />
      </div>
    </div>
  );
};

export default FriendInviteButton;
