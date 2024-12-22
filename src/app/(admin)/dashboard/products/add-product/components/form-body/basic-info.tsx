"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function BasicInfo() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full pb-3">
      <div className="mt-3 flex flex-col gap-2">
        <Label>Display</Label>
        <Input id="display" name="display-info" />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <Label>Colors</Label>
        <div className="flex justify-evenly items-center gap-2">
          <Input id="color" name="color" placeholder="Desert Titanium, White Titanium, etc..."/>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <Label>Battery</Label>
        <Input
          id="battery"
          name="battery"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <Label>Memory</Label>
        <Input
          id="memory"
          name="memory"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <Label>Camera</Label>
        <Input
          id="camera"
          name="camera"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <Label>Hardware</Label>
        <Input
          id="hardware"
          name="hardware"
        />
      </div>
    </div>
  );
}

export default BasicInfo;
