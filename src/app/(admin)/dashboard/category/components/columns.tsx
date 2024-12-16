"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Category } from "../utils/categoryTypes";
import { formatDateISO, trimID } from "../utils/helper/tableHelper";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => trimID(props.getValue() as string),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
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
