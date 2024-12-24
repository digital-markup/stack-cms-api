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
import {
  useAdditionalInformationStore,
  useBasicInformationStore,
} from "../../store/useInformationStore";
import productSubmitAction from "../../actions/submitProduct";
import parseArray from "../../utils/parseArray";

function FormSubmitArea() {
  // get the data from the stores
  const { images, clearStore } = useImagesUploadStore();
  const { image, deleteImage } = useSingleImageStore();
  const { props, clearVariantStore } = useImageVariantsStore();
  const { items } = useTagsStore();
  const { content } = useAdditionalInformationStore();
  const { context: basicInfo } = useBasicInformationStore();

  const submitProduct = (data: FormData) => {
    const productData = {
      title: data.get("title") as string,
      product_description: data.get("product_description") as string,
      category_id: data.get("category") as string,
      type_id: data.get("type") as string,
      tags: items,
      brand_id: data.get("brand") as string,
      display_info: data.get("displayInfo") as string,
      battery: data.get("battery") as string,
      storage: parseArray(data.get("memory") as string),
      camera: data.get("camera") as string,
      ram_information: data.get("hardware") as string,
      colors: parseArray(data.get("color") as string),
      basic_information: basicInfo,
      feature_image: image,
      images: images,
      variations: props,
      services: data.get("services") as string,
      additional_information: content,
      stock: data.get("stock") as string,
      sku: data.get("sku") as string,
      availability: true,
      compare_at_price: false,
      is_published: true,
    };

    const response = productSubmitAction(productData);
    response
      .then((res) => {
        if (res.status === 200) {
          clearStore();
          clearVariantStore();
          deleteImage();
        }
      })
      .then(() => alert("Product added successfully"))
      .finally(() => window.location.reload());
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
