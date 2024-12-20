/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ImageItem {
  id: string;
  imgUrl: string;
}

interface ImageStoreProps {
  images: ImageItem[];
  addImage: (imgUrl: string) => void;
  deleteImage: (id: string) => void;
  clearStore: () => void;
}

interface ImageVariantProps {
  props: Array<{ id: string; imgUrl: string; variant: string }>;
  setProperty: (url: string, variant: string) => void;
  deleteProperty: (id: string) => void;
  clearStore: () => void;
}

interface SingleImageStoreProps {
  image: ImageItem | null;
  setImage: (imgUrl: string) => void;
  deleteImage: () => void;
}

export const useImageVariantsStore = create<ImageVariantProps>()(
  persist(
    (set) => ({
      props: [],
      setProperty: (url: string, variant: string) =>
        set((state) => ({
          props: [
            ...state.props,
            {
              id: crypto.randomUUID(), // Generate a unique ID for each new item
              imgUrl: url,
              variant,
            },
          ],
        })),
      deleteProperty: (id: string) =>
        set((state) => ({
          props: state.props.filter((item) => item.id !== id),
        })),
      clearStore: () => set({ props: [] }),
    }),
    {
      name: "img-variant-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useImagesUploadStore = create<ImageStoreProps>()(
  persist(
    (set) => ({
      images: [],
      addImage: (imgUrl) => {
        const newImage: ImageItem = { id: crypto.randomUUID(), imgUrl };
        set((state) => ({ images: [...state.images, newImage] }));
      },
      deleteImage: (id) =>
        set((state) => ({
          images: state.images.filter((img) => img.id !== id),
        })),
      clearStore: () => set({ images: [] }),
    }),
    {
      name: "main-image-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useSingleImageStore = create<SingleImageStoreProps>()(
  persist(
    (set) => ({
      image: null,
      setImage: (imgUrl) => {
        const newImage: ImageItem = { id: crypto.randomUUID(), imgUrl };
        set({ image: newImage });
      },
      deleteImage: () => set({ image: null }),
    }),
    {
      name: "single-image-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
