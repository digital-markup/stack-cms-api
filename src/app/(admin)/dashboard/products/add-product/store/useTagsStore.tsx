import { create } from "zustand";
import { TagOptions } from "../utils/productInputTypes";
import { createJSONStorage, persist } from "zustand/middleware";

interface TagsStore {
  items: TagOptions[];
  setItems: (
    items: TagOptions[] | ((prev: TagOptions[]) => TagOptions[])
  ) => void;
  clearItems: () => void;
}

export const useTagsStore = create<TagsStore>()(
  persist(
    (set) => ({
      items: [],

      // setState-like behavior that accepts both direct value and updater function
      setItems: (items) =>
        set((state) => ({
          items: typeof items === "function" ? items(state.items) : items,
        })),

      clearItems: () => set({ items: [] }),
    }),
    {
      name: "label-value-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
