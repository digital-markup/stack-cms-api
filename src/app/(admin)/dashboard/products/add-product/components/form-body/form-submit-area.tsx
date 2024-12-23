/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  useImagesUploadStore,
  useImageVariantsStore,
  useSingleImageStore,
} from "@/app/(admin)/dashboard/media/store/useMediaStore";
import { useTagsStore } from "../../store/useTagsStore";
import { SubmitButton } from "@/components/submit-button";
import { useAdditionalInformationStore } from "../../store/useInformationStore";

function FormSubmitArea() {
  // get the data from the stores
  const { images, clearStore } = useImagesUploadStore();
  const { image, deleteImage } = useSingleImageStore();
  const { props, clearVariantStore } = useImageVariantsStore();
  const { items } = useTagsStore();
  const { content } = useAdditionalInformationStore();

  const submitProduct = (data: FormData) => {
    const productData = {
      title: data.get("title") as string,
      product_description: data.get("product_description") as string,
      category: data.get("category") as string,
      type: data.get("type") as string,
      tags: items,
      brand: data.get("brand") as string,
      display_info: data.get("displayInfo") as string,
      battery: data.get("battery") as string,
      memory: data.get("memory") as string,
      camera: data.get("camera") as string,
      ram_information: data.get("hardware") as string,
      colors: data.get("color") as string,
      feature_image: image,
      images: images,
      variations: props,
      services: data.get("services") as string,
      basic_information: content,
      stock: data.get("stock") as string,
      sku: data.get("sku") as string,
      availability: data.get("availability") as string,
      compare_at_price: false,
      is_published: true,
    };

    console.log(productData);
  };

  return (
    <div className="w-full min-h-[100px] pt-6 flex justify-between items-center flex-row">
      <Button variant={"outline"}>Cancel</Button>
      <section className="flex flex-row gap-x-3">
        <Button variant={"ghost"}>Schedule Publish</Button>
        <Button className="bg-slate-100 text-black hover:bg-slate-200">
          Save as Draft
        </Button>
        <SubmitButton type="submit" formAction={submitProduct}>
          Publish
        </SubmitButton>
      </section>
    </div>
  );
}

export default FormSubmitArea;
