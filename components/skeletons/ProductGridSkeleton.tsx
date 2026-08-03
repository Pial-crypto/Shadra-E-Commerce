import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGridSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">

      <div className="mb-10 h-10 w-64 rounded bg-zinc-200" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}

      </div>

    </div>
  );
}