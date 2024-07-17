import { create } from "zustand";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleSidebar: () => void;
};

export const useSidebar = create<Props>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),
  toggleSidebar: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
}));
