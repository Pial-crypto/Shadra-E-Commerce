"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  Heart,
  Eye,
  Star,
  ArrowRight,
} from "lucide-react";

/* ============================================================
                        PRODUCT DATA
============================================================ */

const flashProducts = [
  {
    id: 1,
    title: "Anker 65W Fast Charger",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=700",
    price: 1590,
    oldPrice: 1990,
  },

  {
    id: 2,
    title: "Sony WH-1000XM Headphone",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    price: 7990,
    oldPrice: 9990,
  },

  {
    id: 3,
    title: "Gaming Mechanical Keyboard",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=700",
    price: 3490,
    oldPrice: 4290,
  },

  {
    id: 4,
    title: "Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700",
    price: 2290,
    oldPrice: 2990,
  },
];

/* ============================================================
                    COMPONENT
============================================================ */

export default function FlashSale() {
  /* ========================================================
                    COUNTDOWN
  ======================================================== */

  const target =
    new Date().getTime() + 1000 * 60 * 60 * 8;

  const [time, setTime] = useState(target - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(target - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.max(0, Math.floor(time / 1000 / 60 / 60));
  const minutes = Math.max(
    0,
    Math.floor((time / 1000 / 60) % 60)
  );
  const seconds = Math.max(
    0,
    Math.floor((time / 1000) % 60)
  );

  return (
    <section className="py-24 bg-white">

      {/* ====================================================
                    CONTAINER
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4">

        {/* ====================================================
                    HEADER
        ===================================================== */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-12">

          <div>

            <p className="uppercase tracking-[3px] text-red-500 font-semibold">

              Limited Time

            </p>

            <h2 className="text-4xl font-black mt-2">

              ⚡ Flash Sale

            </h2>

          </div>

          {/* Countdown */}

          <div className="flex gap-4 mt-8 lg:mt-0">

            {[hours, minutes, seconds].map((item, index) => (

              <div
                key={index}
                className="h-20 w-20 rounded-2xl bg-black text-white flex flex-col justify-center items-center"
              >

                <span className="text-3xl font-bold">

                  {String(item).padStart(2, "0")}

                </span>

                <span className="text-xs uppercase">

                  {index === 0
                    ? "Hours"
                    : index === 1
                    ? "Minutes"
                    : "Seconds"}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* ====================================================
                    PRODUCT GRID
        ===================================================== */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {flashProducts.map((product) => (

            <div
              key={product.id}
              className="rounded-3xl border bg-white shadow hover:shadow-xl overflow-hidden group transition"
            >

              {/* Product Image */}

              <div className="relative h-72 bg-gray-100">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Discount */}

                <div className="absolute left-4 top-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">

                  SALE

                </div>

                {/* Icons */}

                <div className="absolute right-4 top-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">

                  <button className="bg-white rounded-full p-2 shadow">

                    <Heart size={18} />

                  </button>

                  <button className="bg-white rounded-full p-2 shadow">

                    <Eye size={18} />

                  </button>

                </div>

              </div>

              {/* Product Info */}

              <div className="p-6">

                <div className="flex text-yellow-500 gap-1">

                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />

                </div>

                <h3 className="font-semibold mt-4 line-clamp-2">

                  {product.title}

                </h3>

                <div className="flex gap-3 items-center mt-4">

                  <span className="font-bold text-2xl">

                    ৳{product.price}

                  </span>

                  <span className="line-through text-gray-400">

                    ৳{product.oldPrice}

                  </span>

                </div>

                <button className="mt-6 w-full h-12 rounded-xl bg-red-500 hover:bg-red-600 text-white flex justify-center items-center gap-2 font-semibold">

                  <ShoppingCart size={18} />

                  Buy Now

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Button */}

        <div className="flex justify-center mt-14">

          <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-yellow-500 hover:text-black transition">

            View All Flash Deals

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
}