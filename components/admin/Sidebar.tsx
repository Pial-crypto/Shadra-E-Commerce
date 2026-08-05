"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
} from "lucide-react";

import { adminMenus } from "@/lib/admin-menu" 

export default function Sidebar() {
  const pathname = usePathname();

  return (
<aside
  className="
    fixed
    left-0
    top-0

    hidden

    h-screen

    lg:flex
    lg:w-72
    xl:w-80

    flex-col

    border-r

    bg-white
  "
>

      {/* Logo */}

         <div className="border-b px-8 py-8">

        <h1 className="text-3xl font-black text-yellow-500">

          SHADRA

        </h1>

        <p className="mt-2 text-sm text-gray-500">

          Admin Panel

        </p>

      </div>

      {/* Menu */}

       <nav className="flex-1 overflow-y-auto p-5">

        <div className="space-y-2">

          {adminMenus.map((menu) => {

            const Icon = menu.icon;

            const active =
              pathname === menu.href;

            return (

              <Link
                key={menu.href}
                href={menu.href}
                className={`
                  flex
                  items-center
                  gap-4

                  rounded-xl

                  px-5
                  py-4

                  transition-all
                  duration-200

                  ${
                    active
                      ? "bg-yellow-500 font-semibold text-black shadow-sm"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }
                `}
              >

                <Icon size={22} />

                <span>

                  {menu.name}

                </span>

              </Link>

            );

          })}

        </div>

      </nav>

      {/* Bottom */}

    <div className="border-t p-5">

        <p className="text-sm text-zinc-500">

          Shadra Admin v1.0

        </p>

      </div>
    </aside>
  );
}