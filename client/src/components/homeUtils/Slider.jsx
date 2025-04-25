const Slideshow = () => {
    return (
      <div className="relative w-full h-[550px] overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="https://ap-medilazar.myshopify.com/cdn/shop/files/home3_slide.jpg?v=1735962010"
          alt="Background"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
  
        {/* Foreground Image (Product Image) */}
        <img
          src="https://ap-medilazar.myshopify.com/cdn/shop/files/home3_slide-item.png?v=1735962009"
          alt="Slide Item"
          className="absolute right-10 top-1/4 z-10 w-[479px] max-w-[90%]"
        />
  
        {/* Text Content */}
        <div className="relative z-20 flex items-center h-full px-4 md:px-16 text-white">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Your Cancer Care Companion
            </h2>
            <p className="text-base md:text-lg mb-6">
              Experience trusted care with expert support at every step.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Slideshow;
  