"use client";

import Image from "next/image";
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MetaType } from "../../utils/productsTypes";

interface FileBufferProps {
  fileMeta: MetaType[];
  onRemove: (id: string) => void;
}

function FileBuffer({ fileMeta, onRemove }: FileBufferProps) {
  return (
    <ScrollArea className="w-full h-[320px]">
      <div className="flex flex-col space-y-6 p-4">
        {fileMeta.map((file) => (
          <figure
            className="w-full h-[310px] rounded-lg border border-slate-200 flex flex-col items-center justify-start gap-y-1 bg-slate-100 relative"
            key={file.id}
          >
            <Image
              src={file.url}
              alt={file.title}
              height={300}
              width={300}
              className="object-cover h-full w-full rounded-md"
              placeholder="blur"
              blurDataURL={file.url}
              decoding="async"
            />
            <figcaption className="absolute bottom-2 z-10 text-xs bg-black/60 py-1 px-3 rounded-sm backdrop-blur-sm text-white">
              {file.title}
            </figcaption>
            <span className="absolute top-2 right-2">
              <Button
                type="button"
                size={"icon"}
                variant={"secondary"}
                onClick={() => onRemove(file.id)}
              >
                <X size={20} color="#0f172a" />
              </Button>
            </span>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default FileBuffer;
