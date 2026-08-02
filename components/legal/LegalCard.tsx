import { ReactNode } from "react";

interface LegalCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function LegalCard({
  title,
  icon,
  children,
}: LegalCardProps) {
  return (
    <div className="rounded-3xl border bg-white p-10 shadow-sm transition hover:shadow-xl">

      <div className="mb-6 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">

          {icon}

        </div>

        <h2 className="text-2xl font-bold">

          {title}

        </h2>

      </div>

      <div className="space-y-4 leading-8 text-zinc-600">

        {children}

      </div>

    </div>
  );
}