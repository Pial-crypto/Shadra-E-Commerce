"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { adminMenus } from "@/lib/admin-menu";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSidebar({
  open,
  onClose,
}: MobileSidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <>
      {/* ================= Overlay ================= */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* ================= Drawer ================= */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50

          h-screen
          w-72
          max-w-[85vw]

          bg-white

          shadow-2xl

          transition-transform
          duration-300

          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Logo */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h1 className="text-3xl font-black text-yellow-500">

              SHADRA

            </h1>

            <p className="mt-1 text-sm text-gray-500">

              Admin Panel

            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X />
          </button>

        </div>

        {/* Menu */}

        <nav className="p-5 space-y-2">

          {adminMenus.map((menu) => {

            const Icon = menu.icon;

            const active =
              pathname === menu.href;

            return (

              <Link
                key={menu.href}
                href={menu.href}
                onClick={onClose}
                className={`
                  flex
                  items-center
                  gap-4

                  rounded-xl

                  px-5
                  py-4

                  transition

                  ${
                    active
                      ? "bg-yellow-500 text-black font-semibold"
                      : "hover:bg-gray-100"
                  }
                `}
              >

                <Icon size={22} />

                {menu.name}

              </Link>

            );

          })}

        </nav>

        {/* Footer */}

        <div className="absolute bottom-0 w-full border-t p-5">

          <p className="text-sm text-gray-500">

            Shadra Admin v1.0

          </p>

        </div>

      </aside>
    </>
  );
}