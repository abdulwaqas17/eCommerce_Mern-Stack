import React from "react";
import {
  FaBuilding,
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaWarehouse,
} from "react-icons/fa";
import { MdEmail, MdAccessTime, MdLocationOn } from "react-icons/md";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="focus-none" role="main" tabIndex="-1">
      {/* Map Section */}
      <section className="overflow-hidden">
        <div className="w-full">
          <div className="h-[500px] w-full">
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="mt-[120px] overflow-hidden md:mt-[60px]">
        <div className="container mx-auto px-4">
          <header className="mb-[60px] text-center">
            <h3 className="text-3xl font-bold">Our worldwide office</h3>
            <div className="mt-4 text-lg">
              Worldwide logistics group now has 38 offices in 20 countries.
              "We've always had
              <br />a strong worldwide network, but it's our client-driven
              intention.
            </div>
          </header>

          <div className="flex flex-wrap justify-center gap-[20px]">
            {/* Europe Office */}
            <div className="w-full p-4 text-center md:w-1/2 lg:w-[23%]">
              <div className="flex flex-col items-center">
                <div className="mb-[30px] text-[#2ea5b6]">
                  <FaBuilding className="mx-auto h-16 w-16" />
                </div>
                <div>
                  <h4 className="mb-5 text-xl font-semibold">Europe Office</h4>
                  <p className="text-gray-600">
                    751 Echo Park Ave., Los Angeles,
                    <br />
                    CA 90026
                    <br />
                    <span className="mt-1 block font-medium text-[#2ea5b6]">
                      (213) 250-3578
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Asia Office */}
            <div className="w-full p-4 text-center md:w-1/2 lg:w-[23%]">
              <div className="flex flex-col items-center">
                <div className="mb-[30px] text-[#2ea5b6]">
                  <FaGlobeAmericas className="mx-auto h-16 w-16" />
                </div>
                <div>
                  <h4 className="mb-5 text-xl font-semibold">Asia Office</h4>
                  <p className="text-gray-600">
                    1116 Wilshire Blvd, Santa Monica,
                    <br />
                    Los Angeles, CA 90401
                    <br />
                    <span className="mt-1 block font-medium text-[#2ea5b6]">
                      (310) 394-1406
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* West Hollywood */}
            <div className="w-full p-4 text-center md:w-1/2 lg:w-[23%]">
              <div className="flex flex-col items-center">
                <div className="mb-[30px] text-[#2ea5b6]">
                  <FaMapMarkerAlt className="mx-auto h-16 w-16" />
                </div>
                <div>
                  <h4 className="mb-5 text-xl font-semibold">West Hollywood</h4>
                  <p className="text-gray-600">
                    6250 Hollywood Blvd, Hollywood,
                    <br />
                    Los Angeles, CA90028
                    <br />
                    <span className="mt-1 block font-medium text-[#2ea5b6]">
                      (323) 728-1300
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Silver Lake */}
            <div className="w-full p-4 text-center md:w-1/2 lg:w-[23%]">
              <div className="flex flex-col items-center">
                <div className="mb-[30px] text-[#2ea5b6]">
                  <FaWarehouse className="mx-auto h-16 w-16" />
                </div>
                <div>
                  <h4 className="mb-5 text-xl font-semibold">Silver Lake</h4>
                  <p className="text-gray-600">
                    2246 Silver Lake Blvd Los Angeles,
                    <br />
                    CA 90026
                    <br />
                    <span className="mt-1 block font-medium text-[#2ea5b6]">
                      (354) 569-1536
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="overflow-hidden py-[100px] md:py-[60px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Contact Content */}
            <div className="lg:w-1/2">
              <h2 className="mb-[30px] text-3xl font-bold">
                Get in touch and we'll help your business
              </h2>
              <p className="mb-[40px] text-lg">
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am
                aliqu am, velit rutrum dictum lobortis, turpis justo auc tor
                quam, a auctor lorem odio in nunc.
              </p>

              <div className="space-y-6">
                {/* Contact Info */}
                <div className="flex items-start gap-4">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2ea5b6] text-white">
                    <MdEmail className="h-6 w-6" />
                  </div>
                  <div>
                    <h6 className="mb-[10px] text-lg font-semibold uppercase">
                      Contact us
                    </h6>
                    <span>
                      Call us:
                      <span className="text-[#2ea5b6]"> +(406) 555-0120</span>
                      <br />
                      Email: support@example.com
                    </span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2ea5b6] text-white">
                    <MdAccessTime className="h-6 w-6" />
                  </div>
                  <div>
                    <h6 className="mb-[10px] text-lg font-semibold uppercase">
                      Opening hours
                    </h6>
                    <span>
                      Mon - Sat: 7.00 am - 8.00 pm
                      <br />
                      Sunday: 8.00 am - 6.00 pm
                    </span>
                  </div>
                </div>

                {/* Our Office */}
                <div className="flex items-start gap-4">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2ea5b6] text-white">
                    <MdLocationOn className="h-6 w-6" />
                  </div>
                  <div>
                    <h6 className="mb-[10px] text-lg font-semibold uppercase">
                      Our Office
                    </h6>
                    <span>
                      2972 Westheimer Rd. Santa Ana,
                      <br />
                      Illinois, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="mb-4 text-2xl font-bold">Need Help?</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am
                aliqu am, velit rutrum dictum lobortis,
              </p>

              <form className="space-y-4">
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ea5b6]"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ea5b6]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ea5b6]"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Let us know what you need."
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ea5b6]"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="rounded border border-gray-300 bg-white px-6 py-2 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2ea5b6]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        id="back-to-up"
        className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#2ea5b6] text-white transition hover:bg-[#1e8a9a]"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          className="icon icon-arrow-up h-5 w-5"
          viewBox="0 0 32 32"
        >
          <path
            fill="#fff"
            d="M26.984 23.5l1.516-1.617L16 8.5 3.5 21.883 5.008 23.5 16 11.742z"
          ></path>
        </svg>
      </button>
    </main>
  );
};

export default ContactSection;
