import { useModalStore } from '@/stores/useModalStore';
import { FaCircleMinus } from 'react-icons/fa6';

type UnFriendButtonProps = {
  modalId: string;
};

const UnFriendButton = ({ modalId }: UnFriendButtonProps) => {
  const { open } = useModalStore();

  return (
    <FaCircleMinus
      onClick={() => open(modalId)}
      className='cursor-pointer w-[20px] h-[20px] text-[#787878]'
    />
  );
};

export default UnFriendButton;
