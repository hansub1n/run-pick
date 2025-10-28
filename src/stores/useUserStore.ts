import { create } from 'zustand';

type UserStoreState = {
  id: string;
  nickname: string;
  profileImgUrl: string;
  setId: (id: string) => void;
  setNickname: (nickname: string) => void;
  setProfileImgUrl: (profileImgUrl: string) => void;
};
export const useUserStore = create<UserStoreState>((set) => ({
  id: '',
  nickname: '',
  profileImgUrl: '',

  setId: (id) => set({ id }),
  setNickname: (nickname) => set({ nickname }),
  setProfileImgUrl: (profileImgUrl) => set({ profileImgUrl }),
}));
