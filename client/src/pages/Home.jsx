import React, { useMemo, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slideshow from "../components/homeUtils/Slider";
import FeaturedBrands from "../components/homeUtils/FeatureBrands";
import Categories from "../components/homeUtils/Categories";
import Services from "../components/homeUtils/Services";
import BannerCard from "../components/homeUtils/BannerCards";
import AboutSection from "../components/homeUtils/AboutSection";
import BlogCard from "../components/homeUtils/BlogCard";
import ClientReview from "../components/clientReviews";
import ForForNewsletter from "../components/FormForNewsLatter";
import Facilities from "../components/Facilities";
import ProductsSection from "../components/homeUtils/ProductsSection";
import Milestones from "../components/homeUtils/Milestones";
import useProducts from "../hooks/useProducts";
import { useCarts } from "../hooks/hooks";

const Home = () => {
  const { products, loading, error } = useProducts();
  const { carts, setCarts } = useCarts();

  // Set cart in local storage
  useEffect(() => {
    window.localStorage.setItem("userCarts", JSON.stringify(carts));
  }, [carts]);

  // Add to cart handler
  const addToCart = (product) => {
    if (!product?._id) return;

    const existing = carts.find((item) => item._id === product._id);
    if (existing) {
      const updated = carts.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCarts(updated);
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };

  // 🔍 Optimize Filtering with useMemo
  const healthCareProducts = useMemo(
    () => products.filter((p) => p.category === "health care"),
    [products]
  );

  const supplementsProducts = useMemo(
    () => products.filter((p) => p.category === "supplements"),
    [products]
  );

  const recentProducts = useMemo(
    () => products.filter((p) => p.type === "recent"),
    [products]
  );

  return (
    <div>
      <Navbar />
      <Slideshow />
      <Services />

      {/* 2 Banner Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 px-[30px]">
        <BannerCard topH="GET ALL YOUR" h1="Medication at" h2="One Place" img="/images/asset 12.jpeg" />
        <BannerCard topH="QUICK ACCESS TO A" h1="PLETHORA OF" h2="Medicines" img="/images/asset 13.jpeg" />
      </div>

      <Categories />

      {/* Health Care Products */}
      <section className="py-[40px] bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f7]">
        <h2 className="text-center font-bold md:text-4xl text-2xl md:py-[20px]">Health Products</h2>
        {loading ? (
          <p className="text-center py-4">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <ProductsSection products={healthCareProducts} addToCart={addToCart} />
        )}
        <FeaturedBrands />
      </section>

      {/* Supplements */}
      <section className="py-[40px] bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f7]">
        <h2 className="text-center font-bold md:text-4xl text-2xl md:py-[20px]">Daily Wellbeing</h2>
        <ProductsSection products={supplementsProducts} addToCart={addToCart} />

        <div className="flex flex-col lg:flex-row justify-center gap-6 px-[30px] py-[60px]">
          <BannerCard topH="FlAT 30% OFF" h1="Naturally" h2="Good" img="/images/asset 58.jpeg" />
          <BannerCard topH="FLAT 25% OFF" h1="Healthcare" h2="Products" img="/images/asset 59.jpeg" />
        </div>

        <AboutSection />
      </section>

      {/* Recent Products */}
      <section className="py-[40px] bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f7]">
        <h2 className="text-center font-bold md:text-4xl text-2xl md:py-[20px]">Recent Products</h2>
        <ProductsSection products={recentProducts} addToCart={addToCart} />
      </section>

      {/* Articles, Blogs, Milestones */}
      <section className="py-[40px] bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f7]">
        <section className="py-[50px]">
          <h2 className="text-center font-bold md:text-4xl text-2xl py-[30px]">Latest Articles & Blogs</h2>
          <div className="flex flex-wrap justify-center md:justify-between md:gap-0 gap-6 px-[30px]">
            <BlogCard img="images/asset 61.jpeg" />
            <BlogCard img="images/asset 62.jpeg" />
            <BlogCard img="images/asset 63.jpeg" />
            <BlogCard img="images/asset 64.jpeg" />
          </div>
        </section>
        <Milestones />
        <ClientReview />
        <ForForNewsletter />
      </section>

      <Facilities />
      <Footer />
    </div>
  );
};

export default Home;
