"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureBar from "@/components/FeatureBar";
import Categories from "@/components/Categories";
import ProductSection from "@/components/ProductSection";
import DealsBanner from "@/components/DealsBanner";
import FlashSale from "@/components/FlashSale";
import Brands from "@/components/Brands";
import TrendingProducts from "@/components/TrendingProducts";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getProducts } from "@/lib/api/products";
import { categoryCount } from "@/types/categoryCount";
export default function Home() {

  const [products,setProducts]=useState<Product[]>([])
const [categoryCount, setCategoryCount] =useState<categoryCount[]>([]);
useEffect(()=>{
getProducts().then((data)=>{
  console.log("Data", data)
  setProducts(data.products);
  setCategoryCount(data.categoryCount)
})
},[])

// console.log(products)
// console.log(categoryCount)
  return (
    <main className="bg-[#f7f7f7]">

      

      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= FEATURE BAR ================= */}
      <FeatureBar />

      {/* ================= CATEGORIES ================= */}
      <Categories categoryCount={categoryCount}/>

      {/* ================= PRODUCTS ================= */}
      <ProductSection products={products} />
      {/* <DealsBanner /> */}
      {/* <FlashSale /> */}
      {/* <Brands></Brands> */}
      {/* <TrendingProducts /> */}
      <Testimonials />
      <Newsletter />
      <Footer />

    </main>
  );
}