"use client";

/* ============================================================
                IMPORTS
============================================================ */

import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
import { ArrowRight } from "lucide-react";

/* ============================================================
                HERO DATA
============================================================ */

const slides = [
  {
    title: "POWERING YOUR",
    highlight: "EVERYDAY LIFE",
    description:
      "Original gadgets, smart devices and accessories at affordable prices.",

    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900",

    badge: "SMART GADGETS",
  },

  {
    title: "DISCOVER NEW",

    highlight: "TECH GEAR",

    description:
      "Premium headphones, chargers, speakers and smart devices.",

    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900",

    badge: "NEW ARRIVALS",
  },

  {
    title: "QUALITY",

    highlight: "YOU CAN TRUST",

    description:
      "Original gadgets delivered all over Bangladesh.",

    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900",

    badge: "BEST SELLERS",
  },
];

/* ============================================================
                    COMPONENT
============================================================ */

export default function Hero() {
  return (
    <section className="relative">

      {/* ===============================================
                  SWIPER
      ================================================ */}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop
      >

        {/* ==========================================
                SLIDES
        =========================================== */}

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            {/* Entire Banner */}

            <div className="bg-gradient-to-r from-black via-[#111] to-black">

              {/* Container */}

              <div className="max-w-7xl mx-auto px-10">

                {/* Two Column Layout */}

                <div className="grid lg:grid-cols-2 items-center min-h-[620px]">

                  {/* ==========================================
                            LEFT CONTENT
                  =========================================== */}

                  <div>

                    {/* Badge */}

                    <p className="uppercase tracking-[4px] text-yellow-500 font-semibold">

                      {slide.badge}

                    </p>

                    {/* Main Title */}

                    <h1 className="text-white text-6xl lg:text-7xl font-black leading-tight mt-5">

                      {slide.title}

                      <br />

                      <span className="text-yellow-500">

                        {slide.highlight}

                      </span>

                    </h1>

                    {/* Description */}

                    <p className="text-gray-300 text-lg mt-8 max-w-lg">

                      {slide.description}

                    </p>

                    {/* Buttons */}

                    <div className="mt-10 flex gap-5">

                      <button className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-xl font-bold flex items-center gap-2">

                        Shop Now

                        <ArrowRight size={18} />

                      </button>

                      <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition px-8 py-4 rounded-xl">

                        Explore

                      </button>

                    </div>

                  </div>

                  {/* ==========================================
                          RIGHT IMAGE
                  =========================================== */}

                  <div className="relative flex justify-center">

                    {/* Glow */}

                    <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-500/20 blur-[120px]" />

                    {/* Product Image */}

                    <Image
                      src={slide.image}
                      alt=""
                      width={700}
                      height={700}
                      className="relative z-10 object-contain drop-shadow-2xl rounded-2xl"
                    />

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}