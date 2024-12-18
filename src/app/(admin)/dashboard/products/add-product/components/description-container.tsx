"use client";

import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { ProductContainerProps } from "../utils/interfaces";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function DescriptionContainer({ title }: ProductContainerProps) {
  return (
    <Card className="shadow-none p-0">
      <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
        <p className="text-lg font-semibold">{title}</p>
      </CardHeader>
      <div className="w-full min-h-16 px-4 py-6">
        <div className="mb-4">
          <Label htmlFor="title">Product name</Label>
          <Input type="text" name="title" id="title" />
        </div>
        <div className="mb-4">
          <Label htmlFor="title">Product Description</Label>
          <Textarea
            name="product_description"
            id="product_description"
            rows={4}
            cols={50}
          />
        </div>
      </div>
    </Card>
  );
}

export default DescriptionContainer;
