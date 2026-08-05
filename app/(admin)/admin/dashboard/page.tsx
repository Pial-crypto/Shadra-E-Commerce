import DashboardCard from "@/components/admin/DashboardCard";

import {
  Package,
  ShoppingCart,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const latestOrders = [
  {
    id: "#1001",
    customer: "Sadik Hasan",
    phone: "01712345678",
    total: 5990,
    status: "Pending",
  },
  {
    id: "#1002",
    customer: "Rakib",
    phone: "01812345678",
    total: 2490,
    status: "Confirmed",
  },
  {
    id: "#1003",
    customer: "Nafis",
    phone: "01912345678",
    total: 7990,
    status: "Delivered",
  },
];

export default function DashboardPage() {
  return (
    <section>

      {/* Header */}


      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="Products"
          value={120}
          icon={Package}
          color="bg-blue-500"
        />

        <DashboardCard
          title="Orders"
          value={348}
          icon={ShoppingCart}
          color="bg-green-500"
        />

        <DashboardCard
          title="Pending"
          value={18}
          icon={Clock3}
          color="bg-yellow-500"
        />

        <DashboardCard
          title="Delivered"
          value={276}
          icon={CheckCircle2}
          color="bg-purple-500"
        />

      </div>

      {/* Latest Orders */}

      <div className="mt-10 rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">

            Latest Orders

          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="px-6 py-4 text-left">

                  Order ID

                </th>

                <th className="px-6 py-4 text-left">

                  Customer

                </th>

                <th className="px-6 py-4 text-left">

                  Phone

                </th>

                <th className="px-6 py-4 text-left">

                  Total

                </th>

                <th className="px-6 py-4 text-left">

                  Status

                </th>

              </tr>

            </thead>

            <tbody>

              {latestOrders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >

                  <td className="px-6 py-5">

                    {order.id}

                  </td>

                  <td className="px-6 py-5">

                    {order.customer}

                  </td>

                  <td className="px-6 py-5">

                    {order.phone}

                  </td>

                  <td className="px-6 py-5 font-semibold">

                    ৳{order.total}

                  </td>

                  <td className="px-6 py-5">

                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">

                      {order.status}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}