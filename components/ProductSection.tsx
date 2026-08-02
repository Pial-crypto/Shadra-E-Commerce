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
    <section className="py-24 bg-white">

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

          <button className="flex items-center gap-2 font-semibold hover:text-yellow-500 transition">

            View All

            <ArrowRight size={18} />

          </button>

        </div>

        {/* ===================================================
                    PRODUCT GRID
        ==================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl shadow hover:shadow-2xl transition duration-300 overflow-hidden group border"
            >

              {/* ============================================
                        IMAGE AREA
              ============================================= */}

              <div className="relative h-72 bg-gray-100">

                {/* Discount */}

                <span className="absolute left-4 top-4 z-20 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">

                  {product.discount}

                </span>

                {/* Badge */}

                <span className="absolute right-4 top-4 z-20 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold">

                  {product.badge}

                </span>

                {/* Hover Icons */}

                <div className="absolute right-4 top-20 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition duration-300 z-20">

                  <button className="bg-white rounded-full p-2 shadow hover:bg-yellow-500">
                    <Heart size={18} />
                  </button>

                  <button className="bg-white rounded-full p-2 shadow hover:bg-yellow-500">
                    <Eye size={18} />
                  </button>

                  <button className="bg-white rounded-full p-2 shadow hover:bg-yellow-500">
                    <GitCompare size={18} />
                  </button>

                </div>

                {/* Product Image */}

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* ============================================
                        PRODUCT INFO
              ============================================= */}

              <div className="p-6">

                {/* Rating */}

                <div className="flex gap-1 text-yellow-500">

                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />

                </div>

                {/* Title */}

                <h3 className="font-semibold text-lg mt-4 line-clamp-2">

                  {product.title}

                </h3>

                {/* Price */}

                <div className="mt-4 flex items-center gap-3">

                  <span className="text-2xl font-bold">

                    ৳{product.price}

                  </span>

                  <span className="text-gray-400 line-through">

                    ৳{product.oldPrice}

                  </span>

                </div>

                {/* Add To Cart */}

                <button className="mt-6 w-full h-12 rounded-xl bg-black text-white hover:bg-yellow-500 hover:text-black transition font-semibold flex items-center justify-center gap-2">

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