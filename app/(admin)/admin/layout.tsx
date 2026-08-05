"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "@/components/admin/Sidebar";
import MobileSidebar from "@/components/admin/MobileSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const title = useMemo(() => {
    if (pathname.includes("/dashboard")) return "Dashboard";
    if (pathname.includes("/products")) return "Products";
    if (pathname.includes("/orders")) return "Orders";
    if (pathname.includes("/website")) return "Website";
    if (pathname.includes("/settings")) return "Settings";

    return "Admin";
  }, [pathname]);

  return (
    <div className="bg-gray-100">

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* Right Side */}
      <div className="min-h-screen lg:ml-72 xl:ml-80">

        <AdminHeader
          title={title}
          onMenuClick={() => setOpen(true)}
        />

        <main className="p-5 md:p-8">

          {children}

        </main>

      </div>

    </div>
  );
}