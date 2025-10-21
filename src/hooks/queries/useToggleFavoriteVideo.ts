'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFavoriteVideo } from '@/services/videos/toggleFavoriteVideo';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { UserFavoriteVideos } from '@/types/userFavoriteVideos.type';
import { DBVideo } from '@/types/videos.types';

type UseToggleFavoriteVideoProps = {
  userId: string;
  videoId: string;
  isFavorite: boolean;
  userFavoriteVideoList: UserFavoriteVideos;
  videoDetail: DBVideo;
};

export const useToggleFavoriteVideo = ({
  userId,
  videoId,
  isFavorite,
  userFavoriteVideoList,
  videoDetail,
}: UseToggleFavoriteVideoProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => toggleFavoriteVideo(userId, videoId, isFavorite),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.userFavoriteVideos(userId) });
      const previousVideo = userFavoriteVideoList;

      const newVideoList = isFavorite
        ? previousVideo.filter((video) => video.info.youtube_video_id !== videoId)
        : [...previousVideo, { id: previousVideo.length + 1, info: { ...videoDetail! } }];

      await queryClient.setQueryData(QUERY_KEYS.userFavoriteVideos(userId), newVideoList);
      return { previousVideo };
    },
    onError: (error, _, context) => {
      if (context?.previousVideo) {
        console.error(error.message);
        queryClient.setQueryData(QUERY_KEYS.userFavoriteVideos(userId), context.previousVideo);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.userFavoriteVideos(userId) });
    },
  });

  return { mutate };
};
