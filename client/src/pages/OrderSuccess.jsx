import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircleIcon, ShoppingBagIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import confetti from 'canvas-confetti';
import Navbar from '../components/Navbar'; // Adjust import path
import Footer from '../components/Footer'; // Adjust import path

const OrderSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  useEffect(() => {
    // Fire confetti when component mounts
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
     <div>
       <Navbar />
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Optional Navbar - will only render if component exists */}

      <main className="flex-grow flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-2xl text-center">
          {/* Animated Checkmark */}
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 animate-bounce">
            <CheckCircleIcon className="h-10 w-10 text-green-600" />
          </div>
          
          {/* Title with gradient text */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Order Confirmed!
            </span>
          </h1>
          
          {/* Built-in SVG Graphic */}
          <div className="flex justify-center mb-8">
            <svg 
              className="h-40 w-40 text-blue-400" 
              fill="none" 
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
          </div>
          
          {/* Order Details Card */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-sm max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <ShoppingBagIcon className="h-6 w-6 text-blue-600" />
              <span className="font-medium text-lg text-blue-800">Order #{orderId}</span>
            </div>
            <p className="text-gray-700 mb-2">
              Your payment has been processed successfully
            </p>
            <p className="text-sm text-gray-600">
              We've sent the receipt to your email
            </p>
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
            <div className="bg-white bg-opacity-50 rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-1">Estimated Delivery</h3>
              <p className="text-indigo-600 font-semibold">2-3 Business Days</p>
            </div>
            <div className="bg-white bg-opacity-50 rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-1">Need Help?</h3>
              <p className="text-blue-600">support@medilazar.com</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/profile"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Track Your Order
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300"
            >
              Continue Shopping <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          {/* Thank You Message */}
          <div className="mt-8 text-sm text-gray-600">
            <p>Thank you for shopping with Ap Medilazar!</p>
          </div>
        </div>
      </main>

      {/* Optional Footer - will only render if component exists */}
    </div>
      <Footer />
     </div>
  );
};

export default OrderSuccess;