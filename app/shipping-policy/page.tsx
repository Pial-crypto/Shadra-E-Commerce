import LegalLayout from "@/components/legal/LegalLayout";
import LegalCard from "@/components/legal/LegalCard";
import { Truck } from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <LegalLayout
      title="Shipping Policy"
      subtitle="Fast and reliable delivery across Bangladesh."
    >
      <LegalCard
        title="Delivery Charges"
        icon={<Truck size={24} />}
      >
        <ul className="list-disc pl-6 space-y-3">

          <li>
            Inside Dhaka: ৳80
          </li>

          <li>
            Outside Dhaka: ৳120
          </li>

        </ul>
      </LegalCard>

      <LegalCard
        title="Delivery Time"
        icon={<Truck size={24} />}
      >
        <p>
          Delivery usually takes <strong>2–4 business days</strong>.
        </p>

        <p>
          Delivery may occasionally be delayed due to courier partner
          operations, public holidays or unavoidable circumstances.
        </p>
      </LegalCard>
    </LegalLayout>
  );
}