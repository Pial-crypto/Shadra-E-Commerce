"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [current, setCurrent] = useState(0);

  const previousImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full">

      {/* ==========================================
                    MAIN IMAGE
      =========================================== */}

      <div className="relative overflow-hidden rounded-3xl border bg-white">

        <div className="relative aspect-square">

          <Image
            src={images[current]}
            alt="Product Image"
            fill
            priority
            className="object-contain p-6 transition duration-300"
          />

        </div>

        {/* Previous */}

        <button
          onClick={previousImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-yellow-500 hover:text-white"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-yellow-500 hover:text-white"
        >
          <ChevronRight size={22} />
        </button>

      </div>

      {/* ==========================================
                    THUMBNAILS
      =========================================== */}

      <div className="relative mt-6">

        <div
          className="
            flex
            gap-4
            overflow-x-auto
            pb-2
            scrollbar-hide
            snap-x
          "
        >

          {images.map((image, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                relative

                h-24
                w-24

                shrink-0

                overflow-hidden

                rounded-2xl

                border-2

                transition

                snap-start

                ${
                  current === index
                    ? "border-yellow-500"
                    : "border-gray-200"
                }
              `}
            >

              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}