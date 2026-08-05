"use client";

import { useEffect } from "react";

import { X } from "lucide-react";

import OrderForm from "./OrderForm";

interface OrderModalProps {

  open: boolean;

  onClose: () => void;

  productName: string;

  price: number;

}

export default function OrderModal({

  open,

  onClose,

  productName,

  price,

}: OrderModalProps) {

  // ============================
  // ESC KEY
  // ============================

  useEffect(() => {

    function handleKeyDown(e: KeyboardEvent) {

      if (e.key === "Escape") {

        onClose();

      }

    }

    if (open) {

      window.addEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "hidden";

    }

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
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

        p-4

        backdrop-blur-sm
      "

    >

      {/* ============================
              MODAL
      ============================ */}

      <div

        onClick={(e) => e.stopPropagation()}

        className="
          relative

          w-full

          max-w-2xl

          overflow-hidden

          rounded-3xl

          bg-white

          shadow-2xl

          animate-in

          fade-in

          zoom-in-95

          duration-200
        "

      >

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-2xl font-bold">

              Complete Your Order

            </h2>

            <p className="mt-1 text-sm text-gray-500">

              Fill in your delivery information

            </p>

          </div>

          <button

            onClick={onClose}

            className="
              rounded-full

              p-2

              transition

              hover:bg-gray-100
            "

          >

            <X size={22} />

          </button>

        </div>

        {/* Body */}

        <div

          className="
            max-h-[80vh]

            overflow-y-auto

            p-6
          "

        >

          <OrderForm

            productName={productName}

            price={price}

          />

        </div>

      </div>

    </div>

  );

}