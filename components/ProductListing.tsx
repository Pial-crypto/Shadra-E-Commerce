"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "./ProductGrid";
import type { Product } from "@/types/product"; // <-- Update path if needed

/* ==========================================================
                        DUMMY PRODUCTS
========================================================== */

const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Anker 20,000mAh Power Bank",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700",
    price: 2490,
    oldPrice: 2990,
    discount: "-17%",
    badge: "Hot",
  },

  {
    id: 2,
    title: "Sony Wireless Headphone",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    price: 5990,
    oldPrice: 6990,
    discount: "-15%",
    badge: "Sale",
  },

  {
    id: 3,
    title: "Apple 20W Charger",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=700",
    price: 1590,
    oldPrice: 1990,
    discount: "-20%",
    badge: "New",
  },

  {
    id: 4,
    title: "JBL Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700",
    price: 4490,
    oldPrice: 5200,
    discount: "-14%",
    badge: "Trending",
  },

  {
    id: 5,
    title: "Smart LED Desk Lamp",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700",
    price: 1890,
    oldPrice: 2400,
    discount: "-21%",
    badge: "Popular",
  },

  {
    id: 6,
    title: "USB Type-C Fast Cable",
    image:
      "https://images.unsplash.com/photo-1609592806596-b43bada2f2cb?w=700",
    price: 390,
    oldPrice: 590,
    discount: "-34%",
    badge: "Best",
  },

  {
    id: 7,
    title: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    price: 3490,
    oldPrice: 4200,
    discount: "-18%",
    badge: "New",
  },

  {
    id: 8,
    title: "Gaming Earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=700",
    price: 1490,
    oldPrice: 1990,
    discount: "-25%",
    badge: "Hot",
  },
];



/* ==========================================================
                        PROPS
========================================================== */

interface ProductListingProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

/* ==========================================================
                    PRODUCT LISTING
========================================================== */

export const ProductListing = ({
  title,
  subtitle = "Browse Products",
  products,
}: ProductListingProps) => {
  const [sortBy, setSortBy] = useState("featured");

  const productData = products ?? dummyProducts;

  const sortedProducts = useMemo(() => {
    const sorted = [...productData];

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "discount":
        sorted.sort(
          (a, b) =>
            Number(b.discount.replace(/[^0-9]/g, "")) -
            Number(a.discount.replace(/[^0-9]/g, ""))
        );
        break;

      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;

      default:
        break;
    }

    return sorted;
  }, [productData, sortBy]);

  return (
    <section className="max-w-7xl mx-auto">

      {/* ======================================================
              ONLY SHOW HEADER IF TITLE IS PROVIDED
      ====================================================== */}

      {title && (
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="font-semibold uppercase tracking-[0.2em] text-yellow-500">
              {subtitle}
            </p>

            <h1 className="mt-2 text-5xl font-bold">
              {title}
            </h1>

            <p className="mt-2 text-zinc-500">
              {sortedProducts.length} Products Found
            </p>

          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 outline-none focus:border-yellow-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="discount">Highest Discount</option>
            <option value="name">Name (A-Z)</option>
          </select>

        </div>
      )}

      {/* ======================================================
                      PRODUCT GRID
      ====================================================== */}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {sortedProducts.map((product) => (

          <ProductGrid
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
};