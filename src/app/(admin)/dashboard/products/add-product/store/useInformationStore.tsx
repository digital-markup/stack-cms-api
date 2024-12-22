import { create } from "zustand";

interface InformationStore {
  content: string;
  setContent: (content: string) => void;
  resetContent: () => void;
}

export const useAdditionalInformationStore = create<InformationStore>(
  (set) => ({
    content: "",
    setContent: (content) => set({ content }),
    resetContent: () => set({ content: "" }),
  })
);
