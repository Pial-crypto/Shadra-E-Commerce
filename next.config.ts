import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@supabase/supabase-js"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
            {
        protocol: "https",
        hostname: "albajxlowvejhbiszhhx.supabase.co",
        // pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;