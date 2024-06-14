import { create } from 'zustand'

interface FcmStore {
  fcmCheck: number
  setFcmCheck: (check: number) => void
}

const fcmStore = create<FcmStore>((set) => ({
  fcmCheck: 44,
  setFcmCheck: (check: number) => set({ fcmCheck: check }),
}))

export default fcmStore
