import { useModalStore } from '@/stores/useModalStore';

const UnfriendButton = () => {
  const { open } = useModalStore();

  return (
    <button
      onClick={() => open('unfriend')}
      className='text-[12px] text-[#A4A2A2] px-[9px] border border-[#A4A2A2] rounded-[10px]'
    >
      친구 끊기
    </button>
  );
};

export default UnfriendButton;
