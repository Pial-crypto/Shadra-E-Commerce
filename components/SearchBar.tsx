"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
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

    return () =>
      window.removeEventListener("click", handleClick);
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
      className="relative flex flex-1 rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-200 focus-within:border-yellow-500 focus-within:ring-2 focus-within:ring-yellow-200"

    //   className="relative flex flex-1 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-200 focus-within:border-yellow-500 focus-within:ring-2 focus-within:ring-yellow-200"
    >
      {/* Category */}

      {/* <button className="border border-r-0 rounded-l-xl px-5 bg-gray-50 flex items-center gap-2">

        All Categories

        <ChevronDown size={16} />

      </button> */}

      {/* Search */}

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
        className="border-y flex-1 px-5 outline-none"
      />

      {/* Search Button */}

      <button
        onClick={() => {
          if (!query.trim()) return;

          goToProduct(query);
        }}
        className="bg-black text-white rounded-r-xl px-6"
      >
        <Search size={20} />
      </button>

      {/* Suggestions */}

      {open && filtered.length > 0 && (

        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border shadow-2xl overflow-hidden z-50">

          {filtered.map((product) => (

            <button
              key={product.id}
              onClick={() =>
                goToProduct(product.title)
              }
              className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition"
            >

              <Image
                src={product.image}
                alt={product.title}
                width={55}
                height={55}
                className="rounded-lg object-cover"
              />

              <div className="text-left flex-1">

                <p className="font-semibold">

                  {product.title}

                </p>

                <p className="text-yellow-500 font-bold">

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