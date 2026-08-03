"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slugify";

const products = [
  {
    id: 1,
    title: "Anker 20,000mAh Power Bank",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300",
    price: 2490,
  },
  {
    id: 2,
    title: "Sony Wireless Headphone",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    price: 5990,
  },
  {
    id: 3,
    title: "Apple 20W Charger",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=300",
    price: 1590,
  },
  {
    id: 4,
    title: "JBL Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300",
    price: 4490,
  },
  {
    id: 5,
    title: "Gaming Earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300",
    price: 1490,
  },
];

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];

    return products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  const goToProduct = (title: string) => {
    setOpen(false);
    setQuery("");

    router.push(`/product/${slugify(title)}`);
  };

  return (
    <div
      ref={wrapperRef}
      className="
  relative

  flex
  flex-1
  items-center

  w-full
  min-w-0

  overflow-visible

  rounded-xl
  lg:rounded-2xl

  border
  border-zinc-200

  bg-white

  shadow-sm
  hover:shadow-md

  transition-all
  duration-200

  focus-within:border-yellow-500
  focus-within:ring-2
  focus-within:ring-yellow-200
"
    >
      {/* Search Input */}

      <input
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && query.trim()) {
            goToProduct(query);
          }
        }}
        placeholder="Search products..."
        className="
          h-10
          sm:h-10
          md:h-11
          lg:h-12

          flex-1
          min-w-0

          px-3
          sm:px-4
          md:px-5
          lg:px-6

          text-sm
          md:text-base

          outline-none
        "
      />

      {/* Search Button */}

      <button
        onClick={() => {
          if (!query.trim()) return;

          goToProduct(query);
        }}
        className="
          flex
          items-center
          justify-center

          h-10
          w-11

          sm:h-10
          sm:w-11

          md:h-11
          md:w-12

          lg:h-12
          lg:w-14

          rounded-r-xl
          lg:rounded-r-2xl

          bg-black
          text-white

          transition

          hover:bg-yellow-500
          hover:text-black
        "
      >
        <Search size={20} />
      </button>

      {/* Suggestions */}

      {open && filtered.length > 0 && (
        <div
          className="
            absolute

            top-full
            left-0
            right-0

            z-50

            mt-2

            overflow-hidden

            rounded-xl
            lg:rounded-2xl

            border

            bg-white

            shadow-2xl
          "
        >
          {filtered.map((product) => (
            <button
              key={product.id}
              onClick={() => goToProduct(product.title)}
              className="
                flex
                w-full
                items-center
                gap-3
                p-3

                sm:gap-4
                sm:p-4

                transition
                hover:bg-gray-50
              "
            >
              <Image
                src={product.image}
                alt={product.title}
                width={55}
                height={55}
                className="
                  h-12
                  w-12

                  sm:h-14
                  sm:w-14

                  rounded-lg
                  object-cover
                "
              />

              <div className="min-w-0 flex-1 text-left">

                <p className="truncate font-semibold text-sm sm:text-base">
                  {product.title}
                </p>

                <p className="mt-1 font-bold text-yellow-500">
                  ৳{product.price}
                </p>

              </div>

            </button>
          ))}
        </div>
      )}
    </div>
  );
}