import { create } from 'zustand';

const useStore = create((set) => ({
  login: false,
  setLogin: (login: boolean) => set({ login }),
}));

export default useStore;
