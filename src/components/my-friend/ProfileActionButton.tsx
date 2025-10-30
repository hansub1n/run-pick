import { useModalStore } from '@/stores/useModalStore';

type ProfileActionButtonProps = {
  modalId: string;
  label: string;
};
const ProfileActionButton = ({ modalId, label }: ProfileActionButtonProps) => {
  const { open } = useModalStore();

  return (
    <button
      onClick={() => open(modalId)}
      className='cursor-pointer text-[12px] text-[#787878] px-[9px] border border-[#787878] rounded-[10px]'
    >
      {label}
    </button>
  );
};

export default ProfileActionButton;
