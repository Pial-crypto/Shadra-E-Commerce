"use client";



import Image from "next/image";
import Link from "next/link";

import {
  Heart,
  ShoppingCart,
} from "lucide-react";

import SearchBar from "./SearchBar";
import { MegaMenu } from "./MegaMenu";
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  const y =
    section.getBoundingClientRect().top +
    window.pageYOffset -
    100;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
export default function Header() {
 const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  const y =
    section.getBoundingClientRect().top +
    window.pageYOffset -
    100; // Header height

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
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

    {/* Logo */}

    <Link href="/" className="shrink-0">

      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
      />

    </Link>

    {/* Search */}

    <SearchBar />

    {/* Icons */}

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

    <MegaMenu />

    {/* =======================================
              NAV LINKS
    ======================================== */}

    <div className="hidden lg:flex items-center gap-10 text-sm font-semibold">

      {/* <Link
        href="/"
        className="transition hover:text-yellow-500"
      >
        Home
      </Link> */}

      <button
        onClick={() => scrollToSection("trending")}
        className="cursor-pointer transition hover:text-yellow-500"
      >
        Trending
      </button>

      <Link
        href="/products"
        className="transition hover:text-yellow-500"
      >
        Products
      </Link>

      <button
        onClick={() => scrollToSection("contact")}
        className="cursor-pointer transition hover:text-yellow-500"
      >
        Contact
      </button>

    </div>

  </div>

</nav>
    </>
  );
}