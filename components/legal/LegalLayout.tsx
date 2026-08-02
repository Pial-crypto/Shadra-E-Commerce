import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  subtitle,
  children,
}: LegalLayoutProps) {
  return (
    <main className="bg-zinc-50">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-b from-yellow-50 via-white to-white border-b">

        <div className="max-w-5xl mx-auto px-4 py-24">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold">

            SHADRA GADGETS

          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-black tracking-tight">

            {title}

          </h1>

          <p className="mt-6 text-lg text-zinc-600 leading-8 max-w-3xl">

            {subtitle}

          </p>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="max-w-5xl mx-auto px-4 py-20">

        <div className="space-y-8">

          {children}

        </div>

      </section>

    </main>
  );
}