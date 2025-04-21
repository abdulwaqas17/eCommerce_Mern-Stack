import React from "react";

const AboutSection = () => {
  return (
    <section
      className="py-12 md:py-16 bg-right-top bg-no-repeat"
      style={{
        backgroundImage: `url(images/asset_128.png)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="images/aboutHome 1.png"
            alt="Retail Pharmacy"
            className="rounded-lg object-cover w-full max-w-[500px]"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full lg:w-1/2 text-start">
          <p className="text-sm font-bold tracking-widest text-teal-500 mb-2">
            WELCOME TO MEDILAZAR
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Retail Pharmacy</h2>
          <p className="text-base text-gray-600 mb-6">
            Medilazar brings to you an online platform, which can be accessed for all your health needs.
            Get your allopathic, ayurvedic, homeopathic medicines, vitamins & supplements and other health-related products delivered at home.
          </p>

          {/* Services */}
          <div className="flex flex-col gap-6 mb-8">
            {/* Service Item 1 */}
            <div className="flex items-start gap-4">
              <img
                src="https://ap-medilazar.myshopify.com/cdn/shop/files/image_2.png?v=1733125896&width=89"
                alt="Insurance"
                className="w-[60px] h-[60px] object-contain"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-800">Insurance Accepted</h4>
                <p className="text-sm text-gray-600">
                  These contents are temporary and are for display purposes only.
                </p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="flex items-start gap-4">
              <img
                src="https://ap-medilazar.myshopify.com/cdn/shop/files/image_3.png?v=1733125895&width=89"
                alt="Pharmacist"
                className="w-[60px] h-[60px] object-contain"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-800">Talk to Our Pharmacist</h4>
                <p className="text-sm text-gray-600">
                  These contents are temporary and are for display purposes only.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-white bg-teal-500 hover:bg-pink-500 rounded-full text-sm font-semibold transition-all duration-300"
          >
            ABOUT US
            <svg
              className="ml-2"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5.55L7.438 9.3C7.25 9.488 7.024 9.582 6.758 9.582C6.508 9.582 6.29 9.496 6.102 9.324C5.915 9.152 5.821 8.934 5.821 8.668C5.821 8.402 5.907 8.176 6.079 7.988L8.141 5.832H1.696C1.43 5.832 1.204 5.746 1.016 5.574C0.844 5.387 0.758 5.16 0.758 4.895C0.758 4.629 0.844 4.41 1.016 4.238C1.204 4.051 1.43 3.957 1.696 3.957H8.141L6.079 1.801C5.907 1.613 5.821 1.387 5.821 1.121C5.821 0.855 5.915 0.637 6.102 0.465C6.29 0.293 6.508 0.207 6.758 0.207C7.024 0.207 7.25 0.301 7.438 0.488L11 4.238C11.25 4.488 11.375 4.758 11.375 5.043C11.375 5.328 11.25 5.598 11 5.848V5.55Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
