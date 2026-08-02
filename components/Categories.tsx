"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ============================================================
                        CATEGORY DATA
============================================================ */

const categories = [
  {
    title: "Power Banks",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600",
    items: "25 Products",
  },
  {
    title: "Chargers",
    image:
      "https://images.unsplash.com/photo-1609592806596-b43bada2f2cb?w=600",
    items: "18 Products",
  },
  {
    title: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",
    items: "31 Products",
  },
  {
    title: "Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    items: "15 Products",
  },
  {
    title: "Smart Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    items: "22 Products",
  },
  {
    title: "LED Lamps",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600",
    items: "12 Products",
  },
  {
    title: "Bluetooth Speakers",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600",
    items: "19 Products",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600",
    items: "45 Products",
  },
];

/* ============================================================
                        COMPONENT
============================================================ */

export default function Categories() {
  return (
    <section className="py-20">

      {/* ==========================================
                    CONTAINER
      =========================================== */}

      <div className="max-w-7xl mx-auto px-4">

        {/* ==========================================
                    SECTION HEADER
        =========================================== */}

        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-yellow-500 font-semibold uppercase tracking-wider">
              Browse Products
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Shop By Category
            </h2>

          </div>

          <button className="flex items-center gap-2 font-semibold hover:text-yellow-500 transition">

            View All

            <ArrowRight size={18} />

          </button>

        </div>

        {/* ==========================================
                    CATEGORY GRID
        =========================================== */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {categories.map((category, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow hover:shadow-2xl transition duration-300 overflow-hidden group cursor-pointer"
            >

              {/* ====================================
                        IMAGE AREA
              ===================================== */}

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition" />

              </div>

              {/* ====================================
                        CONTENT
              ===================================== */}

              <div className="p-6">

                <h3 className="text-xl font-bold">

                  {category.title}

                </h3>

                <p className="text-gray-500 mt-2">

                  {category.items}

                </p>

                {/* Explore Button */}

                <button className="mt-5 text-yellow-500 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">

                  Explore

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}