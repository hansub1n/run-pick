import { IoMdPhotos } from 'react-icons/io';

const PhotoUploadField = () => {
  return (
    <div className='flex flex-col gap-[6px]'>
      <p className='text-[10px] text-[#787878]'>5km | 가보자고 5km!!!</p>
      <div className='h-[160px] rounded-[15px] border flex flex-col justify-center items-center'>
        <IoMdPhotos className='w-[70px] h-[70px]' />
        <p className='text-[14px]'>사진 추가</p>
      </div>
    </div>
  );
};

export default PhotoUploadField;
