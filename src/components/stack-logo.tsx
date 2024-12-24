import Image from "next/image";
import React from "react";

function StackLogo() {
  return (
    <div className="flex flex-row gap-x-3 items-end justify-center">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      <h2 className="text-2xl font-semibold">Stack</h2>
    </div>
  );
}

export default StackLogo;
