'use client';
import { useUserStore } from '@/stores/useUserStore';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import { ChangeEvent, useState } from 'react';
import { updateUserProfile } from '@/services/my-page/updateUserProfile';
import { useModalStore } from '@/stores/useModalStore';

const EditProfile = () => {
  const { close } = useModalStore();
  const { id, nickname, setNickname, profileImgUrl, setProfileImgUrl } = useUserStore();

  const initiallProfile = {
    profileImgUrl,
    nickname,
  };

  const [newProfile, setProfile] = useState(initiallProfile);

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
    setNickname(newProfile.nickname);
    setProfileImgUrl(newProfile.profileImgUrl);

    updateUserProfile(id, newProfile);

    close();
  };

  return (
    <div className='flex flex-col items-center font-semibold'>
      <h1 className='text-[20px] mb-[10px]'>프로필 수정</h1>
      <div className='flex items-center flex-col gap-[7px]'>
        <div className='relative w-[78px]'>
          <div className='relative w-[72px] h-[72px] rounded-full overflow-hidden'>
            <Image
              src={newProfile.profileImgUrl}
              alt={`${nickname} 프로필 이미지`}
              fill
              className='object-cover'
            />
          </div>
          <label htmlFor='file-upload'>
            <FaEdit className='z-12 absolute bottom-[3px] right-[-4px] w-[25px] h-[25px]' />
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
          onChange={onChangeProfileHandler}
          className='h-[35px] rounded-[10px] border px-[5px]'
        />
      </div>
      <div className='mt-[20px] flex gap-[18px] text-[14px]'>
        <button
          onClick={close}
          className='px-[35px] py-[7px] bg-[#EAEAEA] rounded-[10px]'
        >
          취소
        </button>
        <button
          onClick={onClickHandler}
          className='px-[35px] py-[7px] bg-[#AFAFAF] rounded-[10px]'
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
