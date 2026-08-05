// app/product/[slug]/page.tsx
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";

const images = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
  "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=1200",
  "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1200",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200",
];
import Image from "next/image";
//import { useState } from "react";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: Props) {
 // const [open, setOpen] = useState(false);
  const { slug } = await params;

  console.log(slug); // Later you'll fetch data using this slug

  return (
  <ProductDetails />  
  );
}