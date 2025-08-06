'use client';
import { DBVideo } from '@/types/videos.types';
import { IoMdPhotos } from 'react-icons/io';

type PhotoUploadFieldProps = {
  videoDetail: DBVideo | null;
  image_url: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const PhotoUploadField = ({ videoDetail, image_url, onChange }: PhotoUploadFieldProps) => {
  return (
    <div className='flex flex-col gap-[6px]'>
      <p className='text-[10px] text-[#787878] line-clamp-1'>
        {videoDetail?.distance_category}km | {videoDetail?.title}
      </p>
      <label
        htmlFor='file-upload'
        className='h-[160px] rounded-[15px] border flex flex-col justify-center items-center'
      >
        <IoMdPhotos className='w-[70px] h-[70px]' />
        <p className='text-[14px]'>사진 추가</p>
      </label>
      <input
        id='file-upload'
        type='file'
        accept='image/*'
        className='hidden'
      />
    </div>
  );
};

export default PhotoUploadField;
