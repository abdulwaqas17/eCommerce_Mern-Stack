import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardsBar = ({heading,products}) => {

  console.log(products);
  

  const carouselRef = useRef();


  const scroll = (direction) => {
    const { current } = carouselRef;
    if (!current) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  
  return (
    <div className="relative w-full px-4">
      <h2 className="text-center font-bold md:text-4xl text-2xl md:py-[20px]">{heading}</h2>
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
            key={product._id}
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
            <div className="p-4 space-y-2">
        <p className="text-sm text-indigo-600 font-medium">{product.useFor}</p>
        <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-700 transition">
        {product.name}
        </h3>
       

        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
          <span>★★★★★</span>
          <span className="text-gray-500">(0 reviews)</span>
        </div>

        <div className="text-xl font-bold text-gray-800">${product.price}</div>

        <button className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardsBar;

/* 

*/
