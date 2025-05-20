import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CatHeader from "../components/productsUtils/catHeader";
import FilterBar from "../components/productsUtils/FilterBar";
import Card from "../components/ProductCart";
import useProducts from "../hooks/useProducts";
import useCartAndWishlist from "../hooks/useCartAndWishlist";

const Products = () => {
  //hook reuseAble
  const { products, loading, error } = useProducts();

  // useCartAndWishlist hook reuseAble
  const { addToCart, toggleWishlist, carts, wishlist } = useCartAndWishlist();

  return (
    <div>
      <Navbar />
      <CatHeader />
      <FilterBar />

      <section className="px-[30px] py-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card
              key={product._id}
              product={product}
              addToCart={addToCart}
              addToWishlist={toggleWishlist}
              isWishlisted={wishlist.some((item) => item._id === product._id)}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
