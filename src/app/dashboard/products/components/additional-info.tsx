"use client";
import TextEditorWrapper from "@/components/text-editor-wrapper";
import { Button } from "@/components/ui/button";
import React from "react";

function AdditionalInfo() {
  const [content, setContent] = React.useState("");

  const onChangeContent = () => {
    console.log(content);
  };
  return (
    <div className="w-full h-full flex flex-col gap-y-6">
      <header className="w-full">
        <h2>Other information</h2>
      </header>
      <div className="w-full border border-slate-400 rounded-md px-3 py-6 flex flex-col gap-4">
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

export default AdditionalInfo;
