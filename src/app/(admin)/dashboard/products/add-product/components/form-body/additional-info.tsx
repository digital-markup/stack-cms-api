import React from "react";
import { useAdditionalInformationStore } from "../../store/useInformationStore";
import dynamic from "next/dynamic";

const TextEditorClient = dynamic(
  () => import("@/components/text-editor-wrapper"),
  { ssr: false }
);

export function AdditionalInfo() {
  const { setContent } = useAdditionalInformationStore();
  return (
    <div className="w-full h-full flex">
      <div className="w-full px-3 py-6 flex flex-col gap-4">
        <TextEditorClient defaultValue={""} setContent={setContent} />
      </div>
    </div>
  );
}
