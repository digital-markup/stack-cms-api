"use client";
import React from "react";
import "reactjs-tiptap-editor/style.css";
import RichTextEditor, {
  BaseKit,
  Bold,
  BulletList,
  Color,
  Heading,
  Italic,
} from "reactjs-tiptap-editor";

interface TextEditorWrapperProps {
  defaultValue: string | "";
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const extensions = [
  BaseKit,
  Heading,
  Italic,
  Bold,
  BulletList,
  Color
];

export function TextEditorWrapper({
  defaultValue,
  setContent,
}: TextEditorWrapperProps) {
  const onChangeContent = (content: string) => {
    setContent(content);
  };
  return (
    <div>
      <RichTextEditor
        output="json"
        content={defaultValue}
        onChangeContent={onChangeContent}
        extensions={extensions}
      />
    </div>
  );
}
