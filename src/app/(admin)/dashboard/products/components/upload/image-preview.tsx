"use client";

import Image from "next/image";
import React from "react";
import { MetaType } from "../../utils/productsTypes";

interface ImagePreviewProps {
  url: MetaType;
}

function ImagePreview({ url }: ImagePreviewProps) {
  return (
    <div className="w-full h-[300px]">
      <Image
        src={url.url}
        alt={url.title}
        height={300}
        width={300}
        className="object-cover h-full w-full rounded-md"
        placeholder="blur"
        blurDataURL={url.url}
        decoding="async"
      />
    </div>
  );
}

export default ImagePreview;
