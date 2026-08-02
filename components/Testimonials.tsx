"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import Image from "next/image";
import { Star, Quote } from "lucide-react";

/* ============================================================
                    TESTIMONIAL DATA
============================================================ */

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Excellent service! My power bank arrived within two days and the quality exceeded my expectations.",
  },

  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Very professional packaging and genuine products. I will definitely order again from Shadra Gadgets.",
  },

  {
    id: 3,
    name: "Sakib Hasan",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    review:
      "Customer support was fantastic. They answered all my questions before I placed the order.",
  },
];

/* ============================================================
                    COMPONENT
============================================================ */

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f8f8]">

      {/* ======================================================
                        CONTAINER
      ======================================================= */}

      <div className="max-w-7xl mx-auto px-4">

        {/* ======================================================
                        SECTION HEADER
        ======================================================= */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] text-yellow-500 font-semibold">

            Happy Customers

          </p>

          <h2 className="text-4xl font-black mt-3">

            What Our Customers Say

          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">

            Thousands of customers trust Shadra Gadgets for original
            products, fast delivery and excellent customer support.

          </p>

        </div>

        {/* ======================================================
                        REVIEW GRID
        ======================================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((review) => (

            <div
              key={review.id}
              className="bg-white rounded-3xl shadow hover:shadow-2xl transition-all duration-300 p-8 relative"
            >

              {/* Quote Icon */}

              <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">

                <Quote className="text-yellow-500" size={22} />

              </div>

              {/* Customer */}

              <div className="flex items-center gap-4">

                <Image
                  src={review.image}
                  alt={review.name}
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">

                    {review.name}

                  </h3>

                  <p className="text-sm text-gray-500">

                    {review.role}

                  </p>

                </div>

              </div>

              {/* Rating */}

              <div className="flex gap-1 mt-6 text-yellow-500">

                {[...Array(review.rating)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="mt-6 text-gray-600 leading-7">

                "{review.review}"

              </p>

              {/* Verified Badge */}

              <div className="mt-8">

                <span className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full">

                  ✓ Verified Purchase

                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}