"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav className="mb-8">

      <ol className="flex flex-wrap items-center gap-2 text-sm">

        {items.map((item, index) => {

          const last = index === items.length - 1;

          return (

            <li
              key={item.label}
              className="flex items-center gap-2"
            >

              {last ? (

                <span className="font-semibold text-black">

                  {item.label}

                </span>

              ) : (

                <Link
                  href={item.href || "#"}
                  className="text-gray-500 hover:text-yellow-500 transition"
                >

                  {item.label}

                </Link>

              )}

              {!last && (

                <ChevronRight
                  size={16}
                  className="text-gray-400"
                />

              )}

            </li>

          );

        })}

      </ol>

    </nav>
  );
}