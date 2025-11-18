'use client';
import { useTopVideoList } from '@/hooks/queries/useTopVideoList';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import Image from 'next/image';
import { FaMedal } from 'react-icons/fa6';
import TopVideoSkeleton from '../skeletons/TopVideoSkeleton';
import Link from 'next/link';

const TopVideoList = () => {
  const { topVideoList, isLoading } = useTopVideoList();
  const { setVideoDetail } = useVideoDetailStore();

  if (isLoading) {
    return (
      <section
        aria-busy='true'
        aria-label='Top videos loading'
        className='flex gap-[6px] pt-[8px]'
      >
        <TopVideoSkeleton count={3} />
      </section>
    );
  }

  return (
    <section className='flex gap-[6px] pt-[8px]'>
      {topVideoList?.map((topVideo, idx) => (
        <div
          key={topVideo.id}
          className='flex flex-col items-center'
        >
          <Link
            href={`/videos/${topVideo.youtube_video_id}`}
            className='cursor-pointer'
            onClick={() => setVideoDetail(topVideo)}
          >
            <Image
              src={topVideo.thumbnail_url}
              alt={`${topVideo.title} 이미지`}
              width={100}
              height={56}
              priority={true}
              quality={60}
              className='object-cover rounded-[10px]'
            />
          </Link>
          <h3 className='flex items-center text-[12px] gap-[3px] font-semibold'>
            <FaMedal />
            {idx + 1}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default TopVideoList;
