"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
}

export default function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-4">

      <span className="font-medium text-gray-700">
        Quantity
      </span>

      <div className="flex items-center overflow-hidden rounded-xl border">

        <button
          type="button"
          onClick={() =>
            onChange(Math.max(1, quantity - 1))
          }
          className="flex h-11 w-11 items-center justify-center transition hover:bg-gray-100"
        >
          <Minus size={18} />
        </button>

        <div className="flex h-11 w-14 items-center justify-center border-x font-semibold">

          {quantity}

        </div>

        <button
          type="button"
          onClick={() => onChange(quantity + 1)}
          className="flex h-11 w-11 items-center justify-center transition hover:bg-gray-100"
        >
          <Plus size={18} />
        </button>

      </div>

    </div>
  );
}