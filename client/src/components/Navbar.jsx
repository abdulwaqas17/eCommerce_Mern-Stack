import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useCarts, useUser, useWishlist } from "../hooks/hooks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  let { carts, setCarts } = useCarts();
  let { wishlist, setWishlist } = useWishlist();
  let { user } = useUser();

  console.log(user);
  // console.log(wishlist);

  // get carts from local storage, because navbar m card ki quntity show krwani hn, yhn se sab jagah avialble ho gyn gy
  useEffect(() => {
    let userCarts = JSON.parse(
      window.localStorage.getItem(`Carts_${user ? user._id : "guest"}`)
    );
    let userWishlist = JSON.parse(
      window.localStorage.getItem(`Wishlist_${user ? user._id : "guest"}`)
    );
    setCarts(userCarts || []);
    setWishlist(userWishlist || []);
  }, []);

  const totalPrice = useMemo(() => {
    return carts.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [carts]);

  const cartsQuantity = useMemo(() => {
    return carts.reduce((acc, item) => acc + item.quantity, 0);
  }, [carts]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-white border-b border-gray-200 md:block hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Language and Currency */}
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <div className="flex items-center">
                <img
                  src="//ap-medilazar.myshopify.com/cdn/shop/t/5/assets/en.svg"
                  alt="English"
                  className="w-4 h-4 mr-2"
                />
                <span>English</span>
                <svg
                  className="w-2 h-2 ml-1"
                  viewBox="0 0 6 4"
                  fill="currentColor"
                >
                  <path d="M5.09843 0L3 2.15204L0.901572 0L0 0.924417L3 4L6 0.924417L5.09843 0Z" />
                </svg>
              </div>
              <div className="flex items-center">
                <span>USD $</span>
                <svg
                  className="w-2 h-2 ml-1"
                  viewBox="0 0 6 4"
                  fill="currentColor"
                >
                  <path d="M5.09843 0L3 2.15204L0.901572 0L0 0.924417L3 4L6 0.924417L5.09843 0Z" />
                </svg>
              </div>
            </div>

            {/* Free Shipping Message - Hidden on mobile */}
            <div className="hidden lg:block text-center text-gray-500 text-sm">
              Free Shipping for all Order of{" "}
              <span className="font-medium">$99</span>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <Link to="/" className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 14 15"
                  fill="currentColor"
                >
                  <path d="M13.1191 9.49602C13.4471 9.64179 13.6839 9.86955 13.8297 10.1793C13.9937 10.4891 14.0392 10.8079 13.9664 11.1359L13.3924 13.6231C13.3013 13.951 13.1282 14.2152 12.8731 14.4157C12.618 14.6343 12.3265 14.7437 11.9985 14.7437C10.3768 14.7437 8.81894 14.4248 7.32482 13.7871C5.84893 13.1493 4.57346 12.302 3.49842 11.2452C2.44161 10.1702 1.59433 8.89473 0.9566 7.41883C0.318867 5.92471 0 4.36682 0 2.74515C0 2.41718 0.100215 2.12564 0.300646 1.87055C0.519297 1.59723 0.792611 1.42413 1.12059 1.35125L3.60775 0.777291C3.93573 0.704407 4.25459 0.74996 4.56435 0.913948C4.8741 1.05972 5.10187 1.29659 5.24763 1.62457L6.39555 4.30305C6.5231 4.59458 6.54132 4.89523 6.45022 5.20498C6.37733 5.51474 6.22246 5.76983 5.98558 5.97026L5.05631 6.73554C5.78515 7.97457 6.76908 8.9585 8.00811 9.68734L8.77339 8.75807C8.97382 8.5212 9.22891 8.36632 9.53867 8.29343C9.84842 8.20233 10.1491 8.22055 10.4406 8.3481L13.1191 9.49602ZM12.6818 10.8353C12.7 10.7806 12.6727 10.735 12.5998 10.6986L9.92131 9.55068C9.86665 9.53246 9.82109 9.54157 9.78465 9.57801L8.69139 10.9173C8.47274 11.1906 8.20854 11.2543 7.89878 11.1086C6.0038 10.1611 4.58257 8.73985 3.63508 6.84487C3.48931 6.53511 3.55309 6.27091 3.8264 6.05226L5.16564 4.959C5.20208 4.92256 5.21119 4.87701 5.19297 4.82234L4.04505 2.14386C4.02683 2.0892 3.99039 2.06187 3.93573 2.06187C3.91751 2.06187 3.90839 2.06187 3.90839 2.06187L1.3939 2.63583C1.33924 2.65405 1.31191 2.69049 1.31191 2.74515C1.31191 4.67657 1.78565 6.46223 2.73314 8.10211C3.69885 9.742 5.00165 11.0448 6.64154 12.0105C8.28142 12.958 10.0671 13.4317 11.9985 13.4317C12.0532 13.4317 12.0896 13.4044 12.1078 13.3497L12.6818 10.8353Z" />
                </svg>
                +84 66 - 567 - 8899
              </Link>
              <Link to="/" className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 15 11"
                  fill="currentColor"
                >
                  <path d="M12.775 0C13.2883 0 13.716 0.180599 14.0582 0.541797C14.4194 0.883984 14.6 1.31172 14.6 1.825V9.125C14.6 9.63828 14.4194 10.0755 14.0582 10.4367C13.716 10.7789 13.2883 10.95 12.775 10.95H1.825C1.31172 10.95 0.874479 10.7789 0.513281 10.4367C0.171094 10.0755 0 9.63828 0 9.125V1.825C0 1.31172 0.171094 0.883984 0.513281 0.541797C0.874479 0.180599 1.31172 0 1.825 0H12.775ZM1.825 1.36875C1.69193 1.36875 1.57786 1.41628 1.48281 1.51133C1.40677 1.58737 1.36875 1.69193 1.36875 1.825V2.45234L6.13086 6.41602C6.45404 6.70117 6.84375 6.84375 7.3 6.84375C7.75625 6.84375 8.14596 6.70117 8.46914 6.41602L13.2313 2.45234V1.825C13.2313 1.69193 13.1837 1.58737 13.0887 1.51133C13.0126 1.41628 12.9081 1.36875 12.775 1.36875H1.825ZM12.775 9.58125C12.9081 9.58125 13.0126 9.54323 13.0887 9.46719C13.1837 9.37214 13.2313 9.25807 13.2313 9.125V4.24883L9.35313 7.47109C8.7638 7.96536 8.07943 8.2125 7.3 8.2125C6.52057 8.2125 5.8362 7.96536 5.24688 7.47109L1.36875 4.24883V9.125C1.36875 9.25807 1.40677 9.37214 1.48281 9.46719C1.57786 9.54323 1.69193 9.58125 1.825 9.58125H12.775Z" />
                </svg>
                support@example.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Border Line */}
      <div className="border-t border-gray-200"></div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="//ap-medilazar.myshopify.com/cdn/shop/files/logo.png"
                  alt="Ap Medilazar"
                  className="h-10"
                />
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex space-x-8">
              <Link
                to="/"
                className="text-black hover:text-green-700 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-green-700 font-medium"
              >
                About
              </Link>
              <Link
                to="/products"
                className="text-black hover:text-green-700 font-medium"
              >
                Products
              </Link>
              <Link
                to="/collections"
                className="text-black hover:text-green-700 font-medium"
              >
                Shop
              </Link>
              <Link
                to="/faqs"
                className="text-black hover:text-green-700 font-medium"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-green-700 font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                className="text-black hover:text-green-700"
                onClick={() => setIsSearchOpen(true)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <Link
                to="/profile"
                className="text-black hover:text-green-700 relative"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
              <Link
                to="/wishlist"
                className="text-black hover:text-green-700 relative"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
              <Link
                to="/carts"
                className="text-black hover:text-green-700 relative"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartsQuantity}
                </span>
                
              </Link>
              <span className="pr-3 text-green-600">
                  $ {totalPrice}
                </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white w-4/5 h-full p-4">
            <div className="flex justify-between items-center mb-6">
              <img
                src="//ap-medilazar.myshopify.com/cdn/shop/files/logo.png"
                alt="Ap Medilazar"
                className="h-8"
              />
              <button onClick={() => setIsMenuOpen(false)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                to=""
                className="text-black hover:text-green-700 font-medium"
              >
                Home
              </Link>
              <Link
                to=""
                className="text-black hover:text-green-700 font-medium"
              >
                Shop
              </Link>
              <Link
                to="/products"
                className="text-black hover:text-green-700 font-medium"
              >
                Products
              </Link>
              <Link
                to=""
                className="text-black hover:text-green-700 font-medium"
              >
                Pages
              </Link>
              <Link
                to=""
                className="text-black hover:text-green-700 font-medium"
              >
                Blog
              </Link>
              <Link
                to=""
                className="text-black hover:text-green-700 font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setIsSearchOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <form className="flex">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 hover:bg-green-700 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
