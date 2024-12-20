"use client";
import { TextEditorWrapper } from "@/components/text-editor-wrapper";
import { Button } from "@/components/ui/button";
import React from "react";

export function AdditionalInfo() {
  const [content, setContent] = React.useState("");

  const onChangeContent = () => {
    console.log(content);
  };
  return (
    <div className="w-full h-full flex">
      <div className="w-full px-3 py-6 flex flex-col gap-4">
        <TextEditorWrapper defaultValue={content} setContent={setContent} />
        <div>
          <Button onClick={onChangeContent} disabled={content === ""}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
