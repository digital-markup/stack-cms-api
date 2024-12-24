"use client";

import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { ProductContainerProps } from "../utils/interfaces";
import BasicInfo from "./form-body/basic-info";

function BasicInformationContainer({ title }: ProductContainerProps) {
  return (
    <Card className="shadow-none p-0">
      <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
        <p className="text-lg font-semibold">{title}</p>
      </CardHeader>
      <div className="w-full min-h-16 px-4 py-6">
        <BasicInfo />
      </div>
    </Card>
  );
}

export default BasicInformationContainer;
