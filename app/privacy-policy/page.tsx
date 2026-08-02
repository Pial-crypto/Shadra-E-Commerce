import LegalLayout from "@/components/legal/LegalLayout";
import LegalCard from "@/components/legal/LegalCard";
import { Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Your privacy matters to us."
    >
      <LegalCard
        title="Your Information"
        icon={<Lock size={24} />}
      >
        <ul className="list-disc pl-6 space-y-3">

          <li>
            We collect only the information required to process your order.
          </li>

          <li>
            Your personal information is never sold or shared with third
            parties for marketing purposes.
          </li>

          <li>
            Your contact information is used only for order updates and
            customer support.
          </li>

        </ul>
      </LegalCard>
    </LegalLayout>
  );
}