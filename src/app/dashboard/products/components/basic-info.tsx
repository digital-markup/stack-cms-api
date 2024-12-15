"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function BasicInfo() {
  return (
    <div className="w-full h-full flex flex-col gap-y-6">
      <header className="w-full">
        <h2>Basic Information</h2>
      </header>
      <div className="w-full border border-slate-400 rounded-md px-3 py-6">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="mt-3 flex flex-col gap-2">
            <Label>Display</Label>
            <Input placeholder="display information" />
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <Label>Colors</Label>
            <div className="flex justify-evenly items-center gap-2">
              <Input placeholder="Name" />
              <Input placeholder="Color code" />
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <Label>Battery</Label>
            <Input placeholder="display information" />
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <Label>Memory</Label>
            <Input placeholder="display information" />
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <Label>Camera</Label>
            <Input placeholder="display information" />
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <Label>Hardware</Label>
            <Input placeholder="display information" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
