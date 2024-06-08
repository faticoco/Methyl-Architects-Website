import create from "zustand";

const useWhitePageStore = create((set) => ({
  whitepage: false,
  toggleSidebar: () => set((state) => ({ whitepage: !state.whitepage })),
}));

export default useWhitePageStore;
