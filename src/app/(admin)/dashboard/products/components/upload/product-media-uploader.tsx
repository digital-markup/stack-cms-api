"use client";

import React from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";
import { v4 as uuidv4 } from "uuid";
import FileUpload from "./file-upload";
import { useImagesUploadStore } from "../../store/useMediaStore";
import { MetaType } from "../../utils/productsTypes";
import FileBuffer from "./file-buffer";
import { toast } from "sonner";
import uploadFile from "../../services/uploadFile";

function MultipleProductUploader() {
  const [imageMeta, setImageMeta] = React.useState<MetaType[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  // init zustand store
  const { addImage } = useImagesUploadStore();

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    // foreach the accepted files
    acceptedFiles.forEach((file) => {
      // create a reader
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data URL prefix to get just the base64 data
        const base64Data = result.replace(/^data:image\/\w+;base64,/, "");
        setImageMeta((prev) => [
          ...prev,
          {
            id: uuidv4(),
            title: file.name,
            size: file.size,
            url: URL.createObjectURL(file),
            base64: base64Data,
          },
        ]);
      };

      // read the file as base64
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 5,
    multiple: true,
    accept: {
      "image/jpeg": [],
      "image/webp": [],
      "image/png": [],
      "video/mp4": [],
    },
    maxSize: 50000000,
  });

  // Upload to S3
  const onUploadFilesHandler = () => {
    if (imageMeta.length > 0) {
      setIsLoading(true);

      imageMeta.forEach(({ base64, title }) => {
        const upload = uploadFile(base64 as string);
        upload
          .then((result) => {
            if (result?.status === 200) {
              addImage(result.key);
              toast(`${title} uploaded successfully`);
            }
          })
          .then(() => {
            setIsLoading(false);
          })
          .finally(() => {
            setImageMeta([]);
          });
      });
    }
  };

  // Delete from S3

  // Delete from metaArray
  const onDeleteMeta = (id: string) => {
    setImageMeta((prev) => prev.filter((meta) => meta.id !== id));
  };

  return (
    <div className="w-full border rounded-lg flex flex-col gap-y-3 py-6 px-4">
      <div className="bg-white border border-slate-400/50 border-dashed rounded-lg p-6">
        <FileUpload inputProps={getInputProps} rootProps={getRootProps} />
      </div>
      <div className="flex flex-col gap-y-3 my-4">
        {imageMeta.length > 0 && (
          <FileBuffer fileMeta={imageMeta} onRemove={onDeleteMeta} />
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-slate-500 text-sm">Add one or upto 5 images</p>
        <Button
          className="w-[200px]"
          type="button"
          size={"default"}
          variant={"secondary"}
          disabled={imageMeta.length === 0 || isLoading}
          onClick={onUploadFilesHandler}
        >
          {isLoading ? <Loader text="Uploading" color="#1e293b" /> : "Upload"}
        </Button>
      </div>
    </div>
  );
}

export { MultipleProductUploader };
