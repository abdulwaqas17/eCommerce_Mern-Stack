import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterBar from "../components/productsUtils/FilterBar";
import Card from "../components/ProductCart";
import Breadcrumb from "../components/Breadcrumb";
import useCartAndWishlist from "../utils/useCartAndWishlist";
import useProducts from "../utils/useProducts";
import { useTheme } from "../hooks/hooks";

const Products = () => {
  //hook reuseAble
  const { products, loading, error } = useProducts();
  const {dark,light} = useTheme();

  // useCartAndWishlist hook reuseAble
  const { addToCart, toggleWishlist, wishlist } = useCartAndWishlist();

  let nameValue = localStorage.getItem("category");

  return (
    <div>
      <Navbar />
      <div  className="p-[40px] bg-gradient-to-b from-[#e4f6ffe1] to-[#f6f7f71c]">
        <Breadcrumb val={nameValue ? nameValue : "Products"} />
      </div>

      <FilterBar />

      <section className="px-[30px] py-[60px]">
          {loading ? (
            <p className="text-center py-4 w-full">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-600 bg-[rgba(230,230,230,0.81)]">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {  products.map((product) => (
              <Card
                key={product._id}
                product={product}
                addToCart={addToCart}
                addToWishlist={toggleWishlist}
                isWishlisted={wishlist.some((item) => item._id === product._id)}
              />
            ))}
        </div>
          )}
      </section>
      <Footer />
    </div>
  );
};

export default Products;
