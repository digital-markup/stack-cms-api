/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { ProductContainerProps } from "../utils/interfaces";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import TagsMultiSelect from "./tags-multi-select";

import { Category } from "@/app/(admin)/dashboard/category/utils/categoryTypes";
import getCategories from "@/app/(admin)/dashboard/category/actions/getCategories";
import getCategoryTypes, {
  getBrands,
} from "@/app/(admin)/dashboard/category-types/actions/getCategoryTypes";
import { CategoryType } from "@/app/(admin)/dashboard/category-types/utils/helper/typeIndex";

async function ProductCategoryContainer({ title }: ProductContainerProps) {
  const { data } = await getCategories();
  const { data: types } = await getCategoryTypes();
  const { data: brands } = await getBrands();

  return (
    <Card className="shadow-none p-0">
      <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
        <p className="text-lg font-semibold">{title}</p>
      </CardHeader>
      <div className="w-full min-h-16 px-4 py-6">
        <div className="mb-4">
          <Label htmlFor="category">Product Category</Label>
          <Select name="category">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Product Category" />
            </SelectTrigger>
            <SelectContent>
              {data &&
                data.map((category: Category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="type">Product Type</Label>
          <Select name="type">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Product Type" />
            </SelectTrigger>
            <SelectContent>
              {types &&
                types.map((type: CategoryType) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="brand">Product Brand</Label>
          <Select name="brand">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand: any) => (
                <SelectItem
                  key={brand.id}
                  value={brand.id}
                  className="capitalize"
                >
                  {brand.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="tags">Product Tags for Search</Label>
          <TagsMultiSelect />
        </div>
      </div>
    </Card>
  );
}

export default ProductCategoryContainer;
