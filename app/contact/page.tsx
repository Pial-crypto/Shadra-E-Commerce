import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-zinc-50">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-b from-yellow-50 via-white to-white border-b">

        <div className="max-w-7xl mx-auto px-4 py-24 text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">

            SHADRA GADGETS

          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-black">

            Contact Us

          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-600 leading-8">

            Need help with an order or have a question?
            We're always happy to assist you.

          </p>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="space-y-8">

            <div className="rounded-3xl bg-white border p-8 shadow-sm hover:shadow-xl transition">

              <div className="flex items-center gap-4">

                <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center">

                  <Phone className="text-yellow-600" />

                </div>

                <div>

                  <h3 className="text-xl font-bold">

                    Phone

                  </h3>

                  <Link
                    href="tel:+8801683700950"
                    className="text-zinc-600 hover:text-yellow-500"
                  >

                    +880 1683-700950

                  </Link>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white border p-8 shadow-sm hover:shadow-xl transition">

              <div className="flex items-center gap-4">

                <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center">

                  <Mail className="text-yellow-600" />

                </div>

                <div>

                  <h3 className="text-xl font-bold">

                    Email

                  </h3>

                  <Link
                    href="mailto:shahiemahmud@gmail.com"
                    className="text-zinc-600 hover:text-yellow-500"
                  >

                    shahiemahmud@gmail.com

                  </Link>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white border p-8 shadow-sm hover:shadow-xl transition">

              <div className="flex items-center gap-4">

                <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center">

                  <MapPin className="text-yellow-600" />

                </div>

                <div>

                  <h3 className="text-xl font-bold">

                    Address

                  </h3>

                  <p className="text-zinc-600">

                    Dhaka, Bangladesh

                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white border p-8 shadow-sm hover:shadow-xl transition">

              <div className="flex items-center gap-4">

                <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center">

                  <Clock className="text-yellow-600" />

                </div>

                <div>

                  <h3 className="text-xl font-bold">

                    Business Hours

                  </h3>

                  <p className="text-zinc-600">

                    Saturday - Thursday

                  </p>

                  <p className="text-zinc-600">

                    9:00 AM - 10:00 PM

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl bg-white border p-10 shadow-sm">

            <h2 className="text-3xl font-bold">

              Connect With Us

            </h2>

            <p className="mt-4 text-zinc-600 leading-8">

              Follow us on social media or contact us directly through
              WhatsApp for quick support.

            </p>

            <div className="mt-10 flex gap-5">

              <Link
                href="https://www.facebook.com/profile.php?id=61592716442009"
                target="_blank"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-yellow-500 hover:text-black transition"
              >

                <FaFacebookF size={22} />

              </Link>

              <Link
                href="https://instagram.com/shadragadgets"
                target="_blank"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-yellow-500 hover:text-black transition"
              >

                <FaInstagram size={22} />

              </Link>

              <Link
                href="https://youtube.com/@shadragadgets"
                target="_blank"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-yellow-500 hover:text-black transition"
              >

                <FaYoutube size={22} />

              </Link>

              <Link
                href="https://wa.me/8801683700950"
                target="_blank"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition"
              >

                <FaWhatsapp size={22} />

              </Link>

            </div>

            <Link
              href="https://wa.me/8801683700950"
              target="_blank"
              className="mt-12 inline-flex h-14 items-center justify-center rounded-2xl bg-black px-8 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
            >

              Chat on WhatsApp

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}