"use client";

import { Menu } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  onMenuClick: () => void;
}

export default function AdminHeader({
  title,
  onMenuClick,
}: AdminHeaderProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-30

        flex
        h-20
        items-center
        justify-between

        border-b

        bg-white/90

        px-5
        lg:px-8

        backdrop-blur
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Mobile Menu */}

        <button
          onClick={onMenuClick}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border

            hover:bg-gray-100

            lg:hidden
          "
        >
          <Menu size={24} />
        </button>

        {/* Title */}

        <div>

          <h1 className="text-2xl font-bold">

            {title}

          </h1>

          <p className="text-sm text-gray-500">

            Welcome back 👋

          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <div className="hidden sm:block text-right">

          <p className="font-semibold">

            Admin

          </p>

          <p className="text-sm text-gray-500">

            Shadra Store

          </p>

        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            bg-yellow-500

            font-bold
          "
        >
          A
        </div>

      </div>
    </header>
  );
}