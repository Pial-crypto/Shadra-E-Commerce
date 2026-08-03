import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shadra Gadgets",
    short_name: "Shadra",
    description:
      "Original gadgets with fast delivery all over Bangladesh.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#facc15",

    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },

      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}