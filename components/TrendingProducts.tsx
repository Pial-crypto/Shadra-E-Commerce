"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import Image from "next/image";
import { useState } from "react";

import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
} from "lucide-react";

/* ============================================================
                    PRODUCT DATA
============================================================ */

const tabs = [
  "New Arrival",
  "Best Seller",
  "Featured",
  "Top Rated",
];

const products = [
  {
    id: 1,
    title: "Anker 65W Charger",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=700",
    price: 1590,
    oldPrice: 1990,
  },
  {
    id: 2,
    title: "Apple AirPods Pro",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=700",
    price: 25990,
    oldPrice: 28990,
  },
  {
    id: 3,
    title: "Wireless Mouse",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=700",
    price: 1290,
    oldPrice: 1590,
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=700",
    price: 3490,
    oldPrice: 4290,
  },
];

/* ============================================================
                    COMPONENT
============================================================ */

export default function TrendingProducts() {

  const [activeTab, setActiveTab] =
    useState("New Arrival");

  return (

    <section className="py-24 bg-white">

      {/* ============================================
                    CONTAINER
      ============================================= */}

      <div className="max-w-7xl mx-auto px-4">

        {/* ============================================
                    HEADER
        ============================================= */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12">

          <div>

            <p className="uppercase text-yellow-500 tracking-[3px] font-semibold">

              Trending Collection

            </p>

            <h2 className="text-4xl font-black mt-2">

              Explore Products

            </h2>

          </div>

          {/* Tabs */}

          <div className="flex flex-wrap gap-3 mt-8 lg:mt-0">

            {tabs.map((tab) => (

              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full transition font-medium ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-yellow-500 hover:text-black"
                }`}
              >
                {tab}
              </button>

            ))}

          </div>

        </div>

        {/* ============================================
                    GRID
        ============================================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="group rounded-3xl border overflow-hidden hover:shadow-2xl transition"
            >

              {/* Product Image */}

              <div className="relative h-72 bg-gray-100">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover Icons */}

                <div className="absolute right-4 top-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">

                  <button className="bg-white p-2 rounded-full shadow">

                    <Heart size={18} />

                  </button>

                  <button className="bg-white p-2 rounded-full shadow">

                    <Eye size={18} />

                  </button>

                </div>

              </div>

              {/* Product Details */}

              <div className="p-6">

                <div className="flex gap-1 text-yellow-500">

                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />

                </div>

                <h3 className="mt-4 font-semibold">

                  {product.title}

                </h3>

                <div className="flex items-center gap-3 mt-4">

                  <span className="text-2xl font-bold">

                    ৳{product.price}

                  </span>

                  <span className="line-through text-gray-400">

                    ৳{product.oldPrice}

                  </span>

                </div>

                <button className="w-full mt-6 h-12 rounded-xl bg-black text-white hover:bg-yellow-500 hover:text-black transition flex items-center justify-center gap-2">

                  <ShoppingCart size={18} />

                  Add To Cart

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}