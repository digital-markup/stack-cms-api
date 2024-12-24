import { userCheck } from "@/services/supabase-auth-check";
import Link from "next/link";
import React from "react";
import ForwardToDashboard from "./forward-to-dashboard";
import AuthUser from "./auth-user";
import Image from "next/image";

async function Navbar() {
  // if user is not logged in, input the login & sign up button
  const user = await userCheck();
  // or render the button for dashboard
  return (
    <div className="w-full h-full">
      <nav className="w-full flex justify-center items-center border-b">
        <div className="w-full flex flex-row gap-3 py-3 px-16 items-center justify-evenly">
          <section className="flex flex-row gap-x-3 items-end justify-center">
            <Image src="/logo.svg" alt="logo" width={25} height={25} />
          </section>
          <div>
            <ul className="inline-flex gap-x-8">
              <li>
                <Link href={"#"}>Pricing</Link>
              </li>
              <li>
                <Link href={"#"}>Features</Link>
              </li>
              <li>
                <Link href={"#"}>Blog</Link>
              </li>
              <li>
                <Link href={"#"}>Forum</Link>
              </li>
              <li>
                <Link href={"#"}>Docs</Link>
              </li>
            </ul>
          </div>
          <div>{user ? <ForwardToDashboard /> : <AuthUser />}</div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
