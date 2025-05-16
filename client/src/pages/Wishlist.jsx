import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { useCarts, useWishlist } from "../hooks/hooks";
import Card from "../components/ProductCart";

const Wishlist = () => {
  let { carts, setCarts } = useCarts();
  let { wishlist, setWishlist } = useWishlist();

  console.log(wishlist);
  

  // for set carts in local storage
  useEffect(() => {
    window.localStorage.setItem("userCarts", JSON.stringify(carts));
  }, [carts]);

  // for wishlist in local storage
  useEffect(() => {
    window.localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // add to cart
  let addToCart = (product) => {
    // to prevent form app carsh, id hona zarori h
    if (!product || !product._id) return;

    //Because, React detects state changes only when reference changes.
    let existingItem = carts.find((item) => item._id === product._id);

    if (existingItem) {
      // Update quantity immutably
      const updatedCarts = carts.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 } //Mutate nahi karo, naya object banao using { ...item }.
          : item
      );
      setCarts(updatedCarts);
    } else {
      // Add new product with quantity
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };

  // toggleWishlist function
  const toggleWishlist = (product) => {
    if (!product || !product._id) return;

    const isInWishlist = wishlist.find((item) => item._id === product._id);

    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter(
        (item) => item._id !== product._id
      );
      setWishlist(updatedWishlist);
    } else {
      // Add to wishlist
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div>
      <Navbar />

       <div className="bg-gradient-to-b from-[#eaf6ff91] to-[#f6f7f734]">
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
