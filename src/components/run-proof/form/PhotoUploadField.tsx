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
    <div className='flex flex-col gap-[6px]'>
      <p className='text-[10px] text-[#787878] line-clamp-1'>
        {videoDetail?.distance_category}km | {videoDetail?.title}
      </p>
      {previewUrl ? (
        <div className='h-[160px] w-[313px] rounded-[15px] bg-black relative overflow-hidden'>
          <Image
            src={previewUrl}
            alt='미리보기'
            fill
            className='object-contain'
          />
        </div>
      ) : (
        <label
          htmlFor='file-upload'
          className='h-[160px] rounded-[15px] border flex flex-col justify-center items-center'
        >
          <IoMdPhotos className='w-[70px] h-[70px]' />
          <p className='text-[14px]'>사진 추가</p>
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
