import React, { useState } from "react";
import { useCarts, useUser } from "../../hooks/hooks";

const CartFooter = (props) => {
  const [agreed, setAgreed] = useState(false);

  let green = "#51a6b6";

  let { carts, setCarts } = useCarts();

  return (
    <div className="w-full flex flex-col gap-6  rounded-md p-4 bg-white">
      <div className=" rounded-md p-5 bg-gray-100">
        {/* Subtotal + Tax Note */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold">Subtotal</span>
            <span className="text-base font-semibold">
              ${props.totalPrice.toFixed(2)}
            </span>
          </div>
          <small className="text-xs text-gray-500 mb-2">
            Taxes and shipping calculated at checkout
          </small>
        </div>

        {/* Terms & Conditions + Checkout Button */}
        <div className="flex flex-col gap-3">
          <label className="flex items-start text-sm">
            <input
              type="checkbox"
              className="mt-1 mr-2"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree with the{" "}
            <a href="#" className="text-blue-600 underline ml-1">
              terms and conditions
            </a>
          </label>
          <button
            onClick={props.checkOutFunc}
            type="submit"
            disabled={!agreed || props.loading}
            aria-busy={props.loading ? "true" : "false"}
            className={`w-full py-2 px-4 text-white text-sm rounded-md flex items-center justify-center transition-all duration-300
    ${
      !agreed || props.loading
        ? "bg-gray-400 cursor-not-allowed opacity-60"
        : "bg-blue-600 hover:bg-blue-700"
    }`}
          >
            {props.loading ? (
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                <span>Placing order...</span>
              </div>
            ) : (
              "Checkout"
            )}
          </button>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex flex-col items-center gap-1 mt-4">
        <span className="text-xs text-gray-500">We accept</span>
        <img
          src="https://ap-medilazar.myshopify.com/cdn/shop/files/payment.png?v=1734767823"
          alt="Payment Methods"
          className="w-auto h-auto max-w-[250px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CartFooter;
