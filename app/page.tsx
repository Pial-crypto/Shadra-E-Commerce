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
export default function Home() {
  return (
    <main className="bg-[#f7f7f7]">

      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= FEATURE BAR ================= */}
      <FeatureBar />

      {/* ================= CATEGORIES ================= */}
      <Categories />

      {/* ================= PRODUCTS ================= */}
      <ProductSection />
      <DealsBanner />
      <FlashSale />
      <Brands></Brands>
      <TrendingProducts />
      <Testimonials />
      <Newsletter />
      <Footer />

    </main>
  );
}