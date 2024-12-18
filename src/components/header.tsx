"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  navText?: string;
}

export function Header({ title, navText }: HeaderProps) {
  const route = useRouter();

  const navigate = () => {
    route.back();
  };
  return (
    <div className="w-full flex gap-4 justify-start items-center">
      {navText && (
        <Button variant={"outline"} onClick={navigate}>
          <ArrowLeft />
        </Button>
      )}
      <div className="flex flex-col gap-y-1">
        <p className="text-sm text-slate-500 font-normal">{navText!}</p>
        <h1 className="text-xl capitalize text-slate-900 font-semibold">
          {title}
        </h1>
      </div>
    </div>
  );
}
