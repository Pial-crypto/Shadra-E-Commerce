import LegalLayout from "@/components/legal/LegalLayout";
import LegalCard from "@/components/legal/LegalCard";

import {
  BadgePercent,
  Shield,
  CircleAlert,
} from "lucide-react";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before placing an order from Shadra Gadgets."
    >
      <LegalCard
        title="Offers & Discounts"
        icon={<BadgePercent size={24} />}
      >
        <p>
          Shadra Gadgets reserves the right to modify, update, cancel or
          discontinue any offer, promotion, discount or product pricing at any
          time without prior notice.
        </p>

        <p>
          We also reserve the right to change any business policy, decision or
          condition whenever necessary.
        </p>
      </LegalCard>

      <LegalCard
        title="Warranty Policy"
        icon={<Shield size={24} />}
      >
        <ul className="list-disc pl-6 space-y-3">

          <li>
            Warranty is only applicable for products that include warranty.
          </li>

          <li>
            To claim warranty you must provide the original product box,
            warranty label and purchase proof/order date.
          </li>

          <li>
            After verification, eligible products will be exchanged or serviced
            according to the manufacturer's warranty policy.
          </li>

          <li>
            Products with physical damage, liquid damage, burn marks or misuse
            are not covered under warranty.
          </li>

        </ul>
      </LegalCard>

      <LegalCard
        title="Important Notice"
        icon={<CircleAlert size={24} />}
      >
        <p>
          By placing an order, you agree to all our terms and policies.
        </p>
      </LegalCard>
    </LegalLayout>
  );
}