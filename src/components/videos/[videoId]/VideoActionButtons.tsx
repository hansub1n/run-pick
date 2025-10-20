'use client';
import { useRouter } from 'next/navigation';
import { FaPersonRunning } from 'react-icons/fa6';
import VideoActionButton from './VideoActionButton';
import { useAuthStatus } from '@/hooks/queries/useAuthStatus';
import { GoStar, GoStarFill } from 'react-icons/go';
import { useUserStore } from '@/stores/useUserStore';
import { useUserFavoriteVideoList } from '@/hooks/queries/useUserFavoriteVideoList';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFavoriteVideo } from '@/services/videos/toggleFavoriteVideo';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';

type videoActionButtonsProps = {
  videoId: string;
};

const VideoActionButtons = ({ videoId }: videoActionButtonsProps) => {
  const { id: userId } = useUserStore();
  const { isSignedIn } = useAuthStatus();
  const { videoDetail } = useVideoDetailStore();
  const userFavoriteVideoList = useUserFavoriteVideoList(userId);
  const router = useRouter();
  const queryClient = useQueryClient();

  const isFavorite = userFavoriteVideoList.some((video) => video.info.youtube_video_id == videoId);

  const mutation = useMutation({
    mutationFn: () => toggleFavoriteVideo(userId, videoId, isFavorite),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.userFavoriteVideos(userId) });
      const previousVideo = userFavoriteVideoList;
      console.log('전 데이터 저장', previousVideo);

      const newVideoList = isFavorite
        ? previousVideo.filter((video) => video.info.youtube_video_id !== videoId)
        : [...previousVideo, { id: previousVideo.length + 1, info: { ...videoDetail! } }];

      console.log('일단 이거나 봐라', newVideoList);
      await queryClient.setQueryData(QUERY_KEYS.userFavoriteVideos(userId), newVideoList);
      return { previousVideo };
    },
    onError: (error, _, context) => {
      if (context?.previousVideo) {
        console.log('에러 발생! 이전으로 돌아감', context.previousVideo);
        console.error(error.message);
        queryClient.setQueryData(QUERY_KEYS.userFavoriteVideos(userId), context.previousVideo);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.userFavoriteVideos(userId) });
    },
  });

  const handlerFavoriteClick = () => {
    if (!isSignedIn) {
      router.push('/login');
      return;
    }

    mutation.mutate();
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
