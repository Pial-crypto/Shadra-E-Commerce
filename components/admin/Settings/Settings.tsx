"use client";

export default function Settings() {
  return (
    <section>

      {/* ========================================= */}

      {/* Header */}

      {/* ========================================= */}


      <div className="space-y-8">

        {/* ========================================= */}

        {/* Store Information */}

        {/* ========================================= */}

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold">

            Store Information

          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-medium">

                Store Name

              </label>

              <input
                defaultValue="Shadra"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">

                Support Phone

              </label>

              <input
                defaultValue="01700000000"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">

                WhatsApp

              </label>

              <input
                defaultValue="01700000000"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">

                Email

              </label>

              <input
                defaultValue="support@shadra.com"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
              />

            </div>

          </div>

        </div>

        {/* ========================================= */}

        {/* Shipping */}

        {/* ========================================= */}

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold">

            Shipping

          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-medium">

                Inside Dhaka

              </label>

              <input
                defaultValue="80"
                type="number"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">

                Outside Dhaka

              </label>

              <input
                defaultValue="120"
                type="number"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-yellow-500"
              />

            </div>

          </div>

        </div>

        {/* ========================================= */}

        {/* Social */}

        {/* ========================================= */}

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold">

            Social Links

          </h2>

          <div className="space-y-5">

            <input
              placeholder="Facebook URL"
              className="w-full rounded-xl border px-4 py-3"
            />

            <input
              placeholder="Instagram URL"
              className="w-full rounded-xl border px-4 py-3"
            />

            <input
              placeholder="YouTube URL"
              className="w-full rounded-xl border px-4 py-3"
            />

          </div>

        </div>

        {/* ========================================= */}

        {/* Policies */}

        {/* ========================================= */}

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold">

            Website Policies

          </h2>

          <div className="space-y-6">

            <div>

              <label className="mb-2 block font-medium">

                Terms & Conditions

              </label>

              <textarea
                rows={6}
                className="w-full rounded-xl border px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">

                Refund Policy

              </label>

              <textarea
                rows={6}
                className="w-full rounded-xl border px-4 py-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">

                Shipping Policy

              </label>

              <textarea
                rows={6}
                className="w-full rounded-xl border px-4 py-3"
              />

            </div>

          </div>

        </div>

        {/* ========================================= */}

        {/* Save */}

        {/* ========================================= */}

        <div className="flex justify-end">

          <button
            className="
              rounded-xl
              bg-yellow-500
              px-8
              py-4
              font-semibold
              transition
              hover:bg-yellow-600
            "
          >

            Save Settings

          </button>

        </div>

      </div>

    </section>
  );
}