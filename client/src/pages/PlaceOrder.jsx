// import React, { useEffect, useState } from 'react';
// // import { useCarts, useUser } from '../hooks/hooks';
// import useCartAndWishlist from '../utils/useCartAndWishlist';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// const PlaceOrder = () => {
//   const { carts } = useCartAndWishlist();

//   console.log(carts);

//   const [paymentMethod, setPaymentMethod] = useState('COD');

//   // Calculate totals
//   const subtotal = carts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const estimatedTax = subtotal * 0.1; // 10% tax
//   const total = subtotal + estimatedTax;

//     const placeOrder = async () => {
//       // === VALIDATION ===
//       if (!user || !user._id || !user.email) {
//         return toast.error("User information is missing.");
//       }

//       if (carts.length === 0) {
//         return toast.error("Your cart is empty.");
//       }

//       const userOrder = {
//         orderItems: carts.map(({ _id, quantity }) => ({
//           productId: _id,
//           qty: quantity,
//         })),
//         totalAmount: totalPrice,
//         userId: user._id,
//         userEmail: user.email,

//       };

//       const userToken = localStorage.getItem("userToken");
//       setIsPlacingOrder(true); // 🔄 Loading state ON

//       try {
//         const res = await fetch(`${import.meta.env.VITE_API_URL}/api/order`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${userToken}`,
//             role: "user",
//           },
//           body: JSON.stringify(userOrder),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data.message || "Failed to place order.");
//         }

//         toast.success(data.message || "Order placed successfully!");
//         alert(data.message || "Order placed successfully!");
//         setCarts([]);
//         localStorage.removeItem("userCarts");

//       } catch (error) {
//         toast.error(error.message || "Something went wrong!");
//         alert(error.message || "Something went wrong!");
//         console.error(error);
//       } finally {
//         setIsPlacingOrder(false);
//       }
//     };

//   return (
//     <div>
//         <Navbar/>
//         <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left side - Checkout form */}
//           <div className="lg:w-2/3">
//             <main className="bg-white rounded-lg shadow-sm p-6">
//               <h1 className="text-2xl font-bold mb-6">Ap Medilazar Checkout</h1>

//               <form className="space-y-6" onSubmit={placeOrder}>
//                 {/* Contact Information */}
//                 <section className="border-b pb-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-lg font-semibold">Contact</h2>
//                     <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                       Log in
//                     </a>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                         Email or mobile phone number
//                       </label>
//                       <input
//                         type="text"
//                         id="email"
//                         name="email"
//                         placeholder="Email or mobile phone number"
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>

//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="marketing_opt_in"
//                         name="marketing_opt_in"
//                         className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                       />
//                       <label htmlFor="marketing_opt_in" className="ml-2 block text-sm text-gray-900">
//                         Email me with news and offers
//                       </label>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Delivery Information */}
//                 <section className="border-b pb-6">
//                   <h2 className="text-lg font-semibold mb-4">Delivery</h2>

//                   <div className="space-y-4">
//                     <div>
//                       <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
//                         Country/Region
//                       </label>
//                       <select
//                         id="country"
//                         name="country"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="Pakistan" selected>Pakistan</option>
//                       </select>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//                           First name
//                         </label>
//                         <input
//                           type="text"
//                           id="firstName"
//                           name="firstName"
//                           placeholder="First name "
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//                           Last name  (optional)
//                         </label>
//                         <input
//                           type="text"
//                           id="lastName"
//                           name="lastName (optional)"
//                           placeholder="Last name"
//                           required
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//                         Address
//                       </label>
//                       <input
//                         type="text"
//                         id="address"
//                         name="address"
//                         placeholder="Address"
//                         required
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
//                         Apartment, suite, etc. (optional)
//                       </label>
//                       <input
//                         type="text"
//                         id="apartment"
//                         name="apartment"
//                         placeholder="Apartment, suite, etc. (optional)"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
//                           City
//                         </label>
//                         <input
//                           type="text"
//                           id="city"
//                           name="city"
//                           placeholder="City"
//                           required
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
//                           Postal code (optional)
//                         </label>
//                         <input
//                           type="text"
//                           id="postalCode"
//                           name="postalCode"
//                           placeholder="Postal code (optional)"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     </div>

//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="save_shipping"
//                         name="save_shipping"
//                         className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                       />
//                       <label htmlFor="save_shipping" className="ml-2 block text-sm text-gray-900">
//                         Save this information for next time
//                       </label>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Shipping Method */}
//                 <section className="border-b pb-6">
//                   <h3 className="text-lg font-semibold mb-4">Shipping method</h3>
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between p-4 border rounded-md">
//                       <div>
//                         <h4 className="font-medium">Standard</h4>
//                       </div>
//                       <div>
//                         <strong className="font-semibold">Free</strong>
//                       </div>
//                     </div>
//                   </div>
//                 </section>

//                 {/* Payment Information */}
//                 <section>
//                   <div className="space-y-4">
//                     <div>
//                       <h2 className="text-lg font-semibold">Payment</h2>
//                       <p className="text-sm text-gray-500">All transactions are secure and encrypted.</p>
//                     </div>

//                     <div className="p-6 border rounded-md bg-gray-50 text-center">
//                       <div className="mx-auto w-16 h-16 mb-4">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78" className="w-full h-full">
//                           {/* Payment SVG icon */}
//                           <g fill="none" fillRule="evenodd">
//                             <g stroke="#B3B3B3" strokeWidth="4" transform="translate(1.38 29.486)">
//                               <rect width="56.242" height="32.799" y="5.307" rx="4.5" fill="#FAFAFA"></rect>
//                               <rect width="56.242" height="32.799" x="5.327" rx="4.5" fill="#FAFAFA"></rect>
//                               <ellipse cx="33.637" cy="16.443" rx="9.959" ry="9.957"></ellipse>
//                             </g>
//                             <g transform="translate(49 16)">
//                               <circle cx="13.094" cy="13.094" r="13.094" fill="#FAFAFA" stroke="#B3B3B3" strokeWidth="2"></circle>
//                               <path stroke="#B3B3B3" strokeWidth="2" d="M13.094 4.676v11.36"></path>
//                               <circle cx="13.028" cy="20.108" r="1.403" fill="#B3B3B3"></circle>
//                             </g>
//                           </g>
//                         </svg>
//                       </div>
//                       <p className="text-gray-600">Select a payment method</p>

//                       <div className="mt-4">
//                         <label htmlFor="paymentMethod" className="sr-only">Payment Method</label>
//                         <select
//                           id="paymentMethod"
//                           name="paymentMethod"
//                           value={paymentMethod}
//                           onChange={(e) => setPaymentMethod(e.target.value)}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         >
//                           <option value="COD">Cash on Delivery</option>
//                           <option value="EasyPaisa">Easy Paisa</option>
//                           <option value="BankTransfer">Bank Transfer</option>
//                           <option value="Stripe">Stripe</option>
//                         </select>
//                       </div>
//                     </div>

//                     <button
//                       type="submit"

//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       Pay now
//                     </button>
//                   </div>
//                 </section>
//               </form>
//             </main>

//             <footer className="mt-6 text-center text-sm text-gray-500">
//               <button type="button" className="text-blue-600 hover:text-blue-800">
//                 Privacy policy
//               </button>
//             </footer>
//           </div>

//           {/* Right side - Order summary */}
//           <div className="lg:w-1/3">
//             <aside className="bg-white rounded-lg shadow-sm p-6">
//               <h2 className="text-lg font-semibold mb-6">Order summary</h2>

//               {/* Cart items */}
//               <section className="mb-6">
//                 <h3 className="font-medium mb-4">Shopping cart</h3>

//                 <div className="space-y-4 max-h-96 overflow-y-auto">
//                   {carts.map((item, index) => (
//                     <div key={index} className="flex items-start gap-4 border-b pb-4">
//                       <div className="relative">
//                         <img
//                           src={item.image1}
//                           alt={item.name}
//                           className="w-16 h-16 object-cover rounded"
//                         />
//                         <div className="absolute -top-2 -right-2 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs">
//                           {item.quantity}
//                         </div>
//                       </div>

//                       <div className="flex-1">
//                         <p className="font-medium">{item.name}</p>
//                       </div>

//                       <div className="font-medium">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* Cost summary */}
//               <section>
//                 <h3 className="font-medium mb-4">Cost summary</h3>

//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span>Subtotal · {carts.reduce((sum, item) => sum + item.quantity, 0)} items</span>
//                     <span>${subtotal.toFixed(2)}</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span>Shipping</span>
//                     <span className="font-semibold">Free</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <div className="flex items-center">
//                       <span>Estimated taxes</span>
//                       <button type="button" className="ml-1 text-gray-400 hover:text-gray-600">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="w-4 h-4">
//                           <circle cx="7" cy="7" r="5.5" fill="none" stroke="currentColor"></circle>
//                           <path strokeLinejoin="round" d="M6.99 10.24h.02v.02h-.02z" fill="currentColor"></path>
//                           <path strokeLinecap="round" d="M5.5 5.25a1.5 1.5 0 1 1 2.428 1.179C7.494 6.77 7 7.198 7 7.75" fill="none" stroke="currentColor"></path>
//                         </svg>
//                       </button>
//                     </div>
//                     <span>${estimatedTax.toFixed(2)}</span>
//                   </div>

//                   <div className="border-t pt-3 mt-3 flex justify-between">
//                     <strong>Total</strong>
//                     <div>
//                       <abbr title="USD" className="no-underline mr-1">USD</abbr>
//                       <strong>${total.toFixed(2)}</strong>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </aside>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default PlaceOrder;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useCarts } from "../../hooks/hooks";
import { toast } from "react-toastify";
import { useCarts, useUser } from "../hooks/hooks";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { calculateTotalPrice } from "../utils/utilityFunctions";

const CheckoutPage = () => {
  const { carts, setCarts } = useCarts();
  const { user } = useUser();
  const navigate = useNavigate();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);


  // Form state
  const [formData, setFormData] = useState({
    contact: "",
    country: "Pakistan",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    paymentMethod: "COD",
  });

  // Calculate totals
  // carts.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const subtotal = calculateTotalPrice(carts);
  const estimatedTax = subtotal * 0.1; // 10% tax
  const deliveryFee = subtotal >= 5000 ? 0 : 300;
  const total = subtotal + estimatedTax + deliveryFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
  const requiredFields = [
    "contact",
    "firstName",
    "lastName",
    "address",
    "city",
  ];

  for (const field of requiredFields) {
    if (!formData[field]?.trim()) {
      toast.error(
        `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
      );
      return false;
    }
  }

  // ✅ Extra: Validate contact as email or phone
  const contact = formData.contact.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^03\d{9}$/; // Pakistani mobile numbers only

  if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
    toast.error("Contact must be a valid email or Pakistani phone number (03xxxxxxxxx)");
    return false;
  }

  return true;
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    if (carts.length === 0) {
      toast.error("Your cart is empty");
      navigate('/')
      return;
    }
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      toast.error("Please login to place order");
      return;
    }
    if (!user || !user._id) {
      toast.error("Please login to place order");
      return;
    }

    console.log(user);

    const { paymentMethod, ...shippingDetails } = formData;

    const orderData = {
      userId: user._id,
      userEmail: user.email,
      shippingAddress: shippingDetails,
      orderItems: carts.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.price,
      })),
      paymentMethod,
      subtotal,
      tax: estimatedTax,
      deliveryFee,
      total,
    };

    setIsPlacingOrder(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
          role: "user",
        },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      console.log(data);
      
      if(data.message === 'Invalid or expired token') {
        navigate('/login')
      }

      if (!res.ok) {
        throw new Error(data.message || "Failed to place order.");
      }


      toast.success(data.message || "Order placed successfully!");
      setCarts([]);
      localStorage.setItem(`Carts_${user?._id}`, JSON.stringify([]));
      // localStorage.removeItem("userCarts");
      navigate("/order-success", { state: { orderId: data.orderId } });
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      console.error(error);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Checkout form */}
            <div className="lg:w-2/3">
              <main className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold mb-6">
                  Ap Medilazar Checkout
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <section className="border-b pb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Contact</h2>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Log in
                      </a>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="contact"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email or mobile phone number *
                        </label>
                        <input
                          type="text"
                          id="contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          placeholder="Email or mobile phone number"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Delivery Information */}
                  <section className="border-b pb-6">
                    <h2 className="text-lg font-semibold mb-4">Delivery</h2>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Country/Region *
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="Pakistan">Pakistan</option>
                          <option value="Dubai">Dubai</option>
                          <option value="United States">United States</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            First name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First name"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Last name
                          </label>
                          <input
                            required
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Address"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="apartment"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Apartment, suite, etc. (optional)
                        </label>
                        <input
                          type="text"
                          id="apartment"
                          name="apartment"
                          placeholder="Apartment, suite, etc."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="postalCode"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Postal code (optional)
                          </label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            placeholder="Postal code"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Shipping Method */}
                  <section className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Shipping method
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <h4 className="font-medium">Standard</h4>
                          <p className="text-sm text-gray-500">
                            {deliveryFee === 0
                              ? "Free delivery"
                              : `Delivery fee: $${deliveryFee}`}
                          </p>
                        </div>
                        <div>
                          <strong className="font-semibold">
                            {deliveryFee === 0 ? "Free" : `$${deliveryFee}`}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Payment Information */}
                  <section>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg font-semibold">Payment</h2>
                        <p className="text-sm text-gray-500">
                          All transactions are secure and encrypted.
                        </p>
                      </div>

                      <div className="p-6 border rounded-md bg-gray-50">
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="paymentMethod"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Payment Method *
                            </label>
                            <select
                              id="paymentMethod"
                              name="paymentMethod"
                              value={formData.paymentMethod}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              required
                            >
                              <option value="COD">Cash on Delivery</option>
                              <option value="EasyPaisa">Easy Paisa</option>
                              <option value="BankTransfer">
                                Bank Transfer
                              </option>
                              <option value="Stripe">Stripe</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isPlacingOrder}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isPlacingOrder ? "Processing..." : "Confirm Order"}
                      </button>
                    </div>
                  </section>
                </form>
              </main>

              <footer className="mt-6 text-center text-sm text-gray-500">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Privacy policy
                </button>
              </footer>
            </div>

            {/* Right side - Order summary */}
            <div className="lg:w-1/3">
              <aside className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-lg font-semibold mb-6">Order summary</h2>

                {/* Cart items */}
                <section className="mb-6">
                  <h3 className="font-medium mb-4">
                    Shopping cart ({calculateTotalPrice(carts)} items)
                  </h3>

                  <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 pt-3">
                    {carts.length === 0 ? (
                      <p className="text-gray-500">Your cart is empty</p>
                    ) : (
                      carts.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 border-b pb-4"
                        >
                          <div className="relative">
                            <img
                              src={item.image1}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="absolute -top-2 -right-2 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                              {item.quantity}
                            </div>
                          </div>

                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">
                              {item.category}
                            </p>
                          </div>

                          <div className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </section>

                {/* Cost summary */}
                <section>
                  <h3 className="font-medium mb-4">Cost summary</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span
                        className={
                          deliveryFee === 0
                            ? "text-green-600 font-semibold"
                            : ""
                        }
                      >
                        {deliveryFee === 0 ? "Free" : `$${deliveryFee}`}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <span>Estimated taxes</span>
                        <button
                          type="button"
                          className="ml-1 text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                            className="w-4 h-4"
                          >
                            <circle
                              cx="7"
                              cy="7"
                              r="5.5"
                              fill="none"
                              stroke="currentColor"
                            ></circle>
                            <path
                              strokeLinejoin="round"
                              d="M6.99 10.24h.02v.02h-.02z"
                              fill="currentColor"
                            ></path>
                            <path
                              strokeLinecap="round"
                              d="M5.5 5.25a1.5 1.5 0 1 1 2.428 1.179C7.494 6.77 7 7.198 7 7.75"
                              fill="none"
                              stroke="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <span>${estimatedTax.toFixed(2)}</span>
                    </div>

                    <div className="border-t pt-3 mt-3 flex justify-between">
                      <strong>Total</strong>
                      <div>
                        <abbr title="USD" className="no-underline mr-1">
                          USD
                        </abbr>
                        <strong>${total.toFixed(2)}</strong>
                      </div>
                    </div>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
