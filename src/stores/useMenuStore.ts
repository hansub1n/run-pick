import { create } from 'zustand';

type useMenuStoreState = {
  isOpen: boolean;
  toggleMenu: () => void;
};
export const useMenuStore = create<useMenuStoreState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
