/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { CategoryType } from "../utils/helper/typeIndex";
import TypesTable from "./types-table";
import { columns } from "./columns";

interface TypesContainerProps {
  data: any;
}

function TypesContainer({ data }: TypesContainerProps) {
  const [tableData, setTableData] = React.useState<CategoryType[] | null>(null);

  React.useEffect(() => {
    if (data.status === 200) {
      setTableData(data.data);
    }
  }, []);
  return (
    <div className="px-4 pt-8 pb-6 w-full h-full">
      {tableData ? (
        <TypesTable columns={columns} data={tableData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TypesContainer;
