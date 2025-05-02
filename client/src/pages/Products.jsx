import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";
import CatHeader from "../components/productsUtils/catHeader";
import FilterBar from "../components/productsUtils/FilterBar";
import Card from "../components/ProductCart";
import { useCarts } from "../hooks/hooks";

const Products = () => {
  let [products, setProducts] = useState([]);
  // getting value from context
  let { carts, setCarts } = useCarts();

  useEffect(() => {
    console.log("carts []");

    const fetchData = async () => {
      try {
       
        let res = await fetch("http://localhost:3000/home/products");

        let data = await res.json();

        console.log(data);

        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("cart effect", carts);

    window.localStorage.setItem("userCarts", JSON.stringify(carts));
    // console.log('[carts]');
  }, [carts]);


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
          ? { ...item, quantity: item.quantity + 1 }  //Mutate nahi karo, naya object banao using { ...item }.
          : item

      );
      setCarts(updatedCarts);
    } else {
      // Add new product with quantity
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };

  // console.log('cart ',carts);

  return (
    <div>
      <Navbar />
      <CatHeader />
      <FilterBar />

      <section className="flex justify-between flex-wrap px-[30px] py-[60px] gap-4">
        {products.map((product) => (
          <Card key={product._id} product={product} func={addToCart} />
        ))}
      </section>
      <Footers />
    </div>
  );
};

export default Products;
