'use client';
import { useTopVideoList } from '@/hooks/queries/useTopVideoList';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { DBVideo } from '@/types/videos.types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChevronRight, FaMedal } from 'react-icons/fa6';

const TopVideosSection = () => {
  const { topVideoList } = useTopVideoList();
  const { setVideoDetail } = useVideoDetailStore();
  const router = useRouter();

  const onClickHandler = (video: DBVideo) => {
    setVideoDetail(video);
    router.push(`/videos/${video.youtube_video_id}`);
  };

  console.log(topVideoList);
  return (
    <section>
      <div>
        <h1 className='flex items-center'>
          <Link
            href={'/videos'}
            className='flex items-center gap-[2px]'
          >
            모두가 달린 이달의 영상 TOP 3
            <FaChevronRight />
          </Link>
        </h1>
        <p className='text-[7px] text-[#787878]'>5분만 뛰어도 러너는 러너지. 이번 달도 같이 가요!</p>
      </div>
      <section className='flex gap-[7px] pt-[8px]'>
        {topVideoList?.map((topVideo) => (
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
              {topVideo.proof_count}
            </h3>
          </div>
        ))}
      </section>
    </section>
  );
};

export default TopVideosSection;
