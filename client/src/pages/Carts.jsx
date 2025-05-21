import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import CartTable from "../components/cartsUtils/CartsTable";
import CartNoteAndShipping from "../components/cartsUtils/NoteAndShipping";
import CartFooter from "../components/cartsUtils/CartFooter";
import { useCarts, useUser } from "../hooks/hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Carts = () => {
  const { carts, setCarts } = useCarts();
  const { user } = useUser();

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const [shippingData, setShippingData] = useState({});

  const totalPrice = useMemo(() => {
    return carts.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [carts]);

  // const progress = 0.75;
  const progressPercent = Math.min((totalPrice * 100)/5000, 100);

  const handleShippingData = (data) => {
    setShippingData(data);
  };

  const checkOut = async () => {
    // === VALIDATION ===
    if (!user || !user._id || !user.email) {
      return toast.error("User information is missing.");
    }

    if (!shippingData.paymentMethod) {
      return toast.error("Please select a payment method.");
    }

    if (!user.fullname || !user.number || !user.address || !user.country) {
      return toast.error("Shipping address is incomplete.");
    }

    if (carts.length === 0) {
      return toast.error("Your cart is empty.");
    }

    const userOrder = {
      orderItems: carts.map(({ _id, quantity }) => ({
        productId: _id,
        qty: quantity,
      })),
      totalAmount: totalPrice,
      userId: user._id,
      userEmail: user.email,
      paymentMethod: shippingData.paymentMethod,
      shippingAddress: {
        fullName: user.fullname,
        phone: user.number,
        address: user.address,
        country: user.country,
      },
    };

    const userToken = localStorage.getItem("userToken");
    setIsPlacingOrder(true); // 🔄 Loading state ON

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
          role: "user",
        },
        body: JSON.stringify(userOrder),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to place order.");
      }

      toast.success(data.message || "Order placed successfully!");
      alert(data.message || "Order placed successfully!");
      setCarts([]);
      localStorage.removeItem("userCarts");

    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      alert(error.message || "Something went wrong!");
      console.error(error);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div>
      
      <Navbar />

      <div className="bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f71c] pt-[45px] pb-[50px]">
        <Breadcrumb val="Your Shopping Carts" />
      </div>

      {/* Header */}
      <div className="w-full px-4 py-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-800 mb-3 text-center">
            Your cart
          </h1>
          <p className="text-sm text-center">
            {progressPercent === 100
              ? "You are eligible for free shipping!"
              : "You are not eligible for free shipping!"}
          </p>
          <div className="w-[70%] rounded-md h-3 my-3 border mx-auto">
            <div
              className="h-full rounded-md bg-black transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Cart Table */}
      <div className="mx-6">
        <CartTable />
      </div>

      {/* Shipping Note & Info */}
      <div className="mx-10">
        <CartNoteAndShipping onShippingDataChange={handleShippingData} />
      </div>

      {/* Checkout Footer */}
      <div className="mx-8">
        <CartFooter totalPrice={totalPrice} checkOutFunc={checkOut} loading={isPlacingOrder} />
      </div>

      <Footer />
    </div>
  );
};

export default Carts;
