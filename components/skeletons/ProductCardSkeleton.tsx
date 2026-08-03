export default function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white p-4 animate-pulse">

      <div className="h-72 rounded-2xl bg-zinc-200" />

      <div className="mt-5 h-5 rounded bg-zinc-200" />

      <div className="mt-3 h-5 w-1/2 rounded bg-zinc-200" />

      <div className="mt-6 h-12 rounded-xl bg-zinc-200" />

    </div>
  );
}