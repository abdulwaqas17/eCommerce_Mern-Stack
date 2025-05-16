import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import CartTable from "../components/cartsUtils/CartsTable";
import CartNoteAndShipping from "../components/cartsUtils/NoteAndShipping";
import CartFooter from "../components/cartsUtils/CartFooter";
import { useCarts, useUser } from "../hooks/hooks";

const Carts = () => {
  // get carts for context api
  let { carts, setCarts } = useCarts();

  console.log(window.localStorage.getItem('a'));
  

  // get user for context api
  let { user, setUser } = useUser();
  console.log(user);

  const [shippingData, setShippingData] = useState({});

  // for total price calculation
  const totalPrice = useMemo(() => {
    return carts.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [carts]);

  // for loading bar
  const progress = 0.75;
  const progressPercent = Math.min(progress * 100, 100);

  // get country and paymentMethod from child component
  const handleShippingData = (data) => {
    console.log("Shipping Data: ", data); // { country: "Pakistan", paymentMethod: "COD" }
    setShippingData(data);
  };

  console.log(shippingData);
  // console.log(carts[0].id);
 

  // proceed to checkout function
  let checkOut = async () => {
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

    console.log(userOrder);
    let userToken = window.localStorage.getItem('userToken');

    try {
      const res = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
          role: "user",
        },
        body: JSON.stringify(userOrder),
      });

      let data = await res.json();

      console.log(data);

      alert(data.message);

      if (data.success) {
        console.log('ho gia');
        setCarts([]);
        window.localStorage.removeItem('userCarts')
        
      }

    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
    
       <div className='bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f71c] pt-[45px] pb-[50px]'>
          <Breadcrumb val="Your Shopping Carts"/>
        </div>

      {/* Carts header */}
      <div className="w-full px-4 py-6 bg-white ">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-gray-800 mb-3 text-center">
            Your cart
          </h1>

          <p className="text-sm text-center">
            {progressPercent == 100
              ? "You are eligible for free shipping!"
              : "You are not eligible for free shipping!"}
          </p>
          <div className="w-[70%] rounded-md h-3 my-3 border mx-auto">
            <div
              className="h-full bg-black transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* carts Table  */}
      <div className="mx-6">
        <CartTable />
      </div>

      {/* CartNoteAndShipping */}
      <div className="mx-10">
        <CartNoteAndShipping onShippingDataChange={handleShippingData} />
      </div>

      <div className="mx-8">
        <CartFooter totalPrice={totalPrice} checkOutFunc={checkOut} />
      </div>

      <Footer />
    </div>
  );
};

export default Carts;
