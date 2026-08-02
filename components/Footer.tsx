"use client";

/* ============================================================
                        IMPORTS
============================================================ */

import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

/* ============================================================
                        COMPONENT
============================================================ */

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">

      {/* ======================================================
                    MAIN FOOTER
      ======================================================= */}

      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">

          {/* ==================================================
                        COMPANY
          =================================================== */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black text-yellow-500">
              SHADRA
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Shadra Gadgets is your trusted destination for
              original gadgets, mobile accessories, smart
              devices, chargers, power banks and lifestyle
              electronics with fast delivery across Bangladesh.
            </p>

            {/* Contact */}

            <div className="space-y-4 mt-10">

              <div className="flex gap-3">
                <MapPin className="text-yellow-500" />
                <span className="text-gray-400">
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="text-yellow-500" />
                <span className="text-gray-400">
                  +880 1XXXXXXXXX
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-500" />
                <span className="text-gray-400">
                  info@shadra.com
                </span>
              </div>

              <div className="flex gap-3">
                <Clock className="text-yellow-500" />
                <span className="text-gray-400">
                  Sat - Thu : 9AM - 10PM
                </span>
              </div>

            </div>

          </div>

          {/* ==================================================
                        SHOP
          =================================================== */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Shop
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><Link href="#">Power Banks</Link></li>
              <li><Link href="#">Chargers</Link></li>
              <li><Link href="#">Headphones</Link></li>
              <li><Link href="#">Earbuds</Link></li>
              <li><Link href="#">Smart Watches</Link></li>
              <li><Link href="#">Accessories</Link></li>

            </ul>

          </div>

          {/* ==================================================
                        CUSTOMER
          =================================================== */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Customer
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><Link href="#">My Account</Link></li>
              <li><Link href="#">Track Order</Link></li>
              <li><Link href="#">Wishlist</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Support</Link></li>

            </ul>

          </div>

          {/* ==================================================
                        INFORMATION
          =================================================== */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Information
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Refund Policy</Link></li>
              <li><Link href="#">Shipping Policy</Link></li>

            </ul>

          </div>

        </div>

        {/* ======================================================
                    PAYMENT + SOCIAL
        ======================================================= */}

        <div className="border-t border-zinc-800 mt-16 pt-10 flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Payment */}

          <div>

            <h4 className="font-semibold mb-4">
              Secure Payments
            </h4>

            <div className="flex flex-wrap gap-3">

              {[
                "Visa",
                "MasterCard",
                "bKash",
                "Nagad",
                "Rocket",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-white text-black px-5 py-3 rounded-xl text-sm font-semibold"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">

              {[
                FaFacebookF,
                FaInstagram,
                FaYoutube,
              ].map((Icon, index) => (

                <button
                  key={index}
                  className="h-12 w-12 rounded-full bg-zinc-800 hover:bg-yellow-500 hover:text-black transition flex items-center justify-center"
                >
                  <Icon size={20} />
                </button>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ======================================================
                    COPYRIGHT
      ======================================================= */}

      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © 2026 Shadra Gadgets. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link href="#">
              Privacy
            </Link>

            <Link href="#">
              Terms
            </Link>

            <Link href="#">
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}