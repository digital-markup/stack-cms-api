"use client";

import { Button } from "@/components/ui/button";
import { getS3ObjectService } from "@/services/s3BucketService";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

interface VariantPreviewCardProps {
  id: string;
  imgUrl: string;
  variant: string;
  deleteProperty: (id: string) => void;
}

function PreviewCard({
  id,
  imgUrl,
  variant,
  deleteProperty,
}: VariantPreviewCardProps) {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  const onFetch = React.useCallback(() => {
    const url = getS3ObjectService(imgUrl);
    url.then((res) => {
      if (res.status === 200) {
        setImageUrl(res.url);
      }
    });
  }, [imgUrl]);

  React.useEffect(() => {
    onFetch();
  }, [onFetch]);
  
  return (
    <div className="w-full h-auto p-3 flex justify-between items-center rounded-lg shadow-md">
      {imageUrl && (
        <section className="flex flex-row justify-start items-center gap-x-6">
          <Image
            src={imageUrl}
            alt={"title"}
            height={100}
            width={100}
            className="object-cover h-full w-full rounded-md"
            placeholder="blur"
            blurDataURL={imageUrl}
            decoding="async"
          />
          <p className="text-base font-medium">{variant}</p>
        </section>
      )}

      <Button
        type="button"
        variant={"ghost"}
        size={"icon"}
        onClick={() => deleteProperty(id)}
      >
        <X size={20} className="text-red-500" />
      </Button>
    </div>
  );
}

export default PreviewCard;
