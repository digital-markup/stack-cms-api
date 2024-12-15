import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col gap-6 w-full h-full">{children}</div>
    </main>
  );
}

export default AdminLayout;
