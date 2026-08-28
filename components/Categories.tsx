"use client";

/* ============================================================
                        IMPORTS
============================================================ */
import Link from "next/link";


import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { slugify } from "@/lib/slugify";
import { categoryCount } from "@/types/categoryCount";

/* ============================================================
                        CATEGORY DATA
============================================================ */

const categories = [
  {
    title: "Power Bank",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600",
    items: "",
  },
  {
    title: "Chargers",
    image:
      "https://images.unsplash.com/photo-1609592806596-b43bada2f2cb?w=600",
    items: "",
  },
  {
    title: "Gaming",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",
    items: "",
  },
  {
    title: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    items: "",
  },

  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600",
    items: "",
  },
];
// const getSlug = (title: string) =>
//   title.toLowerCase().replace(/\s+/g, "-");

/* ============================================================
                        COMPONENT
============================================================ */

export default function Categories(
{categoryCount}
:{
categoryCount:categoryCount[]
}) {
console.log("passed category count", categoryCount[0])

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

          {/* <button className="flex items-center gap-2 font-semibold hover:text-yellow-500 transition">

            View All

            <ArrowRight size={18} />

          </button> */}

        </div>

        {/* ==========================================
                    CATEGORY GRID
        =========================================== */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

       {categoryCount.map((catResult, index) => {
  const category = categories[index];

  return (
    <Link
      key={catResult.category}
      href={`/category/${slugify(catResult.category)}`}
      className="bg-white rounded-3xl shadow hover:shadow-2xl transition duration-300 overflow-hidden group block cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">
          {catResult.category}
        </h3>

        <p className="mt-2 text-gray-500">
          {catResult._count._all} items
        </p>

        <div className="mt-5 flex items-center gap-2 font-semibold text-yellow-500">
          Explore
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
})}

        </div>

      </div>

    </section>
  );
}