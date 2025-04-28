import { create } from 'zustand'

export const countStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
    promise: () => new Promise((resolve) => {
        setTimeout(() => {
            set({ count: 0 });
            resolve();
        }, 1000);

})}));
