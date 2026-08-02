"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

/* ============================================================
                        COMPONENT
============================================================ */

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">

      {/* ======================================================
                    MAIN FOOTER
      ======================================================= */}

      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">

          {/* ==================================================
                        COMPANY
          =================================================== */}

        {/* ==================================================
                    COMPANY
=================================================== */}

<div className="lg:col-span-2">

  <Link href="/" className="inline-block">

    <h2 className="text-4xl font-black text-yellow-500">
      SHADRA
    </h2>

  </Link>

  <p className="mt-6 max-w-md leading-8 text-gray-400">

    Shadra Gadgets is your trusted destination for original gadgets,
    mobile accessories, power banks, chargers, audio devices and
    lifestyle electronics with fast delivery all over Bangladesh.

  </p>

  {/* Contact */}

  <div className="mt-10 space-y-5">

    <div className="flex items-center gap-3">

      <MapPin
        size={20}
        className="text-yellow-500 shrink-0"
      />

      <span className="text-gray-400">
        Dhaka, Bangladesh
      </span>

    </div>

    <Link
      href="tel:+8801683700950"
      className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 transition"
    >

      <Phone
        size={20}
        className="text-yellow-500 shrink-0"
      />

      <span>
        +880 1683-700950
      </span>

    </Link>

    <Link
      href="mailto:shahiemahmud@gmail.com"
      className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 transition"
    >

      <Mail
        size={20}
        className="text-yellow-500 shrink-0"
      />

      <span>
        shahiemahmud@gmail.com
      </span>

    </Link>

    <Link
      href="https://wa.me/8801683700950"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 transition"
    >

      <Phone
        size={20}
        className="text-yellow-500 shrink-0"
      />

      <span>
        WhatsApp Support
      </span>

    </Link>

  </div>

</div>

          {/* ==================================================
                        SHOP
          =================================================== */}

         {/* ==================================================
                    SHOP
=================================================== */}

<div>

  <h3 className="mb-6 text-xl font-bold">

    Shop

  </h3>

  <ul className="space-y-4">

    <li>

      <Link
        href="/products"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        All Products
      </Link>

    </li>

    <li>

      <Link
        href="/category/power-banks"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Power Banks
      </Link>

    </li>

    <li>

      <Link
        href="/category/chargers"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Chargers
      </Link>

    </li>

    <li>

      <Link
        href="/category/headphones"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Headphones
      </Link>

    </li>

    <li>

      <Link
        href="/category/earbuds"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Earbuds
      </Link>

    </li>

    <li>

      <Link
        href="/trending"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Trending Products
      </Link>

    </li>

  </ul>

</div>

          {/* ==================================================
                        CUSTOMER
          =================================================== */}

        {/* ==================================================
                    CUSTOMER
=================================================== */}

<div>

  <h3 className="mb-6 text-xl font-bold">

    Customer

  </h3>

  <ul className="space-y-4">

    <li>

      <Link
        href="/cart"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Cart
      </Link>

    </li>

    <li>

      <Link
        href="/wishlist"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Wishlist
      </Link>

    </li>

    <li>

      <Link
        href="/shipping-policy"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Shipping Policy
      </Link>

    </li>

    <li>

      <Link
        href="/refund-policy"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Refund Policy
      </Link>

    </li>

  </ul>

</div>

          {/* ==================================================
                        INFORMATION
          =================================================== */}

          {/* ==================================================
                    INFORMATION
=================================================== */}

<div>

  <h3 className="mb-6 text-xl font-bold">

    Information

  </h3>

  <ul className="space-y-4">

    <li>

      <Link
        href="/about"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        About Us
      </Link>

    </li>

    <li>

      <Link
        href="/contact"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Contact Us
      </Link>

    </li>

    <li>

      <Link
        href="/privacy-policy"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Privacy Policy
      </Link>

    </li>

    <li>

      <Link
        href="/terms-and-conditions"
        className="text-gray-400 hover:text-yellow-500 transition"
      >
        Terms & Conditions
      </Link>

    </li>

  </ul>

</div>

        </div>

        {/* ======================================================
                    PAYMENT + SOCIAL
        ======================================================= */}

  {/* ======================================================
                SOCIAL
====================================================== */}

<div className="mt-16 border-t border-zinc-800 pt-10 flex justify-center lg:justify-end">

  <div>

    <h4 className="mb-4 text-center lg:text-left font-semibold">

      Follow Us

    </h4>

    {/* Social Icons */}

    <div className="flex gap-4">

      {/* Facebook */}

      <Link
        href="https://www.facebook.com/profile.php?id=61592716442009"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-yellow-500 hover:text-black"
      >
        <FaFacebookF size={20} />
      </Link>

      {/* Instagram */}

      <Link
        href="https://instagram.com/shadragadgets"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-yellow-500 hover:text-black"
      >
        <FaInstagram size={20} />
      </Link>

      {/* YouTube */}

      <Link
        href="https://youtube.com/@shadragadgets"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-yellow-500 hover:text-black"
      >
        <FaYoutube size={20} />
      </Link>

      {/* WhatsApp */}

      <Link
        href="https://wa.me/8801683700950"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition hover:bg-yellow-500 hover:text-black"
      >
        <FaWhatsapp size={20} />
      </Link>

    </div>

  </div>

</div>

      </div>

      {/* ======================================================
                    COPYRIGHT
      ======================================================= */}

      <div className="border-t border-zinc-800">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-center text-sm text-gray-500 md:flex-row">

    <p>

      © {new Date().getFullYear()} Shadra Gadgets. All Rights Reserved.

    </p>

    <div className="flex flex-wrap items-center gap-6">

      <Link
        href="/privacy-policy"
        className="transition hover:text-yellow-500"
      >
        Privacy Policy
      </Link>

      <Link
        href="/terms-and-conditions"
        className="transition hover:text-yellow-500"
      >
        Terms
      </Link>

      <Link
        href="/refund-policy"
        className="transition hover:text-yellow-500"
      >
        Refund
      </Link>

      <Link
        href="/shipping-policy"
        className="transition hover:text-yellow-500"
      >
        Shipping
      </Link>

    </div>

  </div>

</div>

    </footer>
  );
}