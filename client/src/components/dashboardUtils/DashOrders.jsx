import React from "react";
import useOrders from "../../hooks/useOrders";

const DashOrders = () => {
  const { orders, loading, error } = useOrders();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h4 className="text-xl font-semibold mb-3 md:mb-0">Latest Orders</h4>
        <div className="flex flex-wrap gap-3">
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
            <option>All Categories</option>
            <option>Women's Clothing</option>
            <option>Men's Clothing</option>
            <option>Cellphones</option>
            <option>Computer & Office</option>
            <option>Consumer Electronics</option>
            <option>Jewelry & Accessories</option>
            <option>Home & Garden</option>
            <option>Luggage & Bags</option>
            <option>Shoes</option>
            <option>Mother & Kids</option>
          </select>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          />
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
            <option>Status</option>
            <option>All</option>
            <option>Paid</option>
            <option>Chargeback</option>
            <option>Refund</option>
          </select>
        </div>
      </div>

      {/* Conditional Rendering */}
      {loading ? (
        <div className="p-4 text-center text-blue-600 font-semibold">
          Loading orders...
        </div>
      ) : error ? (
        <div className="p-4 text-center text-red-600 font-semibold">
          Failed to fetch orders. Please try again.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 text-center">
                  <input type="checkbox" />
                </th>
                <th className="p-2">Order ID</th>
                <th className="p-2">Billing Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Total</th>
                <th className="p-2">Status</th>
                <th className="p-2">Date</th>
                <th className="p-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-t">
                  <td className="text-center p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2 font-semibold text-blue-600">
                    {order._id.slice(1, 6)}
                  </td>
                  <td className="p-2 font-bold">
                    {order.shippingAddress.fullName}
                  </td>
                  <td className="p-2">{order.userEmail}</td>
                  <td className="p-2">${order.totalAmount.toFixed(2)}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Canceled"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-2">
                    {new Date(order.orderDate).toISOString().split("T")[0]}
                  </td>
                  <td className="p-2 text-right">
                    <button className="hover:underline mr-2 p-1 rounded bg-blue-800 text-white">
                      Detail
                    </button>
                    <button className="text-gray-600 font-bold p-1 hover:text-gray-800 rounded border border-blue-800">
                      ...
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashOrders;
