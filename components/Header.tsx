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

  <div className="bg-black text-white">

  <div
    className="
      max-w-7xl
      mx-auto

      px-4

      h-10
      sm:h-10
      md:h-11

      flex
      items-center
      justify-center
      lg:justify-between
    "
  >

    {/* Left */}

    <div
      className="
        flex
        items-center
        gap-2

        text-[11px]
        sm:text-xs
        md:text-sm

        font-medium
        text-center
      "
    >

      <span className="text-xs sm:text-sm">
        🚚
      </span>

      <p className="truncate">
        Fast Delivery All Over Bangladesh
      </p>

    </div>

    {/* Desktop Offer */}

    <div className="hidden lg:block">

      <p className="font-medium text-yellow-400">

        🔥 Summer Sale!

        <span className="ml-2 text-white">
          Up to 30% OFF
        </span>

      </p>

    </div>

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
{/* 
      <div className="relative cursor-pointer">

        <Heart size={23} />

        <span className="absolute -top-2 -right-2 bg-yellow-500 rounded-full text-xs h-5 w-5 flex items-center justify-center
        
        ">

          0

        </span>

      </div> */}

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

<nav className="border-t bg-white">

  <div className="max-w-7xl mx-auto px-4 py-3">

    <div className="flex items-center gap-3">

      {/* =========================
            Categories
      ========================== */}

      <div className="shrink-0">

        <MegaMenu />

      </div>

      {/* =========================
            Navigation
      ========================== */}

      <div
        className="
          flex
          flex-1
          items-center
          justify-evenly

          text-xs
          sm:text-sm

          font-semibold
        "
      >

        <button
          onClick={() => scrollToSection("trending")}
          className="whitespace-nowrap transition hover:text-yellow-500"
        >
          Trending
        </button>

        <Link
          href="/products"
          className="whitespace-nowrap transition hover:text-yellow-500"
        >
          Products
        </Link>

        <button
          onClick={() => scrollToSection("contact")}
          className="whitespace-nowrap transition hover:text-yellow-500"
        >
          Contact
        </button>

      </div>

    </div>

  </div>

</nav>
    </>
  );
}