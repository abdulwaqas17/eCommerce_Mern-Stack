import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../ProductCart";
import useCartAndWishlist from "../../hooks/useCartAndWishlist";

const ProductsSection = ({ products}) => {
  const { addToCart, toggleWishlist, carts, wishlist } = useCartAndWishlist();
  return (
    <section className="py-12 md:py-16 lg:py-20 px-0 overflow-hidden w-full">
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
                <Card
                  key={product._id}
                  product={product}
                  addToCart={addToCart}
                  addToWishlist={toggleWishlist}
                  isWishlisted={wishlist.some(
                    (item) => item._id === product._id
                  )}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between">
            <button className="products-prev-button swiper-button-prev bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"></button>
            <button className="products-next-button swiper-button-next bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
