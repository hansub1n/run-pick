import { useModalStore } from '@/stores/useModalStore';

const EditProfileButton = () => {
  const { open } = useModalStore();

  return (
    <button
      onClick={() => open('edit-profile')}
      className='text-[12px] text-[#A4A2A2] px-[9px] border border-[#A4A2A2] rounded-[10px]'
    >
      프로필 수정
    </button>
  );
};

export default EditProfileButton;
