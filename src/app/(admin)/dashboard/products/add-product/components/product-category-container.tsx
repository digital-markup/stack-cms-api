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
import getCategories from "../../../category/actions/getCategories";
import { Category } from "../../../category/utils/categoryTypes";
import TagsMultiSelect from "./tags-multi-select";

const brands = [
  { brand: "meta" },
  { brand: "huawei" },
  { brand: "samsung" },
  { brand: "jbl" },
  { brand: "tcl" },
  { brand: "xiaomi" },
  { brand: "zte" },
  { brand: "apple" },
  { brand: "oppo" },
  { brand: "nokia" },
];

async function ProductCategoryContainer({ title }: ProductContainerProps) {
  const { data } = await getCategories();

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
                  <SelectItem key={category.id} value={category.slug}>
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
              <SelectItem value="iphone">iPhone</SelectItem>
              <SelectItem value="ipad">iPad</SelectItem>
              <SelectItem value="galaxy">Galaxy</SelectItem>
              <SelectItem value="earbuds">Earbuds</SelectItem>
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
              {brands.map((brand, idx: number) => (
                <SelectItem
                  key={idx}
                  value={brand.brand}
                  className="capitalize"
                >
                  {brand.brand}
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
