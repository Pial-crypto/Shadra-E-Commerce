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
                    WHITE FLOATING CARD
      ======================================================= */}

      <div className="max-w-7xl mx-auto -mt-10 px-4">

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">

          {/* ==================================================
                        FEATURES GRID
          =================================================== */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

            {features.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex items-center gap-4 p-6 hover:bg-gray-50 transition duration-300 border-b lg:border-b-0 lg:border-r last:border-r-0"
                >

                  {/* Icon */}

                  <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center">

                    <Icon
                      size={26}
                      className="text-yellow-600"
                    />

                  </div>

                  {/* Text */}

                  <div>

                    <h3 className="font-semibold text-gray-900">

                      {item.title}

                    </h3>

                    <p className="text-sm text-gray-500 mt-1">

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