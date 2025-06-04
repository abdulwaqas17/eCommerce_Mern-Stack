import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../../utils/useProducts";
import useCartAndWishlist from "../../utils/useCartAndWishlist";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const ProductOverview = () => {
  const { products, loading, error } = useProducts();
  const { addToCartProduct } = useCartAndWishlist();
  

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const { id } = useParams();
  

  // use effect for get desire product
  useEffect(() => {
    if (products) {
      const found = products.find((item) => item._id === id);
      console.log(found);
      
      setImage(found?.image1)
      setProduct(found);
    }
  }, [products, id]);

  const handleQuantityChange = (value) => {
    setQuantity((prev) => Math.max(prev + value,1));
  };

  const changeImage= (img) => {
    setImage(img);
  }

  console.log(quantity);
  


 

  

  return (
    <>
      {product ? (
        <section className="py-8 px-4">
          <div className="container mx-auto">
            {/* PRODUCT TOP PART */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Product Media */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Main Image */}
                  <div className="relative aspect-square">
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="w-full overflow-x-auto scrollbar-hide py-2">
                    <div className="flex space-x-4 min-w-max">
                      <button
                        type="button"
                        onClick={() => changeImage(product.image1)}
                        className="flex-shrink-0 border border-gray-300 rounded-md p-1 hover:border-blue-500 transition"
                      >
                        <div className="w-[60px] h-[60px] overflow-hidden rounded-md">
                          <img
                            src={product.image1}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </button>
                      <button
                        type="button"
                          onClick={() => changeImage(product.image1)}
                        className="flex-shrink-0 border border-gray-300 rounded-md p-1 hover:border-blue-500 transition"
                      >
                        <div className="w-[60px] h-[60px] overflow-hidden rounded-md scale-110">
                          <img
                            src={product.image1}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </button>
                      <button
                        type="button"
                          onClick={() => changeImage(product.image2)}
                        className="flex-shrink-0 border border-gray-300 rounded-md p-1 hover:border-blue-500 transition"
                      >
                        <div className="w-[60px] h-[60px] overflow-hidden rounded-md">
                          <img
                            src={product.image2}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </button>
                      <button
                        type="button"
                          onClick={() => changeImage(product.image2)}
                        className="flex-shrink-0 border border-gray-300 rounded-md p-1 hover:border-blue-500 transition"
                      >
                        <div className="w-[60px] h-[60px] overflow-hidden rounded-md scale-110">
                          <img
                            src={product.image2}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Zoom Button */}
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.84199 13.684C8.36004 13.6837 9.83434 13.1755 11.0301 12.2403L14.7898 16L15.9991 14.7907L12.2395 11.031C13.1751 9.83508 13.6836 8.36043 13.684 6.84199C13.684 3.06949 10.6145 0 6.84199 0C3.06949 0 0 3.06949 0 6.84199C0 10.6145 3.06949 13.684 6.84199 13.684ZM6.84199 1.7105C9.67201 1.7105 11.9735 4.01197 11.9735 6.84199C11.9735 9.67201 9.67201 11.9735 6.84199 11.9735C4.01197 11.9735 1.7105 9.67201 1.7105 6.84199C1.7105 4.01197 4.01197 1.7105 6.84199 1.7105Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* Thumbnails (Mobile) */}
                {/* <div className="lg:hidden mt-4 overflow-x-auto">
              <div className="flex gap-2">
                {thumbnailImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`w-16 h-16 flex-shrink-0 border ${
                      currentSlide === index
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div> */}
              </div>

              {/* Product Info */}
              <div className="w-full lg:w-1/2">
                <div className="product__info">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {product.name}
                  </h1>

                  {/* Reviews */}
                  <div className="mb-4">
                    <div
                      className="jdgm-widget jdgm-preview-badge"
                      data-id="14648007098738"
                    >
                      <div
                        className="jdgm-prev-badge"
                        data-average-rating="0.00"
                        data-number-of-reviews="0"
                      >
                        <span
                          className="jdgm-prev-badge__stars"
                          data-score="0.00"
                        >
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className="jdgm-star jdgm--off"
                            ></span>
                          ))}
                        </span>
                        <span className="jdgm-prev-badge__text">0 review</span>
                      </div>
                    </div>
                  </div>

                  {/* SKU and Inventory */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">SKU: </span>
                      <span>DEMO0072</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        fill="none"
                      >
                        <path
                          d="M0 4.71429L1.6 3.14286L8 9.42857L6.4 11L0 4.71429Z"
                          fill="#15D11C"
                        ></path>
                        <path
                          d="M14.4 0L16 1.57143L6.4 11L4.8 9.42857L14.4 0Z"
                          fill="#15D11C"
                        ></path>
                      </svg>
                      <span>In Stock</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-[#e7456f]">
                      ${product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-6 text-gray-700">
                    <p>
                      Alias dolorem blanditiis quasi ullam corrupti assumenda
                      aut. Qui facere sapiente et voluptate id. Vel facere eos
                      esse ut fugit. Qui quae in facilis suscipit amet quia sed
                      quia.
                    </p>
                  </div>

                  {/* Quantity and Add to Cart */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">Quantity</span>
                        <div className="flex items-center border rounded">
                          <button
                            onClick={() => handleQuantityChange(-1)}
                            className="px-3 py-1 text-lg"
                          >
                            <svg
                              width="10"
                              height="2"
                              viewBox="0 0 10 2"
                              fill="currentColor"
                            >
                              <path d="M0 0h10v2H0z"></path>
                            </svg>
                          </button>
                          <input
                            type="text"
                            value={
                              product.quantity ? product.quantity : quantity
                            }
                            readOnly
                            className="w-12 text-center border-x py-1"
                          />
                          <button
                            onClick={() => handleQuantityChange(1)}
                            className="px-3 py-1 text-lg"
                          >
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6v4h2V6h4V4H6V0H4v4H0v2h4z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <button
                        className="bg-[#2ea5b6] font-bold text-white py-2 px-12 rounded-[25px] hover:bg-[#e7456f] transition-colors"
                        onClick={() => addToCartProduct(product,quantity)}
                      >
                        <span>Add to cart</span>
                      </button>

                      <button
                        className="bg-[#2ea5b6] font-bold text-white py-2 px-12 rounded-[25px] hover:bg-[#e7456f] transition-colors"
                        onClick={() => navigate("/carts")}
                      >
                        Buy it now
                      </button>
                    </div>
                  </div>

                  {/* Wishlist and Compare */}
                  <div className="flex gap-4 mb-6">
                    <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.26586 11.9075C7.55372 12.613 6.45077 12.613 5.73863 11.9075L1.49139 7.69955C-1.34994 4.85817 2.36033 -1.41946 7.00224 3.22245C11.636 -1.4113 15.3463 4.86643 12.5131 7.69955L8.26586 11.9075Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Add to wishlist</span>
                    </button>

                    <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0.5L11.5 3L9 5.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M0.5 6V4C0.5 3.73478 0.605357 3.48043 0.792893 3.29289C0.98043 3.10536 1.23478 3 1.5 3H11.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5 13.5L2.5 11L5 8.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M13.5 8V10C13.5 10.2652 13.3946 10.5196 13.2071 10.7071C13.0196 10.8946 12.7652 11 12.5 11H2.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Add to compare</span>
                    </button>
                  </div>

                  {/* Categories */}
                  <div className="mb-4 text-sm">
                    <span className="font-medium">Categories: </span>
                    <a
                      href="/collections/covid-essentials"
                      className="text-gray-600 hover:text-black"
                    >
                      Covid essentials,{" "}
                    </a>
                    <a
                      href="/collections/fitness-supplements"
                      className="text-gray-600 hover:text-black"
                    >
                      Fitness supplements,{" "}
                    </a>
                    <a
                      href="/collections/health-condition"
                      className="text-gray-600 hover:text-black"
                    >
                      Health condition,{" "}
                    </a>
                    <a
                      href="/collections/health-food-and-drinks"
                      className="text-gray-600 hover:text-black"
                    >
                      Health food and drinks,{" "}
                    </a>
                    <a
                      href="/collections/frontpage"
                      className="text-gray-600 hover:text-black"
                    >
                      Home page,{" "}
                    </a>
                    <a
                      href="/collections/infrared-thermometer"
                      className="text-gray-600 hover:text-black"
                    >
                      Infrared Thermometer,{" "}
                    </a>
                    <a
                      href="/collections/skin-care"
                      className="text-gray-600 hover:text-black"
                    >
                      Skin care
                    </a>
                  </div>

                  {/* Tags */}
                  <div className="mb-6 text-sm">
                    <span className="font-medium">Tags: </span>
                    <a
                      href="/collections/all/favorite"
                      className="text-gray-600 hover:text-black"
                    >
                      Favorite,{" "}
                    </a>
                    <a
                      href="/collections/all/sandwiches"
                      className="text-gray-600 hover:text-black"
                    >
                      Sandwiches
                    </a>
                  </div>

                  {/* Share Buttons */}
                  <div className="mb-6">
                    <div className="flex gap-4">
                     <span>
                      <FaFacebook  className="text-blue-600 text-[1.5rem]"/>
                     </span>
                     <span>
                      <AiFillTwitterCircle   className="text-sky-500 text-[1.5rem]"/>
                     </span>
                     <span>
                      <FaPinterest   className="text-red-600 text-[1.5rem]"/>
                     </span>
                     <span>
                      <FaLinkedin   className="text-blue-800 text-[1.5rem]"/>
                     </span>
                     
                    </div>
                  </div>

                  {/* Policies */}
                  <div className="mb-6 bg-gray-50 p-4 rounded">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="18"
                            viewBox="0 0 21 18"
                            fill="none"
                          >
                            <path
                              d="M8.4375 1.5V4.875H14.2734L13.0781 2.16797C12.8672 1.74609 12.5156 1.52344 12.0234 1.5H8.4375ZM8.4375 6H7.3125H1.125V13.875C1.125 14.2031 1.23047 14.4727 1.44141 14.6836C1.65234 14.8945 1.92188 15 2.25 15H9.66797C9.87891 15.3984 10.125 15.7734 10.4062 16.125H2.25C1.61719 16.1016 1.08984 15.8789 0.667969 15.457C0.246094 15.0352 0.0234375 14.5078 0 13.875V5.92969C0 5.60156 0.0703125 5.29688 0.210938 5.01562L1.65234 1.71094C2.07422 0.867188 2.76562 0.421875 3.72656 0.375H12.0234C12.9844 0.421875 13.6758 0.867188 14.0977 1.71094L15.5742 5.01562C15.6914 5.29688 15.75 5.60156 15.75 5.92969V6H15.1875H14.625H12.375H8.4375ZM7.3125 4.875V1.5H3.72656C3.23438 1.52344 2.88281 1.74609 2.67188 2.16797L1.47656 4.875H7.3125ZM15.1875 8.25C14.4844 8.25 13.8281 8.42578 13.2188 8.77734C12.6094 9.12891 12.1289 9.60938 11.7773 10.2188C11.4258 10.8281 11.25 11.4844 11.25 12.1875C11.25 12.8906 11.4258 13.5469 11.7773 14.1562C12.1289 14.7656 12.6094 15.2461 13.2188 15.5977C13.8281 15.9492 14.4844 16.125 15.1875 16.125C15.8906 16.125 16.5469 15.9492 17.1562 15.5977C17.7656 15.2461 18.2461 14.7656 18.5977 14.1562C18.9492 13.5469 19.125 12.8906 19.125 12.1875C19.125 11.4844 18.9492 10.8281 18.5977 10.2188C18.2461 9.60938 17.7656 9.12891 17.1562 8.77734C16.5469 8.42578 15.8906 8.25 15.1875 8.25ZM15.1875 17.25C14.2734 17.25 13.4297 17.0273 12.6562 16.582C11.8828 16.1367 11.2617 15.5156 10.793 14.7188C10.3477 13.9219 10.125 13.0781 10.125 12.1875C10.125 11.2969 10.3477 10.4531 10.793 9.65625C11.2617 8.85938 11.8828 8.23828 12.6562 7.79297C13.4297 7.34766 14.2734 7.125 15.1875 7.125C16.1016 7.125 16.9453 7.34766 17.7188 7.79297C18.4922 8.23828 19.1133 8.85938 19.582 9.65625C20.0273 10.4531 20.25 11.2969 20.25 12.1875C20.25 13.0781 20.0273 13.9219 19.582 14.7188C19.1133 15.5156 18.4922 16.1367 17.7188 16.582C16.9453 17.0273 16.1016 17.25 15.1875 17.25ZM17.543 10.6758C17.7773 10.9336 17.7773 11.1914 17.543 11.4492L15.0117 13.9805C14.7539 14.2148 14.4961 14.2148 14.2383 13.9805L12.832 12.5742C12.5977 12.3164 12.5977 12.0586 12.832 11.8008C13.0898 11.5664 13.3477 11.5664 13.6055 11.8008L14.625 12.7852L16.7695 10.6758C17.0273 10.4414 17.2852 10.4414 17.543 10.6758Z"
                              fill="#9FA4AA"
                            ></path>
                          </svg>
                        </div>
                        <div>2 years warranty</div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="19"
                            viewBox="0 0 23 19"
                            fill="none"
                          >
                            <path
                              d="M4.5 1.375C4.17188 1.375 3.90234 1.48047 3.69141 1.69141C3.48047 1.90234 3.375 2.17188 3.375 2.5V3.625H8.4375C8.78906 3.64844 8.97656 3.83594 9 4.1875C8.97656 4.53906 8.78906 4.72656 8.4375 4.75H0.5625C0.210938 4.72656 0.0234375 4.53906 0 4.1875C0.0234375 3.83594 0.210938 3.64844 0.5625 3.625H2.25V2.5C2.27344 1.86719 2.49609 1.33984 2.91797 0.917969C3.33984 0.496094 3.86719 0.273438 4.5 0.25H12.375C13.0078 0.273438 13.5352 0.496094 13.957 0.917969C14.3789 1.33984 14.6016 1.86719 14.625 2.5V3.625H16.9102C17.4258 3.625 17.8594 3.82422 18.2109 4.22266L20.9531 7.45703C21.2344 7.76172 21.375 8.125 21.375 8.54688V13.75H21.9375C22.2891 13.7734 22.4766 13.9609 22.5 14.3125C22.4766 14.6641 22.2891 14.8516 21.9375 14.875H20.25C20.2266 15.8359 19.8984 16.6328 19.2656 17.2656C18.6328 17.8984 17.8359 18.2266 16.875 18.25C15.9141 18.2266 15.1172 17.8984 14.4844 17.2656C13.8516 16.6328 13.5234 15.8359 13.5 14.875H9C8.97656 15.8359 8.64844 16.6328 8.01562 17.2656C7.38281 17.8984 6.58594 18.2266 5.625 18.25C4.66406 18.2266 3.86719 17.8984 3.23438 17.2656C2.60156 16.6328 2.27344 15.8359 2.25 14.875V13.75V10.375H3.375V12.3438C3.98438 11.8047 4.73438 11.5234 5.625 11.5C6.375 11.5234 7.03125 11.7344 7.59375 12.1328C8.15625 12.5547 8.56641 13.0938 8.82422 13.75H13.5V2.5C13.5 2.17188 13.3945 1.90234 13.1836 1.69141C12.9727 1.48047 12.7031 1.375 12.375 1.375H4.5ZM20.0742 8.125L17.332 4.96094C17.2383 4.82031 17.0977 4.75 16.9102 4.75H14.625V8.125H20.0742ZM14.625 9.25V12.3438C15.2344 11.8047 15.9844 11.5234 16.875 11.5C17.625 11.5234 18.2812 11.7344 18.8438 12.1328C19.4062 12.5547 19.8164 13.0938 20.0742 13.75H20.25V9.25H14.625ZM3.375 14.875C3.39844 15.7188 3.77344 16.3633 4.5 16.8086C5.25 17.2305 6 17.2305 6.75 16.8086C7.47656 16.3633 7.85156 15.7188 7.875 14.875C7.85156 14.0312 7.47656 13.3867 6.75 12.9414C6 12.5195 5.25 12.5195 4.5 12.9414C3.77344 13.3867 3.39844 14.0312 3.375 14.875ZM16.875 12.625C16.0312 12.6484 15.3867 13.0234 14.9414 13.75C14.5195 14.5 14.5195 15.25 14.9414 16C15.3867 16.7266 16.0312 17.1016 16.875 17.125C17.7188 17.1016 18.3633 16.7266 18.8086 16C19.2305 15.25 19.2305 14.5 18.8086 13.75C18.3633 13.0234 17.7188 12.6484 16.875 12.625ZM1.6875 5.875H9.5625C9.91406 5.89844 10.1016 6.08594 10.125 6.4375C10.1016 6.78906 9.91406 6.97656 9.5625 7H1.6875C1.33594 6.97656 1.14844 6.78906 1.125 6.4375C1.14844 6.08594 1.33594 5.89844 1.6875 5.875ZM0.5625 8.125H8.4375C8.78906 8.14844 8.97656 8.33594 9 8.6875C8.97656 9.03906 8.78906 9.22656 8.4375 9.25H0.5625C0.210938 9.22656 0.0234375 9.03906 0 8.6875C0.0234375 8.33594 0.210938 8.14844 0.5625 8.125Z"
                              fill="#9FA4AA"
                            ></path>
                          </svg>
                        </div>
                        <div>Delivery time: 1-2 business days</div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <path
                              d="M0.6875 6C0.335938 5.97656 0.148438 5.78906 0.125 5.4375V0.9375C0.148438 0.585938 0.335938 0.398438 0.6875 0.375C1.03906 0.398438 1.22656 0.585938 1.25 0.9375V4.20703C1.95312 3.03516 2.89062 2.10937 4.0625 1.42969C5.23438 0.75 6.54688 0.398438 8 0.375C9.47656 0.398438 10.8008 0.761719 11.9727 1.46484C13.168 2.14453 14.1055 3.08203 14.7852 4.27734C15.4883 5.44922 15.8516 6.77344 15.875 8.25C15.8516 9.72656 15.4883 11.0508 14.7852 12.2227C14.1055 13.418 13.168 14.3555 11.9727 15.0352C10.8008 15.7383 9.47656 16.1016 8 16.125C6.57031 16.1016 5.28125 15.7617 4.13281 15.1055C2.98438 14.4492 2.04688 13.5586 1.32031 12.4336C1.22656 12.2461 1.22656 12.0703 1.32031 11.9062C1.41406 11.7188 1.57812 11.625 1.8125 11.625C2.02344 11.625 2.19922 11.7188 2.33984 11.9062C2.94922 12.8438 3.74609 13.5938 4.73047 14.1562C5.71484 14.6953 6.80469 14.9766 8 15C9.92188 14.9531 11.5156 14.2969 12.7812 13.0312C14.0469 11.7656 14.7031 10.1719 14.75 8.25C14.7031 6.32812 14.0469 4.73438 12.7812 3.46875C11.5156 2.20312 9.92188 1.54687 8 1.5C6.73438 1.52344 5.59766 1.82812 4.58984 2.41406C3.55859 3.02344 2.75 3.84375 2.16406 4.875H5.1875C5.53906 4.89844 5.72656 5.08594 5.75 5.4375C5.72656 5.78906 5.53906 5.97656 5.1875 6H0.6875Z"
                              fill="#9FA4AA"
                            ></path>
                          </svg>
                        </div>
                        <div>Free 90 days return</div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="bg-gray-100 p-4 rounded">
                    <div className="font-medium mb-2">Payment Options</div>
                    <div>
                      <img
                        src="//ap-medilazar.myshopify.com/cdn/shop/files/payment.png?v=1734767823&width=274"
                        alt="Payment methods"
                        loading="lazy"
                        className="h-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center text-xl">Loading product..</p>
      )}
    </>
  );
};

export default ProductOverview;
