interface OrderSummaryProps {
  price: number;
  quantity: number;
  deliveryCharge: number;
}

export default function OrderSummary({
  price,
  quantity,
  deliveryCharge,
}: OrderSummaryProps) {

  const subtotal = price * quantity;

  const total = subtotal + deliveryCharge;

  return (

    <div className="rounded-2xl border bg-gray-50 p-5">

      <h3 className="mb-5 text-lg font-semibold">

        Order Summary

      </h3>

      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <span className="text-gray-600">
            Subtotal
          </span>

          <span className="font-semibold">
            ৳{subtotal.toFixed(2)}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-gray-600">
            Delivery
          </span>

          <span className="font-semibold">
            ৳{deliveryCharge.toFixed(2)}
          </span>

        </div>

        <div className="border-t pt-4">

          <div className="flex items-center justify-between">

            <span className="text-lg font-bold">
              Total
            </span>

            <span className="text-2xl font-bold text-yellow-600">

              ৳{total.toFixed(2)}

            </span>

          </div>

        </div>

      </div>

    </div>

  );
}