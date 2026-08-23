"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import ImageUploader from "./ImageUploader";
interface ProductModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProductModal({
  open,
  onClose,
}: ProductModalProps) {

  useEffect(() => {

    function handleEscape(e: KeyboardEvent) {

      if (e.key === "Escape") {

        onClose();

      }

    }

    if (open) {

      window.addEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "hidden";

    }

    return () => {

      window.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "auto";

    };

  }, [open, onClose]);

  if (!open) return null;

  return (

   <div
  onClick={onClose}
  className="
    fixed
    inset-0
    z-[999]
    flex
    items-center
    justify-center
    bg-black/60
    backdrop-blur-sm
    p-3
    md:p-5
  "
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="
      flex
      w-full
      max-w-6xl
      max-h-[92vh]
      flex-col
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-2xl
    "
  >
        {/* ====================================== */}

        {/* Header */}

        {/* ====================================== */}

        <div className="flex items-center justify-between border-b px-5 py-5 sm:px-8">
  <div>
    <h2 className="text-2xl font-bold sm:text-3xl">
      Add Product
    </h2>

    <p className="mt-1 text-sm text-gray-500 sm:text-base">
      Create a new product
    </p>
  </div>

  <button
    onClick={onClose}
    className="rounded-xl p-3 transition hover:bg-gray-100"
  >
    <X />
  </button>
</div>

        {/* ====================================== */}

        {/* BODY */}

        {/* ====================================== */}
<div className="flex-1 overflow-y-auto">
  <div className="grid grid-cols-1 gap-6 p-5 lg:grid-cols-2 lg:gap-8 lg:p-8">

            {/* LEFT */}

            <div className="space-y-6">

              {/* Product Title */}

              <div>

                <label className="mb-2 block font-medium">

                  Product Title

                </label>

                <input

                  placeholder="Sony Headphone"

                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"

                />

              </div>

              {/* Category */}

              <div>

                <label className="mb-2 block font-medium">

                  Category

                </label>

                <select className="w-full rounded-xl border px-4 py-3">

                  <option>Audio</option>

                  <option>Power Bank</option>

                  <option>Accessories</option>

                  <option>Gaming</option>

                  <option>Charging</option>

                </select>

              </div>

              {/* Price */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block font-medium">

                    Price

                  </label>

                  <input

                    type="number"

                    className="w-full rounded-xl border px-4 py-3"

                  />

                </div>

                <div>

                  <label className="mb-2 block font-medium">

                    Old Price

                  </label>

                  <input

                    type="number"

                    className="w-full rounded-xl border px-4 py-3"

                  />

                </div>

              </div>

              {/* Discount */}

              {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block font-medium">

                    Discount %

                  </label>

                  <input

                    type="number"

                    placeholder="20.5"

                    className="w-full rounded-xl border px-4 py-3"

                  />

                </div>

                <div>

                  <label className="mb-2 block font-medium">

                    Stock

                  </label>

                  <input

                    type="number"

                    className="w-full rounded-xl border px-4 py-3"

                  />

                </div>

              </div> */}

              {/* Warranty */}

              <div>

                <label className="mb-2 block font-medium">

                  Warranty

                </label>

                <input

                  placeholder="12 Months"

                  className="w-full rounded-xl border px-4 py-3"

                />

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">
<ImageUploader />
              {/* Description */}

              <div>

                <label className="mb-2 block font-medium">

                  Description

                </label>

                <textarea

                  rows={7}

                  className="w-full rounded-xl border px-4 py-3"

                />

              </div>

              {/* Badge */}

              {/* <div>

                <label className="mb-2 block font-medium">

                  Badge

                </label>

           

              </div> */}

              {/* Featured */}

              <div className="space-y-3">

                {/* <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Featured Product

                </label> */}

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Trending Product

                </label>

              </div>

            </div>

          </div>

        </div>

        {/* ====================================== */}

        {/* FOOTER */}

        {/* ====================================== */}

       <div
  className="
    flex
    flex-col-reverse
    gap-3
    border-t
    px-5
    py-5
    sm:flex-row
    sm:justify-end
    sm:px-8
  "
>

         <button
  onClick={onClose}
  className="
    w-full
    rounded-xl
    border
    px-6
    py-3
    font-medium
    sm:w-auto
  "
>
  Cancel
</button>

          <button
  className="
    w-full
    rounded-xl
    bg-yellow-500
    px-8
    py-3
    font-semibold
    text-white
    transition
    hover:bg-yellow-600
    sm:w-auto
  "
>
  Save Product
</button>

        </div>

      </div>

    </div>

  );

}