import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import AboutProduct from "../components/viewProductUtils/AboutProduct";
import ProductOverview from "../components/viewProductUtils/ProductOverview";

const ViewProduct = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);


  //   const productImages = [
  //     "//ap-medilazar.myshopify.com/cdn/shop/files/product-21-1.jpg?v=1734420694&width=1000",
  //     "//ap-medilazar.myshopify.com/cdn/shop/files/product-21-2.jpg?v=1734420694&width=1000",
  //     "//ap-medilazar.myshopify.com/cdn/shop/files/product-21-3.jpg?v=1734420694&width=1000",
  //     "//ap-medilazar.myshopify.com/cdn/shop/files/product-21-4.jpg?v=1734420694&width=1000",
  //   ];

  //   const thumbnailImages = [
  //     "//ap-medilazar.myshopify.com/cdn/shop/files/product-21-1.jpg?v=1734420694&width=300",
  //     "//ap-medilazar.myshopify.com/cdn/shop/files/product-21-2.jpg?v=1734420694&width=300",
  //     "//ap-medilazar.myshopify.com/cdn/shop/files/product-21-3.jpg?v=1734420694&width=300",
  //     "//ap-medilazar.myshopify.com/cdn/shop/files/product-21-4.jpg?v=1734420694&width=300",
  //   ];

  //   const handlePrevSlide = () => {
  //     setCurrentSlide((prev) =>
  //       prev === 0 ? productImages.length - 1 : prev - 1
  //     );
  //   };

  //   const handleNextSlide = () => {
  //     setCurrentSlide((prev) =>
  //       prev === productImages.length - 1 ? 0 : prev + 1
  //     );
  //   };

  //   const handleThumbnailClick = (index) => {
  //     setCurrentSlide(index);
  //   };

  

  return (
    <div>
      <Navbar />
      <Breadcrumb val="Product name here" />

      <ProductOverview/>

      <section>
        <AboutProduct />
      </section>

      <Footer />
    </div>
  );
};

export default ViewProduct;

/*
 */
