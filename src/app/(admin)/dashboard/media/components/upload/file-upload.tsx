"use client";
import { UploadCloud } from "lucide-react";
import React from "react";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

interface FileUploadProps {
  rootProps: () => DropzoneRootProps;
  inputProps: () => DropzoneInputProps;
}

function FileUpload({ inputProps, rootProps }: FileUploadProps) {
  return (
    <div
      {...rootProps()}
      className="w-full h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer"
    >
      <UploadCloud className="w-10 h-10 text-slate-400" />
      <input {...inputProps()} />
      <p className="text-slate-600">
        <span className="text-blue-600">Drop your files here</span>, or click to
        select browse
      </p>
    </div>
  );
}

export default FileUpload;
