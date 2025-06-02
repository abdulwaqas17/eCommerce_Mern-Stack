import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/ProductCart";
import useCartAndWishlist from "../utils/useCartAndWishlist";

const Wishlist = () => {

  // hook reuseAble
  const { addToCart, toggleWishlist, carts, wishlist } = useCartAndWishlist();

  return (
    <div>
      <Navbar />

      <div className="bg-gradient-to-b from-[#e4f6ffe1] to-[#f6f7f71c]">
        <div className="pt-[45px] pb-[50px]">
          <h2 className="text-center text-4xl font-bold">Wishlist</h2>
          <Breadcrumb val="Wishlist" />
        </div>
      </div>

      <section className="px-[30px] py-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
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

export default Wishlist;
