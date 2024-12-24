"use client";

import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { ProductContainerProps } from "../utils/interfaces";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function InventoryContainer({ title }: ProductContainerProps) {
  return (
    <Card className="shadow-none p-0">
      <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
        <p className="text-lg font-semibold">{title}</p>
      </CardHeader>
      <div className="w-full min-h-16 px-4 py-6">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="mt-3 flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="stock"
              name="stock"
            />
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <Label>SKU (Optional)</Label>
            <Input
              id="sku"
              name="sku"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export function VisibilityContainer({ title }: ProductContainerProps) {
  return (
    <Card className="shadow-none p-0">
      <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
        <p className="text-lg font-semibold">{title}</p>
      </CardHeader>
      <div className="w-full min-h-16 px-4 py-6"></div>
    </Card>
  );
}
