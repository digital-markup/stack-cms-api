import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./components/app-sidebar";
import authentication from "@/services/supabase-auth-check";

interface AdminLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

async function AdminLayout({ children }: AdminLayoutProps) {
  await authentication();
  
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
