import create from "zustand";

const useAppStore = create((set) => {
  return {
    currentMenu: "",
  };
});

export default useAppStore;
