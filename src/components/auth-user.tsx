import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function AuthUser() {
  return (
    <div className="w-full h-full flex items-center gap-x-3 mx-2">
      <Link href={"/sign-in"}>
        <Button>Sign In</Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button variant={"outline"}>
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
}

export default AuthUser;
