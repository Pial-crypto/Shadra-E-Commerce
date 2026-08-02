"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ============================================================
                        DEAL DATA
============================================================ */

const deals = [
  {
    title: "Wireless Audio Collection",
    subtitle: "Up to 40% OFF",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
    bg: "bg-gradient-to-r from-black to-zinc-800",
  },

  {
    title: "Premium Power Banks",
    subtitle: "Starting From ৳999",
    button: "Explore",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=900",
    bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
  },
];

/* ============================================================
                    COMPONENT
============================================================ */

export default function DealsBanner() {
  return (
    <section  className="py-20 bg-[#f7f7f7]">

      {/* ==========================================
                    CONTAINER
      ========================================== */}

      <div className="max-w-7xl mx-auto px-4">

        {/* ==========================================
                    GRID
        ========================================== */}

        <div className="grid lg:grid-cols-2 gap-8">

          {deals.map((deal, index) => (

            <div
              key={index}
              className={`${deal.bg} rounded-3xl overflow-hidden`}
            >

              {/* Banner Layout */}

              <div className="grid grid-cols-2 items-center min-h-[300px]">

                {/* Left */}

                <div className="p-10">

                  <p className="uppercase text-sm tracking-[4px] text-white/70">

                    Limited Offer

                  </p>

                  <h2 className="text-4xl font-black text-white mt-4 leading-tight">

                    {deal.title}

                  </h2>

                  <p className="text-2xl font-bold mt-5 text-yellow-300">

                    {deal.subtitle}

                  </p>

                  <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:gap-4 transition-all">

                    {deal.button}

                    <ArrowRight size={18} />

                  </button>

                </div>

                {/* Right */}

                <div className="relative h-full">

                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}