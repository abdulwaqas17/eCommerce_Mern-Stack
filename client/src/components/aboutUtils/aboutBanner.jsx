import React from 'react';

const AboutBanner = () => {
  return (
    <section className="w-full bg-black/70 relative">
      <div className="w-full">
        <div className="relative w-full h-[600px]">
          <img
            src="https://ap-medilazar.myshopify.com/cdn/shop/files/aboutus1-01.jpg?v=1735200058"
            alt="Banner"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 md:px-8">
            <div className="text-center text-white max-w-3xl">
              <h3 className="text-lg md:text-xl lg:text-2xl mb-4">
                Choose from over <span className="text-primary">1400</span> professional
              </h3>

              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold uppercase mb-6 leading-snug">
                We make healthcare <br />
                Understandable, Accessible and Affordable.
              </h2>

              <a
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
