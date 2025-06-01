// const Slideshow = () => {
//     return (
//       <div className="relative w-full h-[550px] overflow-hidden bg-black">
//         {/* Background Image */}
//         <img
//           src="https://ap-medilazar.myshopify.com/cdn/shop/files/home3_slide.jpg?v=1735962010"
//           alt="Background"
//           className="w-full h-full object-cover absolute top-0 left-0 z-0"
//         />
  
//         {/* Foreground Image (Product Image) */}
//         <img
//           src="https://ap-medilazar.myshopify.com/cdn/shop/files/home3_slide-item.png?v=1735962009"
//           alt="Slide Item"
//           className="absolute right-10 top-1/4 z-10 w-[479px] max-w-[90%]"
//         />
  
//         {/* Text Content */}
//         <div className="relative z-20 flex items-center h-full px-4 md:px-16 text-white">
//           <div className="max-w-md">
//             <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
//               Your Cancer Care Companion
//             </h2>
//             <p className="text-base md:text-lg mb-6">
//               Experience trusted care with expert support at every step.
//             </p>
//             <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Slideshow;
  import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { 
  FaTemperatureLow, 
  FaPercentage, 
  FaTruck 
} from "react-icons/fa";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: "slide1",
      bgImage: "https://ap-medilazar.myshopify.com/cdn/shop/files/home3_slide.jpg?v=1735962010&width=3000",
      itemImage: "https://ap-medilazar.myshopify.com/cdn/shop/files/home3_slide-item.png?v=1735962009&width=479",
      heading: "Your Cancer Care Companion",
      description: (
        <div className="flex flex-col md:flex-row justify-between max-w-md mx-auto gap-6 md:gap-4">
          <div className="flex flex-col items-center text-white">
            <FaTemperatureLow className="text-3xl mb-2 text-teal-400" />
            <span className="text-center">Temperature <br />Controlled Meds</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <FaPercentage className="text-3xl mb-2 text-teal-400" />
            <span className="text-center">Up to <br />70% Off</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <FaTruck className="text-3xl mb-2 text-teal-400" />
            <span className="text-center">Free Doorstep <br />Delivery</span>
          </div>
        </div>
      ),
      buttonLink: "/collections",
      buttonText: "SHOP NOW",
      textPosition: "right",
      buttonStyle: "text-gray-900 bg-white border-white hover:bg-pink-500 hover:border-pink-500 hover:text-white"
    },
    {
      id: "slide2",
      bgImage: "https://ap-medilazar.myshopify.com/cdn/shop/files/home2_slide_bg.jpg?v=1735526051&width=3000",
      itemImage: "https://ap-medilazar.myshopify.com/cdn/shop/files/home2_slide_item.png?v=1735526052&width=679",
      subHeading: "PRODUCTS",
      heading: "Flat 25% Off Medicine order",
      description: "Original price <b>$29.99</b>",
      buttonLink: "",
      buttonText: "shop now",
      textPosition: "center",
      buttonStyle: "text-white bg-teal-500 border-teal-500 hover:bg-pink-500 hover:border-pink-500"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsVisible(true);
    }, 300);
  };

  const goToPrevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsVisible(true);
    }, 300);
  };

  const goToSlide = (index) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsVisible(true);
    }, 300);
  };

  return (
    <section className="w-full">
      <div className="relative">
        <div className="relative h-[550px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              id={slide.id}
              className={`absolute inset-0 transition-opacity duration-300 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: currentSlide === index ? 10 : 1 }}
            >
              <div className="absolute inset-0">
                <img
                  src={slide.bgImage}
                  srcSet={`${slide.bgImage}&width=400 400w, ${slide.bgImage}&width=500 500w, ${slide.bgImage}&width=600 600w, ${slide.bgImage}&width=700 700w, ${slide.bgImage}&width=800 800w, ${slide.bgImage}&width=900 900w, ${slide.bgImage}&width=1000 1000w, ${slide.bgImage}&width=1200 1200w, ${slide.bgImage}&width=3000 1400w`}
                  loading="eager"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 right-0 max-w-[50%]">
                <img
                  src={slide.itemImage}
                  srcSet={`${slide.itemImage}&width=352 352w, ${slide.itemImage}&width=479 479w`}
                  className="max-h-[405px]"
                  alt=""
                />
              </div>

              <div className="container mx-auto px-4 h-full relative z-10">
                <div className={`h-full flex items-center justify-${slide.textPosition}`}>
                  <div 
                    className={`max-w-md ${slide.textPosition === 'center' ? 'text-center mx-auto' : ''}`}
                    style={{
                      opacity: isVisible && currentSlide === index ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    {slide.subHeading && (
                      <h3 className="text-white text-xl md:text-2xl mb-2">
                        {slide.subHeading}
                      </h3>
                    )}

                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                      {slide.heading}
                    </h1>

                    <div 
                      className="text-white text-lg mb-8"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />

                    <div className="mt-6">
                      <Link 
                        to={slide.buttonLink} 
                        className={`inline-flex items-center px-8 py-3 border-2 rounded-md font-bold transition-colors ${slide.buttonStyle}`}
                      >
                        {slide.buttonText}
                        <FaChevronRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-10 h-1 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-20 flex justify-between px-4">
          <button
            className="bg-white/20 hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            className="bg-white/20 hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;