"use client";

import React from "react";
import { ProductContainerProps } from "../utils/interfaces";
import { Card, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ServicesContainer({ title }: ProductContainerProps) {
  return (
    <Card className="shadow-none p-0">
      <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
        <p className="text-lg font-semibold">{title}</p>
      </CardHeader>
      <div className="w-full min-h-16 px-4 py-6">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Shop Warranty</SelectItem>
            <SelectItem value="2">One Year Apple Care Warranty</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
}

export default ServicesContainer;
