'use client';
import { useRouter } from 'next/navigation';
import { FaPersonRunning } from 'react-icons/fa6';
import VideoActionButton from './VideoActionButton';
import { useAuthStatus } from '@/hooks/queries/useAuthStatus';
import { GoStar, GoStarFill } from 'react-icons/go';
import { useUserStore } from '@/stores/useUserStore';
import { useUserFavoriteVideoList } from '@/hooks/queries/useUserFavoriteVideoList';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { useToggleFavoriteVideo } from '@/hooks/queries/useToggleFavoriteVideo';

type videoActionButtonsProps = {
  videoId: string;
};

const VideoActionButtons = ({ videoId }: videoActionButtonsProps) => {
  const { id: userId } = useUserStore();
  const { isSignedIn } = useAuthStatus();
  const { videoDetail } = useVideoDetailStore();
  const userFavoriteVideoList = useUserFavoriteVideoList(userId);
  const router = useRouter();

  const isFavorite = userFavoriteVideoList.some((video) => video.info.youtube_video_id == videoId);

  const { mutate: toggleFavoirte } = useToggleFavoriteVideo({
    userId,
    videoId,
    isFavorite,
    userFavoriteVideoList,
    videoDetail: videoDetail!,
  });

  const handlerFavoriteClick = () => {
    if (!isSignedIn) {
      router.push('/login');
      return;
    }

    toggleFavoirte();
  };

  const handleProofClick = (videoId: string) => {
    if (!isSignedIn) {
      router.push('/login');
      return;
    }
    router.push(`/run-proof/new?videoId=${videoId}`);
  };

  return (
    <>
      <div className='mt-[14px] flex gap-[24px] justify-center'>
        <VideoActionButton
          onClick={handlerFavoriteClick}
          label={'즐겨찾기'}
          icon={isFavorite ? <GoStarFill className='w-[16px] h-[16px]' /> : <GoStar className='w-[16px] h-[16px]' />}
        />
        <VideoActionButton
          onClick={() => handleProofClick(videoId)}
          label={'인증하기'}
          icon={<FaPersonRunning className='w-[16px] h-[16px]' />}
        />
      </div>
    </>
  );
};

export default VideoActionButtons;
