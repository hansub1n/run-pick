'use client';
import { useUserStore } from '@/stores/useUserStore';
import Image from 'next/image';
import DefaultProfileImg from '/public/assets/images/default-profile-img.webp';
import { useModalStore } from '@/stores/useModalStore';
import Modal from '../Modal';
import EditProfile from '../modal/EditProfile';

const UserProfileSection = () => {
  const { activeModal, open } = useModalStore();
  const { nickname, profileImgUrl } = useUserStore();

  return (
    <>
      <section className='flex flex-col items-center font-semibold mb-[33px]'>
        <div className='relative w-[72px] h-[72px] rounded-full overflow-hidden'>
          <Image
            src={profileImgUrl || DefaultProfileImg}
            alt={`${nickname} 프로필 이미지`}
            fill
            className='object-cover'
          />
        </div>
        <h1 className='text-[20px] mb-[4px]'>{nickname}</h1>
        <button
          onClick={() => open('edit-profile')}
          className='text-[12px] text-[#A4A2A2] px-[9px] border border-[#A4A2A2] rounded-[10px]'
        >
          프로필 수정
        </button>
      </section>
      <Modal id={'edit-profile'}>{activeModal === 'edit-profile' && <EditProfile />}</Modal>
    </>
  );
};

export default UserProfileSection;
