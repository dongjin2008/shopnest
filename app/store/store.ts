import { create } from "zustand";

interface UserStore {
  name: string;
  password: string;
  login: boolean;
  isLogin: boolean;
  added: boolean;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setLogin: (login: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  setAdded: (added: boolean) => void;
}


export const useUserStore = create<UserStore>((set) => ({
  name: "guest",
  password: "guest",
  login: false,
  isLogin: false,
  added: false,
  setName: (name: string) => set({ name }),
  setPassword: (password: string) => set({ password }),
  setLogin: (login: boolean) => set({ login }),
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
  setAdded: (added: boolean) => set({ added }),
}));


