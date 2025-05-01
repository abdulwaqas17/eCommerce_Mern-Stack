import React, { useMemo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCarts } from "../../hooks/hooks";

const CartTable = () => {

  let { carts, setCarts } = useCarts();
  
  
  return (
    <div className="w-full px-5 py-6 overflow-x-auto">
      <form action="/cart" method="post" className="w-full">
        <table className="min-w-full bg-white  rounded-md">
          <thead>
            <tr className="text-left font-semibold">
              <th className="p-3">Product</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item) => (
              <tr key={item._id} className="border border-gray-300">
                <td className="p-3 flex gap-4 items-start">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    
                  </div>
                </td>

                <td className="p-3 text-center">
                  <div className="inline-flex items-center border rounded px-2">
                    <button
                      type="button"
                      className="text-gray-600 hover:text-black"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      className="w-10 text-center border-0 focus:ring-0 text-sm"
                      readOnly
                    />
                    <button
                      type="button"
                      className="text-gray-600 hover:text-black"
                    >
                      <FaPlus />
                    </button>

                  </div>

                  <div>
                  <button
                      type="button"
                      className="text-xs text-red-500 hover:underline mt-1"
                    >
                      Remove
                  </button>
                  </div>

                </td>

                <td className="p-3 text-right text-sm text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CartTable;
