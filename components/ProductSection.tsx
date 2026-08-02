"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  Eye,
  GitCompare,
  Star,
  ArrowRight,
 
} from "lucide-react";
import { ProductGrid } from "./ProductGrid";
import Link from "next/link";
import { ProductListing } from "./ProductListing";

/* ============================================================
                        PRODUCT DATA
============================================================ */

const products = [
  {
    id: 1,
    title: "Anker 20,000mAh Power Bank",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700",
    price: 2490,
    oldPrice: 2990,
    discount: "-17%",
    badge: "Hot",
  },

  {
    id: 2,
    title: "Sony Wireless Headphone",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    price: 5990,
    oldPrice: 6990,
    discount: "-15%",
    badge: "Sale",
  },

  {
    id: 3,
    title: "Apple 20W Charger",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=700",
    price: 1590,
    oldPrice: 1990,
    discount: "-20%",
    badge: "New",
  },

  {
    id: 4,
    title: "JBL Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700",
    price: 4490,
    oldPrice: 5200,
    discount: "-14%",
    badge: "Trending",
  },

  {
    id: 5,
    title: "Smart LED Desk Lamp",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700",
    price: 1890,
    oldPrice: 2400,
    discount: "-21%",
    badge: "Popular",
  },

  {
    id: 6,
    title: "USB Type-C Fast Cable",
    image:
      "https://images.unsplash.com/photo-1609592806596-b43bada2f2cb?w=700",
    price: 390,
    oldPrice: 590,
    discount: "-34%",
    badge: "Best",
  },

  {
    id: 7,
    title: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    price: 3490,
    oldPrice: 4200,
    discount: "-18%",
    badge: "New",
  },

  {
    id: 8,
    title: "Gaming Earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=700",
    price: 1490,
    oldPrice: 1990,
    discount: "-25%",
    badge: "Hot",
  },
];

/* ============================================================
                    COMPONENT
============================================================ */

export default function ProductSection() {
  return (
    <section id="trending" className="py-24 bg-white">

      {/* =======================================================
                        CONTAINER
      ======================================================== */}

      <div className="max-w-7xl mx-auto px-4">

        {/* ===================================================
                    SECTION HEADER
        ==================================================== */}

        <div className="flex justify-between items-center mb-12">

          <div>

            <p className="uppercase tracking-wider text-yellow-500 font-semibold">

              Trending Products

            </p>

            <h2 className="text-4xl font-bold mt-2">

              Best Selling Products

            </h2>

          </div>

<Link
  href="/trending"
  className="flex items-center gap-2 font-semibold transition-colors hover:text-yellow-500"
>
  View All
  <ArrowRight size={18} />
</Link>

        </div>

        {/* ===================================================
                    PRODUCT GRID
        ==================================================== */}

        <ProductListing></ProductListing>

      </div>

    </section>
  );
}