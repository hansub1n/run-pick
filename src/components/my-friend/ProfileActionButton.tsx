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
      className='text-[12px] text-[#A4A2A2] px-[9px] border border-[#A4A2A2] rounded-[10px]'
    >
      {label}
    </button>
  );
};

export default ProfileActionButton;
