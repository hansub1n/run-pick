'use client';
import { useTopVideoList } from '@/hooks/queries/useTopVideoList';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { DBVideo } from '@/types/videos.types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaMedal } from 'react-icons/fa6';

const TopVideoList = () => {
  const { topVideoList } = useTopVideoList();
  const { setVideoDetail } = useVideoDetailStore();
  const router = useRouter();

  const onClickHandler = (video: DBVideo) => {
    setVideoDetail(video);
    router.push(`/videos/${video.youtube_video_id}`);
  };

  return (
    <section className='flex gap-[7px] pt-[8px]'>
      {topVideoList?.map((topVideo, idx) => (
        <div
          key={topVideo.id}
          className='flex flex-col items-center'
        >
          <div
            className='relative min-w-[100px] min-h-[65px]'
            onClick={() => onClickHandler(topVideo)}
          >
            <Image
              src={topVideo.thumbnail_url}
              alt={`${topVideo.title} 이미지`}
              fill
              className='object-cover rounded-[10px]'
            />
          </div>
          <h3 className='flex items-center text-[10px] gap-[3px]'>
            <FaMedal />
            {idx + 1}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default TopVideoList;
