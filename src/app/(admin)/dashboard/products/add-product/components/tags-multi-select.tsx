"use client";

import MultipleSelector from "@/components/ui/multi-select";
import React from "react";
import { TAGS } from "../shared/constants";
import { useTagsStore } from "../store/useTagsStore";

function TagsMultiSelect() {
  const { setItems: setTags } = useTagsStore();

  return (
    <div className="w-full p-0">
      <MultipleSelector
        options={TAGS}
        placeholder="Select Tags"
        creatable
        emptyIndicator={
          <p className="text-slate-500 capitalize">no results found.</p>
        }
        onChange={(e) => setTags(e)}
      />
    </div>
  );
}

export default TagsMultiSelect;
