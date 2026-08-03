import Link from "next/link";
import { TriangleAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-zinc-50 px-4">

      <div className="max-w-xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100">

          <TriangleAlert
            size={48}
            className="text-yellow-500"
          />

        </div>

        <h1 className="mt-8 text-6xl font-black">

          404

        </h1>

        <h2 className="mt-4 text-3xl font-bold">

          Page Not Found

        </h2>

        <p className="mt-5 leading-8 text-gray-600">

          Sorry, the page you're looking for doesn't exist,
          has been moved, or the URL is incorrect.

        </p>

        <div className="mt-10 flex justify-center">

          <Link
            href="/"
            className="flex h-12 items-center gap-2 rounded-xl bg-black px-6 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
          >

            <ArrowLeft size={18} />

            Back to Home

          </Link>

        </div>

      </div>

    </main>
  );
}