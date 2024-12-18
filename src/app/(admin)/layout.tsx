import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col gap-6 w-full min-h-screen py-5">
        <div className="container mx-auto px-8">{children}</div>
      </div>
    </main>
  );
}

export default AdminLayout;
