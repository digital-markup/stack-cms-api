"use client";

import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { ProductContainerProps } from "../utils/interfaces";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProductUploadModal from "@/app/(admin)/dashboard/media/components/upload/product-upload";

function VariantContainer({ title }: ProductContainerProps) {
  return (
    <Card className="shadow-none p-0">
      <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
        <p className="text-lg font-semibold">{title}</p>
      </CardHeader>
      <div className="w-full min-h-16 px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-base capitalize">product variants</p>
          <ProductUploadModal>
            <Button>
              <Plus className="text-white" />
            </Button>
          </ProductUploadModal>
        </div>
      </div>
    </Card>
  );
}

export default VariantContainer;
