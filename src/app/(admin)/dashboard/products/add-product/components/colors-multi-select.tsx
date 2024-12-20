"use client";

import MultipleSelector from "@/components/ui/multi-select";
import React from "react";

function ColorsMultiSelect() {
  const { setColors } = useColorsStore();
  return (
    <div className="w-full p-0">
      <MultipleSelector
        options={COLORS}
        placeholder="Select Colors"
        creatable
        emptyIndicator={
          <p className="text-slate-500 capitalize">no results found.</p>
        }
        onChange={(e) => setTags(e)}
      />
    </div>
  );
}

export default ColorsMultiSelect;
