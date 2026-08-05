"use client";

import { Eye, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";

const orders = [
  {
    id: "#1001",
    customer: "Sadik Hasan",
    phone: "01712345678",
    address: "Dhaka, Bangladesh",
    total: 5990,
    status: "Pending",
    date: "05 Aug 2026",
  },
  {
    id: "#1002",
    customer: "Rakib Hasan",
    phone: "01812345678",
    address: "Rajshahi",
    total: 2490,
    status: "Confirmed",
    date: "04 Aug 2026",
  },
  {
    id: "#1003",
    customer: "Nafis Ahmed",
    phone: "01912345678",
    address: "Khulna",
    total: 7990,
    status: "Delivered",
    date: "03 Aug 2026",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Confirmed":
      return "bg-blue-100 text-blue-700";
    case "Delivered":
      return "bg-green-100 text-green-700";
    case "Cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function Orders() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="space-y-6">

        {/* Search */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full lg:max-w-md">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search order..."
              className="w-full rounded-xl border bg-white py-3 pl-11 pr-4 outline-none transition focus:border-yellow-500"
            />

          </div>

          <select className="rounded-xl border bg-white px-4 py-3 outline-none focus:border-yellow-500">

            <option>All Orders</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Delivered</option>
            <option>Cancelled</option>

          </select>

        </div>

        {/* ================= MOBILE CARD ================= */}

        <div className="space-y-4 lg:hidden">

          {orders.map((order) => (

            <div
              key={order.id}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="font-bold">
                    {order.id}
                  </h3>

                  <p className="mt-1 text-gray-500">
                    {order.customer}
                  </p>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>

              </div>

              <div className="mt-5 space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Phone</span>
                  <span>{order.phone}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Total</span>
                  <span className="font-semibold">
                    ৳{order.total}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Date</span>
                  <span>{order.date}</span>
                </div>

              </div>

              <div className="mt-5 flex justify-end gap-3">

                <button
                  onClick={() => setOpen(true)}
                  className="rounded-xl bg-blue-100 p-3 text-blue-700"
                >
                  <Eye size={18} />
                </button>

                <button className="rounded-xl bg-red-100 p-3 text-red-700">
                  <Trash2 size={18} />
                </button>

              </div>

            </div>

          ))}

        </div>

                {/* ================= DESKTOP TABLE ================= */}

        <div className="hidden lg:block overflow-hidden rounded-2xl border bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="sticky top-0 bg-gray-50">

                <tr className="border-b">

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Order
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Customer
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Phone
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Total
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Status
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Date
                  </th>

                  <th className="px-4 py-3 text-center text-sm font-semibold">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {orders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-b transition hover:bg-gray-50"
                  >

                    <td className="px-4 py-4 font-semibold">
                      {order.id}
                    </td>

                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium">
                          {order.customer}
                        </p>

                        <p className="text-xs text-gray-500">
                          {order.address}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      {order.phone}
                    </td>

                    <td className="px-4 py-4 font-semibold">
                      ৳{order.total}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap">
                      {order.date}
                    </td>

                    <td className="px-4 py-4">

                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() => setOpen(true)}
                          className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200"
                        >
                          <Eye size={18} />
                        </button>

                        <button
                          className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      <OrderDetailsModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
}