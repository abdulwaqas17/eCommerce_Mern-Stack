import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Practical Wooden Bottle",
    price: "$529.28",
    image1: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724",
    image2: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724"
  },
  {
    id: 2,
    name: "Practical Wooden Bottle",
    price: "$529.28",
    image1: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724",
    image2: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724"
  },
  {
    id: 3,
    name: "Practical Wooden Bottle",
    price: "$529.28",
    image1: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724",
    image2: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724"
  },
  {
    id: 4,
    name: "Practical Wooden Bottle",
    price: "$529.28",
    image1: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724",
    image2: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724"
  },
  {
    id: 5,
    name: "Practical Wooden Bottle",
    price: "$529.28",
    image1: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724",
    image2: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724"
  },
  {
    id: 6,
    name: "Practical Wooden Bottle",
    price: "$529.28",
    image1: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724",
    image2: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724"
  },
  {
    id: 7,
    name: "Practical Wooden Bottle",
    price: "$529.28",
    image1: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1734420724",
    image2: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-12-2.jpg?v=1734420724"
  },

];

const HealthProducts = () => {

  const carouselRef = useRef();


  const scroll = (direction) => {
    const { current } = carouselRef;
    if (!current) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  
  return (
    <div className="relative w-full px-4">
      {/* Arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
        onClick={() => scroll("left")}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
        onClick={() => scroll("right")}
      >
        <ChevronRight />
      </button>

      {/* Scrollable container */}
      <motion.div
        ref={carouselRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide py-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="min-w-[250px] bg-white border rounded-xl shadow hover:shadow-lg transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img src={product.image1} alt={product.name} className="w-full" />
              <img
                src={product.image2}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">Medicine</p>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-green-600 font-bold">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HealthProducts;
