import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import TypesContainer from "./components/types-container";
import Link from "next/link";
import getCategoryTypes from "./actions/getCategoryTypes";

async function TypePage() {
  const categoryTypes = await getCategoryTypes();

  return (
    <div className="container mx-auto px-8">
      <Card className="shadow-none p-0">
        <CardHeader className="border-b flex justify-between w-full flex-row py-2 px-4 items-center">
          <p className="text-lg font-semibold">All Categories</p>
          <Link href={"/dashboard/category-types/add-type"}>
            <Button className="rounded-full">Add New</Button>
          </Link>
        </CardHeader>
        <div className="w-full min-h-16 p-2">
          <TypesContainer data={categoryTypes} />
        </div>
      </Card>
    </div>
  );
}

export default TypePage;
