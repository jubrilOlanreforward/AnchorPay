import { create } from "zustand";

type SettingsMetadata = {
  title?: string;
  description?: string;
};

type State = {
  user: string | null;
  setUser: (user: string) => void;
  settingsMetadata: SettingsMetadata;
  setSettingsMetadata: (metadata: SettingsMetadata) => void;
};

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  settingsMetadata: {},
  setSettingsMetadata: (metadata) =>
    set((state) => ({
      settingsMetadata: {
        ...state.settingsMetadata,
        ...metadata,
      },
    })),
}));
