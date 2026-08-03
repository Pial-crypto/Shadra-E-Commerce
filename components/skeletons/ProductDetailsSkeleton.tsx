export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">

      <div className="grid gap-14 lg:grid-cols-2">

        <div className="h-[520px] rounded-3xl bg-zinc-200" />

        <div>

          <div className="h-10 rounded bg-zinc-200" />

          <div className="mt-5 h-6 w-40 rounded bg-zinc-200" />

          <div className="mt-8 h-24 rounded bg-zinc-200" />

          <div className="mt-8 h-12 rounded-xl bg-zinc-200" />

          <div className="mt-4 h-12 rounded-xl bg-zinc-200" />

        </div>

      </div>

    </div>
  );
}