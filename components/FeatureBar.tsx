"use client";

/* ============================================================
                    IMPORTS
============================================================ */

import {
  ShieldCheck,
  Truck,
 Lock,
  RotateCcw,
  Headphones,
} from "lucide-react";

/* ============================================================
                    FEATURE DATA
============================================================ */

const features = [
  {
    icon: ShieldCheck,
    title: "100% Original",
    description: "Authentic & trusted products",
  },

  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Across Bangladesh",
  },

  {
    icon: Lock,
    title: "Secure Payments",
    description: "100% secure payment",
  },

  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "7 days return policy",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're always here to help",
  },
];

/* ============================================================
                    COMPONENT
============================================================ */

export default function FeatureBar() {
  return (
    <section className="relative z-20">

      {/* ======================================================
                    FLOATING CARD
      ======================================================= */}

      <div className="max-w-7xl mx-auto -mt-10 px-4">

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">

          {/* ==================================================
                        FEATURES
          =================================================== */}

          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-5
            "
          >
            {features.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4

                    p-5
                    sm:p-6

                    transition
                    duration-300

                    hover:bg-gray-50

                    border-b
                    sm:border-r

                    lg:border-b-0

                    last:border-b-0
                    lg:last:border-r-0
                  "
                >

                  {/* ==========================
                              ICON
                  =========================== */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-yellow-100

                      sm:h-14
                      sm:w-14
                    "
                  >

                    <Icon
                      size={24}
                      className="text-yellow-600"
                    />

                  </div>

                  {/* ==========================
                              TEXT
                  =========================== */}

                  <div className="min-w-0">

                    <h3
                      className="
                        text-sm
                        sm:text-base

                        font-semibold
                        text-gray-900
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1

                        text-xs
                        sm:text-sm

                        text-gray-500
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>

              );

            })}
          </div>

        </div>

      </div>

    </section>
  );
}