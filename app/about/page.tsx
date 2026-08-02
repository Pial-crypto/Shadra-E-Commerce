import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Headphones,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-zinc-50">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-b from-yellow-50 via-white to-white border-b">

        <div className="max-w-6xl mx-auto px-4 py-24 text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">

            SHADRA GADGETS

          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-black">

            About Us

          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-zinc-600">

            We are committed to bringing original gadgets and mobile
            accessories to customers across Bangladesh with trusted
            service, affordable pricing and fast delivery.

          </p>

        </div>

      </section>

      {/* ================= STORY ================= */}

      <section className="max-w-6xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-yellow-500 font-semibold uppercase tracking-widest">

              Our Story

            </p>

            <h2 className="mt-4 text-4xl font-black">

              Technology Made Affordable

            </h2>

            <p className="mt-8 leading-8 text-zinc-600">

              Shadra Gadgets started with a simple mission:
              provide customers with original gadgets,
              trusted accessories and reliable customer
              service without unnecessary high prices.

            </p>

            <p className="mt-6 leading-8 text-zinc-600">

              From power banks and chargers to headphones,
              earbuds and smart devices, we carefully select
              quality products so our customers can shop
              with confidence.

            </p>

          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <Image
  src="/cover.png"
  alt="Shadra Gadgets"
  width={700}
  height={500}
  className="h-[500px] w-full object-cover"
/>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="max-w-6xl mx-auto px-4 pb-24">

        <div className="text-center">

          <p className="text-yellow-500 font-semibold uppercase">

            Why Choose Us

          </p>

          <h2 className="mt-4 text-4xl font-black">

            Shop With Confidence

          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="rounded-3xl bg-white border p-8 text-center shadow-sm hover:shadow-xl transition">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">

              <BadgeCheck className="text-yellow-600" />

            </div>

            <h3 className="mt-6 text-xl font-bold">

              Original Products

            </h3>

            <p className="mt-4 text-zinc-600 leading-7">

              Carefully selected quality gadgets from trusted brands.

            </p>

          </div>

          <div className="rounded-3xl bg-white border p-8 text-center shadow-sm hover:shadow-xl transition">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">

              <Truck className="text-yellow-600" />

            </div>

            <h3 className="mt-6 text-xl font-bold">

              Fast Delivery

            </h3>

            <p className="mt-4 text-zinc-600 leading-7">

              Nationwide delivery across Bangladesh.

            </p>

          </div>

          <div className="rounded-3xl bg-white border p-8 text-center shadow-sm hover:shadow-xl transition">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">

              <ShieldCheck className="text-yellow-600" />

            </div>

            <h3 className="mt-6 text-xl font-bold">

              Warranty Support

            </h3>

            <p className="mt-4 text-zinc-600 leading-7">

              Warranty available on eligible products.

            </p>

          </div>

          <div className="rounded-3xl bg-white border p-8 text-center shadow-sm hover:shadow-xl transition">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">

              <Headphones className="text-yellow-600" />

            </div>

            <h3 className="mt-6 text-xl font-bold">

              Customer Support

            </h3>

            <p className="mt-4 text-zinc-600 leading-7">

              Friendly support before and after every purchase.

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}