import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  isLoading: boolean;
  user: { name: string; age: number } | null;
};

type Actions = {
  setUser: (user: { name: string; age: number }) => void;
};

type Store = State & Actions;

export const useUserStore = create<Store>()(
  immer((set) => ({
    isLoading: false,
    user: null,
    setUser: (user: { name: string; age: number }) =>
      set((state) => {
        state.user = user;
      }),
  })),
);
