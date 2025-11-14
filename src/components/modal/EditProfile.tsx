'use client';
import { useUserStore } from '@/stores/useUserStore';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import { ChangeEvent, useState } from 'react';
import { updateUserProfile } from '@/services/my-page/updateUserProfile';
import { useModalStore } from '@/stores/useModalStore';
import DefaultProfileImg from '/public/assets/images/default-profile-img.webp';
import { toast } from 'react-toastify';

const EditProfile = () => {
  const { close } = useModalStore();
  const { id, nickname, setNickname, profileImgUrl, setProfileImgUrl } = useUserStore();

  const initialProfile = {
    profileImgUrl,
    nickname,
  };

  const [newProfile, setProfile] = useState(initialProfile);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;

      const synethicEvent = {
        target: {
          name: 'profileImgUrl',
          value: result,
        },
      } as unknown as ChangeEvent<HTMLInputElement>;

      onChangeProfileHandler(synethicEvent);
    };

    reader.readAsDataURL(file);
  };
  const onChangeProfileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickHandler = () => {
    if (newProfile.nickname === '') {
      toast.info('닉네임을 작성해주세요');
      return;
    }

    setNickname(newProfile.nickname);
    setProfileImgUrl(newProfile.profileImgUrl);

    updateUserProfile(id, newProfile);

    close();
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-semibold text-[20px] mb-[12px]'>프로필 수정</h1>
      <div className='flex items-center flex-col gap-[10px]'>
        <div className='relative w-[78px]'>
          <div className='relative w-[72px] h-[72px] rounded-full overflow-hidden'>
            <Image
              src={newProfile.profileImgUrl || DefaultProfileImg}
              alt={`${nickname} 프로필 이미지`}
              fill
              className='object-cover'
            />
          </div>
          <label htmlFor='file-upload'>
            <div className='cursor-pointer absolute bottom-[3px] right-[-4px] flex items-center justify-center w-[25px] h-[25px] pl-[3px] rounded-[10px] bg-[#007aff]'>
              <FaEdit className='w-[15px] h-[15px]' />
            </div>
          </label>
          <input
            id='file-upload'
            type='file'
            accept='image/*'
            className='hidden'
            onChange={onChangeHandler}
          />
        </div>

        <input
          type='text'
          name='nickname'
          value={newProfile.nickname}
          placeholder='새로운 닉네임'
          onChange={onChangeProfileHandler}
          className='w-[200px] h-[36px] rounded-[10px] border border-[#414141] bg-[#262626] px-[10px]'
        />
      </div>
      <div className='mt-[20px] flex gap-[18px] text-[14px]'>
        <button
          onClick={onClickHandler}
          className='cursor-pointer font-semibold  px-[35px] py-[7px] bg-[#007aff] rounded-[10px] transition-colors hover:bg-[#0066cc]'
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
