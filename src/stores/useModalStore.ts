import { create } from 'zustand';

type UseModalStoreState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};
export const useModalStore = create<UseModalStoreState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () =>
    set((prev) => ({
      isOpen: !prev.isOpen,
    })),
}));
