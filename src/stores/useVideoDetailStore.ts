import { DBVideo } from '@/types/videos.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type VideoDetailState = {
  videoDetail: DBVideo | null;
  setVideoDetail: (video: DBVideo) => void;
  clearVideoDetail: () => void;
};

export const useVideoDetailStore = create(
  persist<VideoDetailState>(
    (set) => ({
      videoDetail: null,
      setVideoDetail: (video) => set({ videoDetail: video }),
      clearVideoDetail: () => set({ videoDetail: null }),
    }),
    {
      name: 'video-detail-store',
    },
  ),
);
