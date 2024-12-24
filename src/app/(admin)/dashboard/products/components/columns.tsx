/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ProductType } from "../utils/helper/productType";
import { formatDateISO, trimID } from "../../category/utils/helper/tableHelper";
import getProductByAsync from "../queries/getProductByAsync";
import React from "react";

const ProductCell = ({ id }: { id: string }) => {
  const [category, setCategory] = React.useState<string>("Loading...");

  React.useEffect(() => {
    const response = getProductByAsync({ category: id });
    response.then((res) => setCategory(res.data[0].name)).catch((err) => err);
  }, [id]);

  return category;
};

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => trimID(props.getValue() as string),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category_id",
    header: "Category",
    cell: (props) => <ProductCell id={props.getValue() as string} />,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: (props) => <ProductCell id={props.getValue() as string} />,
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: (props) => <ProductCell id={props.getValue() as string} />,
  },
  {
    accessorKey: "availability",
    header: "Availability",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: (props) => formatDateISO(props.getValue() as string),
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
    cell: (props) => formatDateISO(props.getValue() as string),
  },
];
