"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface OrderDetailsModalProps {
  open: boolean;
  onClose: () => void;
}

const order = {
  id: "#1001",
  customer: "Sadik Hasan",
  phone: "01712345678",
  address: "Dhaka, Bangladesh",

  items: [
    {
      title: "Sony Wireless Headphone",
      quantity: 1,
      price: 5990,
    },
    {
      title: "Anker Power Bank",
      quantity: 2,
      price: 2490,
    },
  ],

  delivery: 80,
  status: "Pending",
};

export default function OrderDetailsModal({
  open,
  onClose,
}: OrderDetailsModalProps) {
  useEffect(() => {
    function esc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      window.addEventListener("keydown", esc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal + order.delivery;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 md:p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-3xl max-h-[92vh] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-5 sm:px-8">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Order Details
            </h2>

            <p className="mt-1 text-gray-500">
              {order.id}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-3 hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 space-y-6 overflow-y-auto p-5 sm:p-8">

          {/* Customer */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              Customer Information
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <Info
                title="Customer"
                value={order.customer}
              />

              <Info
                title="Phone"
                value={order.phone}
              />

              <Info
                title="Address"
                value={order.address}
              />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              Ordered Products
            </h3>

            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h4 className="font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Qty : {item.quantity}
                    </p>
                  </div>

                  <div className="font-bold">
                    ৳{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

                    {/* Summary */}
          <div className="rounded-2xl bg-gray-50 p-6">
            <div className="space-y-4">
              <Row
                title="Subtotal"
                value={subtotal}
              />

              <Row
                title="Delivery"
                value={order.delivery}
              />

              <div className="border-t pt-4">
                <Row
                  title="Total"
                  value={total}
                  bold
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block font-medium">
              Order Status
            </label>

            <select className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500">
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 border-t px-5 py-5 sm:flex-row sm:justify-end sm:px-8">
          <button
            onClick={onClose}
            className="w-full rounded-xl border px-6 py-3 font-medium hover:bg-gray-50 sm:w-auto"
          >
            Close
          </button>

          <button
            className="w-full rounded-xl bg-yellow-500 px-8 py-3 font-semibold text-white transition hover:bg-yellow-600 sm:w-auto"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

function Row({
  title,
  value,
  bold,
}: {
  title: string;
  value: number;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className={bold ? "font-bold" : ""}>
        {title}
      </span>

      <span
        className={bold ? "text-xl font-bold" : ""}
      >
        ৳{value}
      </span>
    </div>
  );
}