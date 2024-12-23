import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./components/app-sidebar";

interface AdminLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen">
        <SidebarTrigger />
        <div className="flex flex-col gap-6 w-full min-h-screen py-5">
          <div className="container mx-auto px-8">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default AdminLayout;
