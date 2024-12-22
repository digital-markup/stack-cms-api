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
  defaultValue: string;
  setContent: (content: string) => void;
}

const extensions = [BaseKit, Heading, Italic, Bold, BulletList, Color];

export default function TextEditorWrapper({
  defaultValue,
  setContent,
}: TextEditorWrapperProps) {
  const onChangeContent = (content: string) => {
    setContent(content);
  };
  return (
    <RichTextEditor
      dark={false}
      output="html"
      content={defaultValue}
      onChangeContent={onChangeContent}
      extensions={extensions}
    />
  );
}
