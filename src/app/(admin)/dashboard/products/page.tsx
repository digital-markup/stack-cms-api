import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import ProductsContainer from "./components/products-container";
import listProductsAsync from "./queries/listProductsAsync";

async function ProductPage() {
  const products = await listProductsAsync();

  return (
    <div className="container mx-auto px-8">
      <Card className="shadow-none p-0">
        <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
          <p className="text-lg font-semibold">All Products</p>
          <Link href={"/dashboard/products/add-product"}>
            <Button className="rounded-full">Add New</Button>
          </Link>
        </CardHeader>
        <div className="w-full min-h-16 p-2">
          {products.status === 200 && <ProductsContainer data={products} />}
        </div>
      </Card>
    </div>
  );
}

export default ProductPage;
