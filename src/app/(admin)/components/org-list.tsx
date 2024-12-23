"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ChevronsUpDown, PlusIcon } from "lucide-react";
import React from "react";

function OrgList() {
  return (
    <div className="py-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-full" variant={"ghost"} size={"sm"}>
            <span className="w-full text-start text-sm flex justify-between items-center">
              Organizations
              <ChevronsUpDown />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <div className="flex flex-col justify-between items-center w-full">
            <div className="grid grid-cols-1 gap-3 w-full">
              <header>
                <h2 className="text-sm font-semibold text-slate-400">
                  Organizations
                </h2>
              </header>
              <div className="w-full">{/* add all the org list */}</div>
            </div>
            <div className="flex flex-col gap-0 w-full">
              <Separator />
              <section className="flex flex-row justify-between items-center gap-3 pt-3">
                <p className="text-sm">Add Organization</p>
                <Button size={"icon"} variant={"outline"}>
                  <PlusIcon size={5} />
                </Button>
              </section>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default OrgList;
