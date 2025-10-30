'use client';
import { DBVideo } from '@/types/videos.types';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { IoMdPhotos } from 'react-icons/io';

type PhotoUploadFieldProps = {
  videoDetail: DBVideo | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const PhotoUploadField = ({ videoDetail, onChange }: PhotoUploadFieldProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreviewUrl(result);

      const synethicEvent = {
        target: {
          name: 'image_url',
          value: result,
        },
      } as unknown as ChangeEvent<HTMLInputElement>;

      onChange(synethicEvent);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className='flex flex-col gap-[8px]'>
      <p className='text-[11px] text-[#787878] line-clamp-1'>
        {videoDetail?.distance_category}km | {videoDetail?.title}
      </p>

      {previewUrl ? (
        <div className='cursor-pointer h-[160px] w-[313px] rounded-[15px] overflow-hidden relative'>
          <Image
            src={previewUrl}
            alt='미리보기'
            fill
            className='object-cover hover:scale-[1.03] transition-transform duration-300'
          />
        </div>
      ) : (
        <label
          htmlFor='file-upload'
          className='cursor-pointer h-[160px] rounded-[15px] border border-[#2C2C2C]
                   flex flex-col justify-center items-center
                   bg-[#1A1A1A] hover:bg-[#232323] transition-colors duration-300'
        >
          <IoMdPhotos className='w-[65px] h-[65px] text-[#B5B5B5]' />
          <p className='text-[13px] text-[#B5B5B5] mt-[5px]'>사진 추가</p>
        </label>
      )}

      <input
        id='file-upload'
        type='file'
        accept='image/*'
        onChange={onChangeHandler}
        className='hidden'
      />
    </div>
  );
};

export default PhotoUploadField;
