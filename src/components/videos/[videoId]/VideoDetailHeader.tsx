'use client';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';

const VideoDetailHeader = () => {
  const { videoDetail, clearVideoDetail } = useVideoDetailStore();
  const router = useRouter();

  const onClickHanlder = () => {
    clearVideoDetail();
    router.back();
  };

  return (
    <header className='fixed absolute top-0 z-10 w-full h-[55px] px-[13px] flex items-center bg-[#1a1a1a]'>
      <FaChevronLeft
        onClick={onClickHanlder}
        className='min-w-[24px] min-h-[24px]'
      />
      <h1 className='font-semibold text-[20px] flex-grow text-center break-words line-clamp-1'>{videoDetail?.title}</h1>
    </header>
  );
};

export default VideoDetailHeader;
