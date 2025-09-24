'use client';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { useParams, useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';

export default function VideosDetailLayout({ children }: { children: React.ReactNode }) {
  const { clearVideoDetail } = useVideoDetailStore();
  const params = useParams<{ videoId: string }>();
  const { videoDetail } = useVideoDetailStore();
  const router = useRouter();
  const onClickHanlder = () => {
    clearVideoDetail();
    router.back();
  };

  if (!params?.videoId || videoDetail?.youtube_video_id !== params.videoId) return null;
  return (
    <>
      <header className='fixed absolute top-0 z-20 w-full h-[55px] px-[13px] flex items-center bg-[#D9D9D9]'>
        <FaChevronLeft
          onClick={onClickHanlder}
          className='w-[24px] h-[24px]'
        />
        <h1 className='font-semibold text-[20px] flex-grow text-center line-clamp-1'>{videoDetail?.title}</h1>
      </header>
      {children}
    </>
  );
}
