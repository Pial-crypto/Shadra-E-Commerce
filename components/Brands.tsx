"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ============================================================
                        BRAND DATA
============================================================ */

const brands = [
  {
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    description: "iPhone, AirPods & Accessories",
  },
  {
    name: "Samsung",
    logo: "https://logo.clearbit.com/samsung.com",
    description: "Galaxy Devices",
  },
  {
    name: "Anker",
    logo: "https://logo.clearbit.com/anker.com",
    description: "Chargers & Power Banks",
  },
  {
    name: "Sony",
    logo: "https://logo.clearbit.com/sony.com",
    description: "Audio Collection",
  },
  {
    name: "JBL",
    logo: "https://logo.clearbit.com/jbl.com",
    description: "Premium Speakers",
  },
  {
    name: "Xiaomi",
    logo: "https://logo.clearbit.com/mi.com",
    description: "Smart Gadgets",
  },
  {
    name: "Logitech",
    logo: "https://logo.clearbit.com/logitech.com",
    description: "Gaming Accessories",
  },
  {
    name: "Baseus",
    logo: "https://logo.clearbit.com/baseus.com",
    description: "Mobile Accessories",
  },
];

/* ============================================================
                        COMPONENT
============================================================ */

export default function Brands() {
  return (
    <section className="py-24 bg-[#f8f8f8]">

      {/* ======================================================
                        CONTAINER
      ======================================================= */}

      <div className="max-w-7xl mx-auto px-4">

        {/* ======================================================
                        HEADER
        ======================================================= */}

        <div className="flex justify-between items-center mb-14">

          <div>

            <p className="uppercase tracking-[3px] text-yellow-500 font-semibold">

              Trusted Companies

            </p>

            <h2 className="text-4xl font-black mt-2">

              Shop By Brand

            </h2>

          </div>

          <button className="flex items-center gap-2 font-semibold hover:text-yellow-500 transition">

            View All Brands

            <ArrowRight size={18} />

          </button>

        </div>

        {/* ======================================================
                        GRID
        ======================================================= */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

          {brands.map((brand, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl border shadow hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2"
            >

              {/* Logo */}

              <div className="relative h-24 flex items-center justify-center">

                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={90}
                  height={90}
                  className="object-contain grayscale group-hover:grayscale-0 transition"
                />

              </div>

              {/* Name */}

              <h3 className="mt-8 text-xl font-bold">

                {brand.name}

              </h3>

              {/* Description */}

              <p className="mt-3 text-gray-500 text-sm">

                {brand.description}

              </p>

              {/* Button */}

              <button className="mt-6 text-yellow-500 font-semibold flex items-center gap-2 mx-auto group-hover:gap-4 transition-all">

                Visit Store

                <ArrowRight size={18} />

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}