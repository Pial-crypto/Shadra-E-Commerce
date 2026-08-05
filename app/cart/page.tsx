"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
} from "lucide-react";

const cartItems = [
  {
    id: 1,
    title: "Sony Wireless Headphone",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    price: 5990,
    quantity: 1,
  },
  {
    id: 2,
    title: "Anker 20,000mAh Power Bank",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700",
    price: 2490,
    quantity: 2,
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryCharge = 80;

  const total = subtotal + deliveryCharge;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* Header */}

      <div className="mb-12">

        <p className="font-semibold uppercase tracking-[0.2em] text-yellow-500">

          Shopping Cart

        </p>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold">

          Your Cart

        </h1>

        <p className="mt-2 text-zinc-500">

          {cartItems.length} Item(s)

        </p>

      </div>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

        {/* ==========================
                LEFT
        ========================== */}

        <div className="space-y-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >

              <div className="flex flex-col gap-5 sm:flex-row">

                {/* Image */}

                <div className="relative h-28 w-28 overflow-hidden rounded-xl border">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col justify-between">

                  <div>

                    <h2 className="text-lg font-bold">

                      {item.title}

                    </h2>

                    <p className="mt-2 text-2xl font-bold">

                      ৳{item.price}

                    </p>

                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

                    {/* Quantity */}

                    <div className="flex items-center overflow-hidden rounded-xl border">

                      <button className="flex h-10 w-10 items-center justify-center hover:bg-gray-100">

                        <Minus size={18} />

                      </button>

                      <div className="flex h-10 w-12 items-center justify-center border-x font-semibold">

                        {item.quantity}

                      </div>

                      <button className="flex h-10 w-10 items-center justify-center hover:bg-gray-100">

                        <Plus size={18} />

                      </button>

                    </div>

                    {/* Subtotal */}

                    <p className="text-lg font-bold">

                      ৳
                      {item.price * item.quantity}

                    </p>

                    {/* Remove */}

                    <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-red-500 transition hover:bg-red-50">

                      <Trash2 size={18} />

                      Remove

                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* Continue Shopping */}

          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold hover:text-yellow-500"
          >

            <ArrowLeft size={18} />

            Continue Shopping

          </Link>

        </div>

        {/* ==========================
                SUMMARY
        ========================== */}

        <div className="h-fit rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-bold">

            Order Summary

          </h2>

          <div className="mt-8 space-y-5">

            <div className="flex justify-between">

              <span className="text-gray-500">

                Subtotal

              </span>

              <span>

                ৳{subtotal}

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-500">

                Delivery

              </span>

              <span>

                ৳{deliveryCharge}

              </span>

            </div>

            <div className="border-t pt-5">

              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span>

                  ৳{total}

                </span>

              </div>

            </div>

          </div>

          <button
            className="
              mt-8
              w-full
              rounded-xl
              bg-yellow-500
              py-4
              font-semibold
              text-black
              transition
              hover:bg-yellow-600
            "
          >

            Proceed to Checkout

          </button>

        </div>

      </div>

    </section>
  );
}