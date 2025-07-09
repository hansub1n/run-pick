import { create } from 'zustand';

type UserStoreState = {
  nickname: string;
  profileImgUrl: string;
  setNickname: (nickname: string) => void;
  setProfileImgUrl: (profileImgUrl: string) => void;
};
export const useUserStore = create<UserStoreState>((set) => ({
  nickname: '',
  profileImgUrl: '',

  setNickname: (nickname) => set({ nickname }),
  setProfileImgUrl: (profileImgUrl) => set({ profileImgUrl }),
}));
