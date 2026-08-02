"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import {
  Mail,
  Smartphone,
  Send,
  Apple,
  Play,
} from "lucide-react";

/* ============================================================
                    COMPONENT
============================================================ */

export default function Newsletter() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">

      {/* ======================================================
                        CONTAINER
      ======================================================= */}

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ==================================================
                        LEFT CONTENT
          =================================================== */}

          <div>

            <p className="uppercase tracking-[4px] text-yellow-500 font-semibold">

              Stay Connected

            </p>

            <h2 className="text-5xl font-black mt-4 leading-tight">

              Get 10% OFF
              <br />
              Your First Order
            </h2>

            <p className="text-gray-400 mt-6 leading-8">

              Subscribe to receive exclusive offers,
              new arrivals, flash sale notifications
              and discount coupons.

            </p>

            {/* Newsletter */}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <div className="relative flex-1">

                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <input
                  placeholder="Enter your email..."
                  className="w-full h-14 rounded-xl bg-zinc-900 border border-zinc-700 pl-14 pr-4 outline-none"
                />

              </div>

              <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold px-8 rounded-xl flex items-center justify-center gap-2">

                Subscribe

                <Send size={18} />

              </button>

            </div>

          </div>

          {/* ==================================================
                        RIGHT CONTENT
          =================================================== */}

          <div>

            <div className="bg-zinc-900 rounded-3xl p-10">

              <div className="flex items-center gap-4">

                <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center">

                  <Smartphone
                    className="text-black"
                    size={30}
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">

                    Download Our App

                  </h3>

                  <p className="text-gray-400">

                    Shop faster from anywhere.

                  </p>

                </div>

              </div>

              {/* Buttons */}

              <div className="grid grid-cols-2 gap-5 mt-10">

                <button className="h-16 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-3 hover:bg-yellow-500 transition">

                  <Apple size={28} />

                  App Store

                </button>

                <button className="h-16 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-3 hover:bg-yellow-500 transition">

                  <Play size={24} />

                  Google Play

                </button>

              </div>

              {/* Statistics */}

              <div className="grid grid-cols-3 gap-6 mt-12 text-center">

                <div>

                  <h2 className="text-3xl font-black text-yellow-500">

                    15K+

                  </h2>

                  <p className="text-gray-400 mt-2">

                    Customers

                  </p>

                </div>

                <div>

                  <h2 className="text-3xl font-black text-yellow-500">

                    500+

                  </h2>

                  <p className="text-gray-400 mt-2">

                    Products

                  </p>

                </div>

                <div>

                  <h2 className="text-3xl font-black text-yellow-500">

                    4.9★

                  </h2>

                  <p className="text-gray-400 mt-2">

                    Rating

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}