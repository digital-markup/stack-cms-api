import { redirect } from "next/navigation";
import React from "react";

function page() {
  redirect("/dashboard/home");
  return <div>Redirecting...</div>;
}

export default page;
