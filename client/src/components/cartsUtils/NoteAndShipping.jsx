import React, { useEffect, useState } from "react";

const CartNoteAndShipping = ({ onShippingDataChange }) => {
  
  const [note, setNote] = useState("");
  const [country, setCountry] = useState("");
  // const [province, setProvince] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    
    onShippingDataChange({ country, paymentMethod });
  }, [country, paymentMethod]);

  const countries = [
    "---",
    "Pakistan",
    "Australia",
    "Czechia",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Hong Kong SAR",
    "Ireland",
    "Israel",
    "Italy",
    "United States",
    "Vietnam",
  ];

  return (
    <div>
      <div className="w-full py-6 flex flex-col md:flex-row gap-8">
        {/* Add Note Section */}
        <div className="w-full">
          <label
            htmlFor="cart-note"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Add Note
          </label>
          <textarea
            id="cart-note"
            name="note"
            rows="3"
            placeholder="Add Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Shipping Estimator Section */}
      </div>

      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">
          Get shipping estimates
        </h2>
        <div className="w-full flex  gap-4">
          {/* Country */}
          <div className="flex flex-col w-[70%]">
            <label htmlFor="country" className=" my-1">
              Country
            </label>
            <select
              id="country"
              className="border px-3 py-2 rounded-md text-sm "
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Zip */}
          <div className="flex flex-col  w-[30%]">
            <label htmlFor="zip" className=" my-1">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              id="paymentMethod"
               className="border px-3 py-2 rounded-md text-sm "
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="COD">COD</option>
              <option value="Card">Card</option>
            </select>
          </div>
        </div>
        {/* Button */}
        <button className="bg-blue-600 text-white py-2 px-5 rounded-[30px] hover:bg-blue-700 mt-4">
          Estimate
        </button>
      </div>
    </div>
  );
};

export default CartNoteAndShipping;
