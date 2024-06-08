import create from "zustand";

const useLogoStore = create((set) => ({
  whitelogo: false,
  toggleLogo: () => set((state) => ({ whitelogo: !state.whitelogo })),
}));

export default useLogoStore;
