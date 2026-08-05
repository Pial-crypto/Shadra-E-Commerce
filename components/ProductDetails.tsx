"use client";

import { useState } from "react";
import ProductGallery from "@/components/ProductGallery";
import OrderModal from "@/components/OrderModal/OrderModal";

const images = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
  "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=1200",
  "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1200",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200",
];

export default function ProductDetails() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20">

          {/* ==========================================
                        PRODUCT GALLERY
          =========================================== */}

          <ProductGallery images={images} />

          {/* ==========================================
                        PRODUCT DETAILS
          =========================================== */}

          <div className="flex flex-col">

            {/* Badge */}

            <span className="inline-flex w-fit rounded-full bg-yellow-500 px-4 py-1 text-sm font-semibold text-black">

              ⭐ Best Seller

            </span>

            {/* Title */}

            <h1 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">

              Sony WH-1000XM5 Wireless Headphone

            </h1>

            {/* Price */}

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <span className="text-4xl font-bold">

                ৳5,990

              </span>

              <span className="text-xl text-gray-400 line-through">

                ৳6,990

              </span>

              <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">

                -15%

              </span>

            </div>

            {/* Description */}

            <p className="mt-8 text-gray-600 leading-8">

              Experience crystal-clear sound with Active Noise
              Cancellation, premium comfort and up to 40 hours
              battery backup. Perfect for music lovers, gaming,
              office meetings and daily use.

            </p>

            {/* Features */}

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">

                <span className="text-green-600">✔</span>

                <span>100% Original Product</span>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-green-600">✔</span>

                <span>Official 12 Months Warranty</span>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-green-600">✔</span>

                <span>Cash On Delivery Available</span>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-green-600">✔</span>

                <span>Fast Delivery All Over Bangladesh</span>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <button
                className="
                  flex-1
                  rounded-xl
                  border
                  border-black
                  py-4
                  font-semibold
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >

                Add To Cart

              </button>

              <button
                onClick={() => setOpen(true)}
                className="
                  flex-1
                  rounded-xl
                  bg-yellow-500
                  py-4
                  font-semibold
                  text-black
                  transition
                  hover:bg-yellow-600
                "
              >

                Order Now

              </button>

            </div>

            {/* Product Information */}

            <div className="mt-10 rounded-2xl border bg-gray-50 p-6">

              <h3 className="mb-5 text-xl font-bold">

                Product Information

              </h3>

              <div className="grid grid-cols-2 gap-y-4 text-sm">

                <span className="text-gray-500">

                  Brand

                </span>

                <span className="font-medium">

                  Sony

                </span>

                <span className="text-gray-500">

                  Category

                </span>

                <span className="font-medium">

                  Headphones

                </span>

                <span className="text-gray-500">

                  Warranty

                </span>

                <span className="font-medium">

                  12 Months

                </span>

                <span className="text-gray-500">

                  Availability

                </span>

                <span className="font-medium text-green-600">

                  In Stock

                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
                    ORDER MODAL
      =========================================== */}

      <OrderModal
        open={open}
        onClose={() => setOpen(false)}
        productName="Sony WH-1000XM5 Wireless Headphone"
        price={5990}
      />
    </>
  );
}