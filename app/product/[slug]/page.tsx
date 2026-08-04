// app/product/[slug]/page.tsx
import ProductGallery from "@/components/ProductGallery";

const images = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
  "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=1200",
  "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1200",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200",
];
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  console.log(slug); // Later you'll fetch data using this slug

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ================= IMAGE ================= */}

        <div className="relative h-[550px] rounded-3xl overflow-hidden border bg-gray-100">

         <ProductGallery images={images} />

        </div>

        {/* ================= DETAILS ================= */}

        <div>

          <span className="inline-block rounded-full bg-yellow-500 px-4 py-1 text-sm font-semibold">

            Best Seller

          </span>

          <h1 className="mt-5 text-5xl font-bold">

            Sony Wireless Headphone

          </h1>

          <div className="mt-6 flex items-center gap-4">

            <span className="text-4xl font-bold">
              ৳5,990
            </span>

            <span className="text-xl text-gray-400 line-through">
              ৳6,990
            </span>

            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
              -15%
            </span>

          </div>

          <p className="mt-8 leading-8 text-gray-600">
            Premium wireless headphone with crystal clear sound,
            active noise cancellation and up to 40 hours battery
            backup. This is temporary dummy content.
          </p>

          <button className="mt-10 rounded-xl bg-black px-10 py-4 font-semibold text-white transition hover:bg-yellow-500 hover:text-black">

            Add To Cart

          </button>

        </div>

      </div>

    </section>
  );
}