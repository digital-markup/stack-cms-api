/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import ProductsTable from "./products-table";
import { columns } from "./columns";
import { ProductType } from "../utils/helper/productType";

interface ProductsContainerProps {
  data: any;
}

function ProductsContainer({ data }: ProductsContainerProps) {
  const [tableData, setTableData] = React.useState<ProductType[] | null>(null);
  React.useEffect(() => {
    if (data.status === 200) {
      setTableData(data.data);
    }
  }, []);
  return (
    <div className="px-4 pt-8 pb-6 w-full h-full">
      {tableData ? (
        <ProductsTable columns={columns} data={tableData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductsContainer;
