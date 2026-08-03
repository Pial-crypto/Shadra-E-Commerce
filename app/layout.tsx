import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";







const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://shadragadgets.com"),

  title: {
    default: "Shadra Gadgets",
    template: "%s | Shadra Gadgets",
  },

  description:
    "Buy original gadgets, mobile accessories, chargers, power banks, headphones, earbuds and smart devices with fast delivery across Bangladesh.",

  keywords: [
    "Shadra Gadgets",
    "Bangladesh Gadgets",
    "Power Bank",
    "Headphones",
    "Earbuds",
    "Chargers",
    "Mobile Accessories",
  ],

  authors: [
    {
      name: "Shadra Gadgets",
    },
  ],

  creator: "Shadra Gadgets",

  openGraph: {
    title: "Shadra Gadgets",
    description:
      "Original gadgets with fast delivery all over Bangladesh.",
    url: "https://shadragadgets.com",
    siteName: "Shadra Gadgets",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
