"use server";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import getCategories from "./actions/getCategories";
import CategoryContainer from "./components/category-container";

async function CategoryPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto">
      <Card className="shadow-none p-0">
        <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
          <p className="text-lg font-semibold">Title</p>
          <Button className="rounded-full">Add New</Button>
        </CardHeader>
        <div className="w-full min-h-16 p-2">
          {categories.status === 200 && <CategoryContainer data={categories} />}
        </div>
      </Card>
    </div>
  );
}

export default CategoryPage;
