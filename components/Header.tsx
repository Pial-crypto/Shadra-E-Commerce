"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Search,
  Heart,
  GitCompare,
  ShoppingCart,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <>
      {/* ==========================================================
                          TOP BLACK BAR
      =========================================================== */}

      <div className="bg-black text-white text-sm">

        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">

          {/* Left */}

          <div className="flex items-center gap-2">

            <span>🚚</span>

            <p>
              Fast Delivery All Over Bangladesh
            </p>

          </div>

          {/* Middle */}

          <div className="hidden lg:block">

            <p className="text-yellow-400 font-medium">

              🔥 Summer Sale!
              <span className="text-white ml-2">
                Up to 30% OFF
              </span>

            </p>

          </div>

          {/* Right */}

       
        </div>

      </div>

      {/* ==========================================================
                        MAIN HEADER
      =========================================================== */}

      <header className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center gap-8">

          {/* ===========================================
                          LOGO
          =========================================== */}

          <Link href="/" className="shrink-0">

            {/* Replace with your logo later */}

            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
            />

          </Link>

          {/* ===========================================
                        SEARCH AREA
          =========================================== */}

          <div className="flex flex-1">

            {/* Category */}

            <button className="border border-r-0 rounded-l-xl px-5 bg-gray-50 flex items-center gap-2">

              All Categories

              <ChevronDown size={16} />

            </button>

            {/* Search */}

            <input
              className="border-y flex-1 outline-none px-5"
              placeholder="Search products..."
            />

            {/* Search Button */}

            <button className="bg-black text-white rounded-r-xl px-6">

              <Search size={20} />

            </button>

          </div>

          {/* ===========================================
                    HEADER ICONS
          =========================================== */}

          <div className="flex items-center gap-8">

            {/* Wishlist */}

            <div className="relative cursor-pointer">

              <Heart size={23} />

              <span className="absolute -top-2 -right-2 bg-yellow-500 rounded-full text-xs h-5 w-5 flex items-center justify-center">

                0

              </span>

            </div>

        

            {/* Cart */}

            <div className="relative cursor-pointer">

              <ShoppingCart size={23} />

              <span className="absolute -top-2 -right-2 bg-yellow-500 rounded-full text-xs h-5 w-5 flex items-center justify-center">

                0

              </span>

            </div>

          

          </div>

        </div>

      </header>

      {/* ==========================================================
                        NAVIGATION BAR
      =========================================================== */}

      <nav className="bg-white border-t">

        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* =======================================
                ALL CATEGORY BUTTON
          ======================================== */}

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white h-11 rounded-lg px-5 flex items-center gap-3 font-semibold">

            <Menu size={18} />

            All Categories

          </button>

          {/* =======================================
                  NAV LINKS
          ======================================== */}

          <div className="hidden lg:flex gap-10 text-sm font-semibold">

            <Link href="/">Home</Link>

            <Link href="/">Shop</Link>

            <Link href="/">Deals</Link>

            <Link href="/">New Arrivals</Link>

            <Link href="/">Best Sellers</Link>

            <Link href="/">Brands</Link>

            <Link href="/">Contact</Link>

          </div>

          {/* =======================================
                  SHADRA CLUB BUTTON
          ======================================== */}

          <button className="bg-black hover:bg-zinc-800 text-white rounded-lg px-6 h-11">

            👑 Shadra Club

          </button>

        </div>

      </nav>
    </>
  );
}