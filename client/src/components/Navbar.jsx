import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useCarts, useUser, useWishlist } from "../hooks/hooks";
import { useTranslation } from "react-i18next";
import { calculateTotalPrice, calculateTotalQuantity, getItemFromLS } from "../utils/utilityFunctions";
import { 
  FiSearch, 
  FiUser, 
  FiHeart, 
  FiShoppingCart, 
  FiMenu, 
  FiX,
  FiPhone,
  FiMail,
  FiChevronDown
} from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // get carts and wishlist of LS and decode user data
  let { carts, setCarts } = useCarts();
  let { wishlist, setWishlist } = useWishlist();
  let { user } = useUser();

  const { t } = useTranslation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // get carts from local storage for specific user
  useEffect(() => {
    if (user) {
      let userCarts = JSON.parse(
        window.localStorage.getItem(`Carts_${user ? user._id : "guest"}`)
      );
      let userWishlist = JSON.parse(
        window.localStorage.getItem(`Wishlist_${user ? user._id : "guest"}`)
      );
      setCarts(userCarts || []);
      setWishlist(userWishlist || []);
    }
  }, [user]);

  const cartsQuantity = useMemo(() => calculateTotalQuantity(carts), [carts]);
  const wishlistQuantity = useMemo(() => wishlist?.length || 0, [wishlist]);

  const navLinks = [
    { path: "/", key: "nav.home" },
    { path: "/about", key: "nav.about" },
    { path: "/products", key: "nav.products" },
    { path: "/collections", key: "nav.shop" },
    { path: "/faqs", key: "nav.faqs" },
    { path: "/contact", key: "nav.contact" }
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-white border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Language and Currency */}
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <LanguageSelector />
              <div className="flex items-center cursor-pointer pl-2 w-[80px]">
                <span>USD $</span>
                <FiChevronDown className="w-3 h-3 ml-1" />
              </div>
            </div>

            {/* Free Shipping Message - Hidden on mobile */}
            <div className="hidden lg:block text-center text-gray-500 text-sm">
              Free Shipping for all Order of{" "}
              <span className="font-medium">$99</span>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <Link to="/" className="flex items-center hover:text-green-700">
                <FiPhone className="w-4 h-4 mr-2" />
                +84 66 - 567 - 8899
              </Link>
              <Link to="/" className="flex items-center hover:text-green-700">
                <FiMail className="w-4 h-4 mr-2" />
                support@example.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Border Line */}
      <div className="border-t border-gray-200"></div>

      {/* Main Header */}
      <header className={`bg-white sticky top-0 z-40 shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu className="w-6 h-6" />
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
              {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="text-black hover:text-green-700 font-medium transition-colors duration-200"
        >
          {t(link.key)}
        </Link>
      ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* <button
                className="text-black hover:text-green-700 focus:outline-none transition-colors duration-200"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <FiSearch className="w-5 h-5" />
              </button> */}
              
              <Link
                to="/profile"
                className="text-black hover:text-green-700 relative transition-colors duration-200"
                aria-label="Profile"
              >
                {user ? (
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                    {user.fullname.charAt(0).toUpperCase()}
                  </div>
                ) : (
                  <FiUser className="w-5 h-5" />
                )}
              </Link>
              
              <Link
                to="/wishlist"
                className="text-black hover:text-green-700 relative transition-colors duration-200"
                aria-label="Wishlist"
              >
                <FiHeart className="w-5 h-5" />
                {/* {wishlistQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistQuantity}
                  </span>
                )} */}
              </Link>
              
              <Link
                to="/carts"
                className="text-black hover:text-green-700 relative transition-colors duration-200"
                aria-label="Cart"
              >
                <FiShoppingCart className="w-5 h-5" />
                {cartsQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartsQuantity}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div className="bg-white w-4/5 h-full p-4 transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <img
                src="//ap-medilazar.myshopify.com/cdn/shop/files/logo.png"
                alt="Ap Medilazar"
                className="h-8"
              />
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="focus:outline-none"
                aria-label="Close menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-black hover:text-green-700 font-medium py-2 px-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              
              {/* Additional mobile-only links */}
              <div className="border-t pt-4 mt-4">
                <Link
                  to="/profile"
                  className="flex items-center text-black hover:text-green-700 font-medium py-2 px-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiUser className="w-5 h-5 mr-3" />
                  My Account
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center text-black hover:text-green-700 font-medium py-2 px-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiHeart className="w-5 h-5 mr-3" />
                  Wishlist {wishlistQuantity > 0 && `(${wishlistQuantity})`}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl p-6 relative mx-4">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none transition-colors duration-200"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <FiX className="w-6 h-6" />
            </button>
            <form className="flex">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                autoFocus
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
