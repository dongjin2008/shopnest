import { create } from "zustand";

interface UserStore {
  name: string;
  password: string;
  login: boolean;
  isLogin: boolean;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setLogin: (login: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
}

interface BasketStore {
  added: boolean;
  basket: boolean;
  setAdded: (added: boolean) => void;
  setBasket: (basket: boolean) => void;
}


export const useUserStore = create<UserStore>((set) => ({
  name: "guest",
  password: "guest",
  login: false,
  isLogin: false,
  setName: (name: string) => set({ name }),
  setPassword: (password: string) => set({ password }),
  setLogin: (login: boolean) => set({ login }),
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
}));

export const useBasketStore = create<BasketStore>((set) => ({
  added: false,
  basket: false,
  setAdded: (added: boolean) => set({ added }),
  setBasket: (basket: boolean) => set({ basket }),
}));
