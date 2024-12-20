/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useDropzone } from "react-dropzone";
import ImagePreview from "./image-preview";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PlusIcon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import Loader from "@/components/loader";
import { useImageVariantsStore } from "../../store/useMediaStore";
import FileUpload from "./file-upload";
import productSchema, { variantSchema } from "../../utils/validation";
import {
  MultipleProductUploader,
  SingleMediaUploader,
} from "./product-media-uploader";
import { MetaType } from "../../utils/productsTypes";
import uploadFile from "../../services/uploadFile";
import formatFileSize from "../../services/mediaSizeFormat";

interface ProductUploadModalProps {
  children?: React.ReactNode | React.ReactNode[];
}

// Upload single product modal
function SingleProductUploadModal({ children }: ProductUploadModalProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {children !== null ? (
            children
          ) : (
            <Button variant={"outline"} size={"sm"}>
              <PlusIcon className="w-4 h-4" />
              Add Product
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <SingleMediaUploader />
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Upload Variants
function ProductUploadModal({ children }: ProductUploadModalProps) {
  const [imagesBuffer, setImagesBuffer] = React.useState<string[]>([]);
  const [imageMeta, setImageMeta] = React.useState<MetaType | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // store for uploading variants - zustand
  const { setProperty } = useImageVariantsStore();
  const { toast } = useToast();

  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof variantSchema>>({
    resolver: zodResolver(variantSchema),
  });

  // dropzone parent
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    // remove the buffer array
    setImagesBuffer([]);

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        const base64Data = result.replace(/^data:image\/\w+;base64,/, "");
        setImagesBuffer((prev) => [...prev, base64Data]);

        const preview = {
          id: uuidv4(),
          title: file.name,
          size: file.size,
          url: URL.createObjectURL(file),
        };

        setImageMeta(preview);
      };

      reader.readAsDataURL(file);
    });
  }, []);

  //   dropzone implementation
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 5000000,
    multiple: false,
    accept: {
      "image/jpeg": [],
      "image/webp": [],
      "image/png": [],
      "video/mp4": [],
    },
  });

  //   File upload handler
  const onImageUploadHandler = (formData: z.infer<typeof productSchema>) => {
    setIsLoading(true);

    if (imagesBuffer.length > 0) {
      const imageBuffer = imagesBuffer[0];
      const upload = uploadFile(imageBuffer);

      upload
        .then((result: any) => {
          if (result?.status === 200) {
            setProperty(result.key, formData.variantTitle as string);
            setImageMeta(null);
          }
          setIsLoading(false);
          reset();
        })
        .then(() => {
          //toaster for upload
          toast({
            title: "Product Variant uploaded.",
            description: "Variant uploaded successfully.",
            variant: "default",
          });
        });
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {children !== null ? (
            children
          ) : (
            <Button variant={"outline"} size={"sm"}>
              <PlusIcon className="w-4 h-4" />
              Add Variant
            </Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Product Variant</DialogTitle>
            <div className="w-full h-full px-0 py-2 flex flex-col gap-4 pt-4">
              <div className="bg-white border-dashed border border-slate-300 rounded-lg">
                {/* image url state */}
                {imageMeta ? (
                  <ImagePreview url={imageMeta} />
                ) : (
                  <FileUpload
                    inputProps={getInputProps}
                    rootProps={getRootProps}
                  />
                )}

                {imageMeta && (
                  <span className="flex flex-col gap-y-2 px-8 py-6">
                    <p className="text-xs font-semibold text-slate-600">
                      {imageMeta.title}
                    </p>
                    <p className="text-xs font-semibold text-slate-600">
                      {formatFileSize(imageMeta.size)}
                    </p>
                  </span>
                )}
              </div>

              <form onSubmit={handleSubmit(onImageUploadHandler)}>
                <section className="my-4">
                  <Label
                    htmlFor="variantTitle"
                    className="text-sm text-slate-500 font-medium"
                  >
                    Variant Type
                  </Label>
                  <Input
                    type="text"
                    id="variantTitle"
                    {...register("variantTitle")}
                    placeholder="Color/ Size etc."
                    className={
                      errors.variantTitle
                        ? "border-red-500"
                        : "form-control min-w-full"
                    }
                  />
                  {errors.variantTitle && (
                    <p className="text-red-500">
                      {errors.variantTitle.message}
                    </p>
                  )}
                </section>
                <Button
                  type="submit"
                  variant={"default"}
                  disabled={imagesBuffer.length === 0 || isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <Loader text="Uploading" color="#1e293b" />
                  ) : (
                    "Upload"
                  )}
                </Button>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Add multiple-products modal
const MultipleProductUploaderModal = ({
  children,
}: ProductUploadModalProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {children !== null ? (
            children
          ) : (
            <Button variant={"outline"} size={"sm"}>
              <PlusIcon className="w-4 h-4" />
              Add Variant
            </Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Multiple Products</DialogTitle>
            <MultipleProductUploader />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

MultipleProductUploaderModal.displayName = "MultipleProductModal";

export { MultipleProductUploaderModal, SingleProductUploadModal };
export default ProductUploadModal;
