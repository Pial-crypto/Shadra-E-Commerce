"use client";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import QuantitySelector from "./QuantitySelector";

import OrderSummary from "./OrderSummary";

// ======================================================
// VALIDATION
// ======================================================

const orderSchema = z.object({

  customerName: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  phone: z
    .string()
    .regex(
      /^01[3-9]\d{8}$/,
      "Enter a valid Bangladeshi phone number"
    ),

  area: z.enum(["Inside Dhaka", "Outside Dhaka"]),

  address: z
    .string()
    .min(8, "Please enter full address"),

  note: z.string().optional(),

});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderFormProps {

  productName: string;

  price: number;

}

export default function OrderForm({

  productName,

  price,

}: OrderFormProps) {

  const {

    register,

    handleSubmit,

    watch,

    formState: { errors, isSubmitting },

  } = useForm<OrderFormData>({

    resolver: zodResolver(orderSchema),

    defaultValues: {

      area: "Inside Dhaka",

      note: "",

    },

  });

  const [quantity, setQuantity] = useState(1);

  const area = watch("area");

  const deliveryCharge =
    area === "Inside Dhaka" ? 80 : 120;

  async function onSubmit(data: OrderFormData) {

    console.log({

      ...data,

      quantity,

      subtotal: quantity * price,

      deliveryCharge,

      total:
        quantity * price + deliveryCharge,

      productName,

    });

    alert("Ready for Backend API");

  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >

      {/* Product */}

      <div>

        <p className="text-sm text-gray-500">

          Product

        </p>

        <h2 className="text-xl font-bold">

          {productName}

        </h2>

      </div>

      {/* Name */}

      <div>

        <label className="mb-2 block font-medium">

          Full Name

        </label>

        <input
          {...register("customerName")}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
        />

        <p className="mt-1 text-sm text-red-500">

          {errors.customerName?.message}

        </p>

      </div>

      {/* Phone */}

      <div>

        <label className="mb-2 block font-medium">

          Phone Number

        </label>

        <input
          {...register("phone")}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
        />

        <p className="mt-1 text-sm text-red-500">

          {errors.phone?.message}

        </p>

      </div>

      {/* Area */}

      <div>

        <label className="mb-2 block font-medium">

          Delivery Area

        </label>

        <select
          {...register("area")}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
        >

          <option>

            Inside Dhaka

          </option>

          <option>

            Outside Dhaka

          </option>

        </select>

      </div>

      {/* Address */}

      <div>

        <label className="mb-2 block font-medium">

          Full Address

        </label>

        <textarea
          rows={4}
          {...register("address")}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
        />

        <p className="mt-1 text-sm text-red-500">

          {errors.address?.message}

        </p>

      </div>

      {/* Note */}

      <div>

        <label className="mb-2 block font-medium">

          Additional Note

        </label>

        <textarea
          rows={3}
          {...register("note")}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
        />

      </div>

      {/* Quantity */}

      <QuantitySelector

        quantity={quantity}

        onChange={setQuantity}

      />

      {/* Summary */}

      <OrderSummary

        price={price}

        quantity={quantity}

        deliveryCharge={deliveryCharge}

      />

      {/* Button */}

      <button

        disabled={isSubmitting}

        className="w-full rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"

      >

        {isSubmitting
          ? "Processing..."
          : "Place Order"}

      </button>

    </form>

  );

}