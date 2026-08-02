import Image from "next/image";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductGridProps {
  product: Product;
}
const getSlug = (title: string) =>
  title.toLowerCase().replace(/\s+/g, "-");

export const ProductGrid = ({ product }: ProductGridProps) => {
  return (
    <Link
  href={`/product/${getSlug(product.title)}`}
  className="block bg-white rounded-3xl shadow hover:shadow-2xl transition duration-300 overflow-hidden group border"
>
    <div className="bg-white rounded-3xl shadow hover:shadow-2xl transition duration-300 overflow-hidden group border">

      {/* IMAGE */}

      <div className="relative h-72 bg-gray-100">

        <span className="absolute left-4 top-4 z-20 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
          {product.discount}
        </span>

        <span className="absolute right-4 top-4 z-20 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold">
          {product.badge}
        </span>

        <div className="absolute right-4 top-20 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
          <button className="bg-white rounded-full p-2 shadow hover:bg-yellow-500">
            <Heart size={18} />
          </button>

          <button className="bg-white rounded-full p-2 shadow hover:bg-yellow-500">
            <Eye size={18} />
          </button>
        </div>

        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      {/* INFO */}

      <div className="p-6">

        <div className="flex gap-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
        </div>

        <h3 className="font-semibold text-lg mt-4 line-clamp-2">
          {product.title}
        </h3>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold">
            ৳{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ৳{product.oldPrice}
          </span>
        </div>

        <button className="mt-6 w-full h-12 rounded-xl bg-black text-white hover:bg-yellow-500 hover:text-black transition font-semibold flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Add To Cart
        </button>

      </div>

    </div>
    </Link>
  );
};