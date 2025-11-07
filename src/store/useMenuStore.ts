import { create } from "zustand";

interface MenuState {
  activeId: number | null;
  setActive: (id: number) => void;

}

export const useMenuStore = create<MenuState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
