import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function ForwardToDashboard() {
  return (
    <div className="w-full h-full flex items-center mx-2">
      <Link href={"/dashboard/home"}>
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
}

export default ForwardToDashboard;
