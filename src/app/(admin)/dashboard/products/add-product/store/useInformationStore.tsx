import { create } from "zustand";

interface InformationStore {
  content: string;
  setContent: (content: string) => void;
  resetContent: () => void;
}

interface BasicInfoStore {
  context: string;
  setContext: (context: string) => void;
  resetContext: () => void;
}

export const useAdditionalInformationStore = create<InformationStore>(
  (set) => ({
    content: "",
    setContent: (content) => set({ content }),
    resetContent: () => set({ content: "" }),
  })
);

export const useBasicInformationStore = create<BasicInfoStore>((set) => ({
  context: "",
  setContext: (context) => set({ context }),
  resetContext: () => set({ context: "" }),
}));
