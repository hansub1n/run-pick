'use client';
import { useUserStore } from '@/stores/useUserStore';
import Image from 'next/image';
import DefaultProfileImg from '/public/assets/images/default-profile-img.webp';
import { useModalStore } from '@/stores/useModalStore';
import Modal from '../Modal';
import EditProfile from '../modal/EditProfile';
import EditProfileButton from './EditProfileButton';
import UnfriendButton from '../my-friend/UnfriendButton';
import Unfirend from '../modal/Unfirend';

type UserProfileSectionProps = {
  friendInfo?: {
    id?: string;
    profile_img_url?: string;
    nickname?: string;
  };
};

const UserProfileSection = ({ friendInfo }: UserProfileSectionProps) => {
  const { activeModal } = useModalStore();
  const { id: myId, nickname: myNickname, profileImgUrl: myProfileImgUrl } = useUserStore();
  const nickname = friendInfo ? friendInfo.nickname : myNickname;
  const profileImgUrl = friendInfo ? friendInfo.profile_img_url : myProfileImgUrl;

  return (
    <>
      <section className='flex flex-col items-center font-semibold mb-[20px]'>
        <div className='relative w-[72px] h-[72px] rounded-full overflow-hidden'>
          <Image
            src={profileImgUrl || DefaultProfileImg}
            alt={`${nickname} 프로필 이미지`}
            fill
            className='object-cover'
          />
        </div>
        <h1 className='text-[20px] m-[4px]'>{nickname}</h1>
        {friendInfo ? <UnfriendButton /> : <EditProfileButton />}
      </section>
      {friendInfo ? (
        <Modal id={'unfriend'}>
          {activeModal === 'unfriend' && (
            <Unfirend
              myId={myId}
              friendId={friendInfo.id!}
              friendNickname={nickname!}
            />
          )}
        </Modal>
      ) : (
        <Modal id={'edit-profile'}>{activeModal === 'edit-profile' && <EditProfile />}</Modal>
      )}
    </>
  );
};

export default UserProfileSection;
