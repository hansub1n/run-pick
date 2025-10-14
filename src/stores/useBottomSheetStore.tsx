import { create } from 'zustand';

type UseBottomSheetState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useBottomSheetStore = create<UseBottomSheetState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
