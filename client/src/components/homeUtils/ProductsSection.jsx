import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../ProductCart";

const ProductsSection = ({ products, addToCart }) => {
  return (
    <section className="bg-[#f6f7f7] py-12 md:py-16 lg:py-20 px-0 overflow-hidden w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".products-next-button",
              prevEl: ".products-prev-button",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            loop={true}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product._id} className="pb-2">
                <Card product={product} func={addToCart} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between mt-4">
            <button className="products-prev-button swiper-button-prev bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#1D2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="products-next-button swiper-button-next bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1D2A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;