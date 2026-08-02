import LegalLayout from "@/components/legal/LegalLayout";
import LegalCard from "@/components/legal/LegalCard";
import { RefreshCcw } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Exchange Policy"
      subtitle="Our exchange policy is designed to ensure a fair shopping experience."
    >
      <LegalCard
        title="Exchange Policy"
        icon={<RefreshCcw size={24} />}
      >
        <ul className="list-disc pl-6 space-y-3">

          <li>
            If your parcel is damaged during delivery, you must provide a full
            unboxing video within 12 hours of receiving the parcel.
          </li>

          <li>
            If the wrong product is delivered, we will replace it with the
            correct one.
          </li>

          <li>
            Exchange requests without proper video proof may not be accepted.
          </li>

          <li>
            Products must be returned with their original accessories,
            packaging and invoice whenever applicable.
          </li>

        </ul>
      </LegalCard>
    </LegalLayout>
  );
}