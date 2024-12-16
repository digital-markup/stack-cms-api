/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Category } from "../utils/categoryTypes";
import CategoryTable from "./category-table";
import { columns } from "./columns";

interface CategoryContainerProps {
  data: any;
}

function CategoryContainer({ data }: CategoryContainerProps) {
  const [tableData, setTableData] = React.useState<Category[] | null>(null);
  React.useEffect(() => {
    if (data.status === 200) {
      setTableData(data.data);
    }
  }, []);

  return (
    <div className="px-4 pt-8 pb-6 w-full h-full">
      {tableData ? (
        <CategoryTable columns={columns} data={tableData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CategoryContainer;
