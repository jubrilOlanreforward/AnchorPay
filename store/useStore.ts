import { create } from "zustand";

type State = {
  user: string | null;
  setUser: (user: string) => void;
};

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

}));