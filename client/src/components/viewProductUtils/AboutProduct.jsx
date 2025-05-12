import React, { useState } from "react";

const AboutProduct = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [openTrust, setOpenTrust] = useState(null);

  const tabs = [
    { id: "description", title: "Description" },
    { id: "additional-info", title: "Additional information" },
    { id: "reviews", title: "Reviews" },
  ];

  const trustItems = [
    {
      id: "shipping",
      title: "Shipping & Returns",
      icon: (
        <svg
          fill="none"
          width="29"
          height="24"
          viewBox="0 0 29 24"
          className="w-6 h-5"
        >
          <path
            d="M4 3H20V8M20 17H11.68C11.68 17 11 16 10 16M20 17V8M20 17H22.32M20 8H26.5L28 12.5V17H25.68C25.68 17 25 16 24 16M24 16C25 16 26 17 26 18C26 19 25 20 24 20C23 20 22 19 22 18C22 17.6527 22.1206 17.3054 22.32 17M24 16C23.3473 16 22.6946 16.426 22.32 17M10 16C11 16 12 17 12 18C12 19 11 20 10 20C9 20 8 19 8 18C8 17.6527 8.12061 17.3054 8.31996 17M10 16C9.3473 16 8.69459 16.426 8.31996 17M8.31996 17H4M10 12H3M10 8H1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      content: (
        <>
          <p>
            <strong>
              Shipping
              <br />
            </strong>
            We deliver your parcel within 2–3 working days. As soon as your
            package has left our warehouse, you will receive a confirmation by
            email. This confirmation contains a tracking number that you can use
            to find out where your package is.
          </p>
          <p>
            <strong>
              Returns
              <br />
            </strong>
            We offer free returns within 30 days. All you have to do is fill out
            the return slip that you received in your package and stick the
            prepaid label on the package.Please note that it can take 2 weeks
            for us to process your return. We will do our best to complete this
            process as soon as possible.
          </p>
        </>
      ),
    },
    {
      id: "warranty",
      title: "Warranty",
      icon: (
        <svg
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            d="M5.25463 14C4.15672 12.6304 3.5 10.8919 3.5 9C3.5 4.58172 7.08172 1 11.5 1C15.9183 1 19.5 4.58172 19.5 9C19.5 10.8919 18.8433 12.6304 17.7454 14M5.25463 14L1.5 20L4.5 19L5.5 22L8.5 16.4185M5.25463 14C6.15126 15.1185 7.13226 15.9095 8.5 16.4185M8.5 16.4185C9.36872 16.7418 10.5187 17 11.5 17C12.5609 17 13.5736 16.7935 14.5 16.4185M17.7454 14L21.5 20L18.5 19L17.5 22L14.5 16.4185M17.7454 14C16.8949 15.0609 15.7797 15.9005 14.5 16.4185"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8 9.72727L10.1473 12L14.5 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      content: (
        <>
          <p>
            We provide a 2-year limited warranty, from the date of purchase for
            all our products.
          </p>
          <p>
            If you believe you have received a defective product, or are
            experiencing any problems with your product, please{" "}
            <a href="#" className="text-blue-600 hover:underline">
              contact us
            </a>
            .
          </p>
          <p>
            This warranty strictly does not cover damages that arose from
            negligence, misuse, wear and tear, or not in accordance with product
            instructions (dropping the product, etc.).
          </p>
        </>
      ),
    },
    {
      id: "payment",
      title: "Secure Payment",
      icon: (
        <svg
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            d="M4 18H1V6M4 18V16H6M4 18V22H11V18M6 16C6 15.6667 6 15.3 6 14.5C6 13.5 6.73438 13 7.5 13C8.26562 13 9 13.5 9 14.5C9 15.3 9 15.6667 9 16M6 16H9M9 16H11V18M11 18H23V6M1 6V2H23V6M1 6H23M9 10H5M19 10V14H13V10H19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      content: (
        <>
          <p>
            Your payment information is processed securely. We do not store
            credit card details nor have access to your credit card information.
          </p>
          <p>
            We accept payments with :<br />
            Visa, MasterCard, American Express, Paypal, Diners Club, Discover
            and more.
          </p>
        </>
      ),
    },
  ];

  const handleTrustClick = (id) => {
    setOpenTrust(openTrust === id ? null : id);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="wp-product-content">
        <div id="product-content" className="product-content">
          {/* Tabs Navigation */}
          <div className="product-tabs">
            <div className="relative">
              {/* Mobile tabs with arrows */}
              <div className="flex md:hidden overflow-x-auto hide-scrollbar">
                <div className="flex flex-nowrap">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                        activeTab === tab.id
                          ? "text-black border-b-2 border-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop tabs */}
              <div className="hidden md:flex justify-center border-b border-gray-200">
                <nav className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={`px-1 py-4 text-sm font-medium border-b-2 ${
                        activeTab === tab.id
                          ? "border-black text-black"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Active tab indicator */}
              <span
                className="hidden md:block absolute bottom-0 left-0 h-0.5  transition-all duration-300"
                style={{
                  width: `${100 / tabs.length}%`,
                  transform: `translateX(${
                    tabs.findIndex((tab) => tab.id === activeTab) * 100
                  }%)`,
                }}
              />
            </div>

            {/* Tabs Content */}
            <div className="product-tabs__content mt-6">
              {/* Description Tab */}
              <div
                className={`product-tabs__tab-item-wrapper ${
                  activeTab === "description" ? "block" : "hidden"
                }`}
              >
                <button
                  className="md:hidden flex items-center justify-between w-full py-3 text-left font-medium"
                  onClick={() =>
                    setActiveTab(
                      activeTab === "description" ? null : "description"
                    )
                  }
                >
                  <span>Description</span>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    className={`transform ${
                      activeTab === "description" ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill="none"
                      d="M1 1l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </button>

                <div
                  className={`${
                    activeTab === "description" ? "block" : "hidden"
                  } md:block`}
                >
                  <div className="product-tabs__tab-item-content prose max-w-none">
                    <p>
                      Alias dolorem blanditiis quasi ullam corrupti assumenda
                      aut. Qui facere sapiente et voluptate id. Vel facere eos
                      esse ut fugit. Qui quae in facilis suscipit amet quia sed
                      quia.
                    </p>
                  </div>

                  {/* Trust Items - Mobile */}
                  <div className="md:hidden mt-6 space-y-4">
                    {trustItems.map((item) => (
                      <button
                        key={item.id}
                        className="flex items-center text-gray-600 hover:text-black w-full text-left"
                        onClick={() => handleTrustClick(item.id)}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Info Tab */}
              <div
                className={`product-tabs__tab-item-wrapper ${
                  activeTab === "additional-info" ? "block" : "hidden"
                }`}
              >
                <button
                  className="md:hidden flex items-center justify-between w-full py-3 text-left font-medium"
                  onClick={() =>
                    setActiveTab(
                      activeTab === "additional-info" ? null : "additional-info"
                    )
                  }
                >
                  <span>Additional information</span>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    className={`transform ${
                      activeTab === "additional-info" ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill="none"
                      d="M1 1l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </button>

                <div
                  className={`${
                    activeTab === "additional-info" ? "block" : "hidden"
                  } md:block`}
                >
                  <p>
                    By changing our most important processes and <br />
                    products, we have already made a big leap forward. This
                    ranges from the <br />
                    increased use of more sustainable fibers to the use of more{" "}
                    <br />
                    environmentally friendly printing processes to the
                    development of <br />
                    efficient waste management in our value chain.
                  </p>
                  <p>
                    <br />
                    <a href="#" className="text-blue-600 hover:underline">
                      Learn more about sustainability
                    </a>
                    <br />
                  </p>
                </div>
              </div>

              {/* Reviews Tab */}
              <div
                className={`product-tabs__tab-item-wrapper ${
                  activeTab === "reviews" ? "block" : "hidden"
                }`}
              >
                <button
                  className="md:hidden flex items-center justify-between w-full py-3 text-left font-medium"
                  onClick={() =>
                    setActiveTab(activeTab === "reviews" ? null : "reviews")
                  }
                >
                  <span>Reviews</span>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    className={`transform ${
                      activeTab === "reviews" ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill="none"
                      d="M1 1l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </button>

                <div
                  className={`${
                    activeTab === "reviews" ? "block" : "hidden"
                  } md:block`}
                >
                  <div className="spr-reviews">
                    <div className="jdgm-widget jdgm-review-widget">
                      <div className="jdgm-rev-widg">
                        <div className="jdgm-rev-widg__header">
                          <h2 className="jdgm-rev-widg__title text-lg font-bold mb-4">
                            Customer Reviews
                          </h2>
                          <div className="flex items-center mb-4">
                            <div className="jdgm-rev-widg__summary">
                              <div className="flex items-center">
                                <div className="flex mr-2">
                                  {[...Array(5)].map((_, i) => (
                                    <span
                                      key={i}
                                      className="jdgm-star jdgm--off text-gray-300"
                                    ></span>
                                  ))}
                                </div>
                                <div className="jdgm-rev-widg__summary-text text-gray-600">
                                  Be the first to write a review
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="jdgm-write-rev-link text-blue-600 hover:underline"
                        >
                          Write a review
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Items - Desktop */}
          <div className="hidden md:flex justify-center mt-12 space-x-8">
            {trustItems.map((item) => (
              <button
                key={item.id}
                className="flex flex-col items-center text-gray-600 hover:text-black group"
                onClick={() => handleTrustClick(item.id)}
              >
                <span className="mb-2 group-hover:text-black">{item.icon}</span>
                <span className="text-sm">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Item Modals */}
      {trustItems.map((item) => (
        <div
          key={item.id}
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 ${
            openTrust === item.id ? "block" : "hidden"
          }`}
          onClick={() => setOpenTrust(null)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold flex items-center">
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </h3>
              <button
                className="text-gray-500 hover:text-black"
                onClick={() => setOpenTrust(null)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path
                    d="M13 13L1 1M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="prose">{item.content}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutProduct;
