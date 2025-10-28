import { create } from 'zustand';

type UseModalStoreState = {
  activeModal: string | null;
  open: (modalId: string) => void;
  close: () => void;
};
export const useModalStore = create<UseModalStoreState>((set) => ({
  activeModal: null,
  open: (modalId: string) => set({ activeModal: modalId }),
  close: () => set({ activeModal: null }),
}));
