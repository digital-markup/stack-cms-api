"use client";

import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageUp } from "lucide-react";
import { ProductContainerProps } from "../utils/interfaces";
import { MultipleProductUploaderModal } from "../../../media/components/upload/product-upload";

function ProductImagesContainer({ title }: ProductContainerProps) {
  return (
    <Card className="shadow-none p-0">
      <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
        <p className="text-lg font-semibold">{title}</p>
      </CardHeader>
      <div className="w-full min-h-16 px-4 py-6">
        <MultipleProductUploaderModal>
          <div className="w-[180px] h-[150px] border-2 border-dashed rounded-lg border-slate-400 ">
            <Button
              className="h-full w-full flex flex-col gap-0.5 text-sm"
              variant={"secondary"}
              type="button"
            >
              <ImageUp size={32} absoluteStrokeWidth />
              <span className="text-blue-600 font-semibold hover:underline">
                Click to upload
              </span>{" "}
              or drag & drop
            </Button>
          </div>
        </MultipleProductUploaderModal>
      </div>
    </Card>
  );
}

export default ProductImagesContainer;
