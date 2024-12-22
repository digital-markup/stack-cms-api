"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import submitProduct from "../../actions/submitProduct";

function FormSubmitArea() {
  return (
    <div className="w-full min-h-[100px] pt-6 flex justify-between items-center flex-row">
      <Button variant={"outline"}>Cancel</Button>
      <section className="flex flex-row gap-x-3">
        <Button variant={"ghost"}>Schedule Publish</Button>
        <Button className="bg-slate-100 text-black hover:bg-slate-200">
          Save as Draft
        </Button>
        <Button type="submit" formAction={submitProduct}>
          Publish
        </Button>
      </section>
    </div>
  );
}

export default FormSubmitArea;
