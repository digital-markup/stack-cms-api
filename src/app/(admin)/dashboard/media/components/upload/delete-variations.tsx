"use client";

import { toast } from "@/hooks/use-toast";
import { deleteS3ObjectService } from "@/services/s3BucketService";
import React from "react";
import PreviewCard from "../preview-card";
import { useImageVariantsStore } from "../../store/useMediaStore";

function DeleteVariations() {
  const { props, deleteProperty } = useImageVariantsStore();

  // handler for deleting both the image from store and from s3 bucket
  const handleDelete = (id: string) => {
    const [{ imgUrl }] = props.filter((item) => item.id === id);
    // delete from the s3 bucket
    const res = deleteS3ObjectService(imgUrl);
    res
      .then((res) => {
        if (res.status === 204) {
          deleteProperty(id);
        }
      })
      .finally(() => {
        toast({
          title: "Image deleted successfully",
          description: "Image deleted successfully",
        });
      });
  };
  return (
    <div className="w-full min-h-[250px] flex flex-col gap-y-6 px-6 py-4">
      {props.length === 0 && (
        <p className="text-blue-600 font-light text-base">
          Product variations will be shown here
        </p>
      )}

      {props.map((props, index) => (
        <PreviewCard key={index} {...props} deleteProperty={handleDelete} />
      ))}
    </div>
  );
}

export default DeleteVariations;
