import {create} from "zustand";

interface Store {
  payPassword: number | null;
  checkPayPassword: number | null;
  setPayPassword: (password : number) => void;
  setCheckPayPassword: (password : number) => void;
}

const useStore = create<Store>((set) => ({
  payPassword: null,
  checkPayPassword: null,
  setPayPassword: (password) => set({ payPassword: password }),
  setCheckPayPassword: (password) => set({ checkPayPassword: password }),
}));

export default useStore;