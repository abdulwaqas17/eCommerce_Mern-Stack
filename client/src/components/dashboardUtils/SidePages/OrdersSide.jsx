import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import useOrders from "../../../utils/useOrders";
import { toast } from "react-toastify";

const OrdersSide = () => {
  const { orders, loading, error,fetchData } = useOrders();

  const [ dashOrders, setDashOrders ] = useState([]);

  useEffect(() => {
    setDashOrders([...orders]);
  }, [orders]);

  // handleStatusChange
  const handleStatusChange = async (orderId, newStatus) => {
    const confirmChange = window.confirm(
      `Are you sure you want to change status to "${newStatus}"?`
    );
    if (!confirmChange) return;
    let token = window.localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/order/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            role: "admin",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const data = await res.json();
      console.log(data);
      

      if (res.ok) {
        toast.success("✅ Order status updated!");
        setDashOrders(data.allOrders)
      
      } else {
        toast.error(data.message || "❌ Failed to update order");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Error updating order status");
    }
  };

  return (
    <div>
      {/* Top section with title and search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Order List</h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search order ID"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm w-full md:w-64"
          />
        </div>
      </div>

      {/* Search filters */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-2 rounded-md w-full md:w-1/3"
            />
            <div className="grow flex gap-4 justify-end">
              <select className="border px-3 py-2 rounded-md w-full md:w-[150px]">
                <option>Status</option>
                <option>Active</option>
                <option>Disabled</option>
                <option>Show all</option>
              </select>
              <select className="border px-3 py-2 rounded-md w-full md:w-[150px]">
                <option>Show 20</option>
                <option>Show 30</option>
                <option>Show 40</option>
              </select>
            </div>
          </div>
        </div>

        {/* Conditional Rendering for Loading and Error */}
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
            <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-medium text-gray-600">#ID</th>
                  <th className="px-4 py-3 font-medium text-gray-600">Name</th>
                  <th className="px-4 py-3 font-medium text-gray-600">Email</th>
                  <th className="px-4 py-3 font-medium text-gray-600">Total</th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">Date</th>
                  <th className="px-4 py-3 font-medium text-right text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dashOrders.map((order) => (
                  <tr key={order._id}>
                    <td className="px-4 py-3">{order._id.slice(1, 6)}</td>
                    <td className="px-4 py-3 font-bold">
                      {order.shippingAddress.fullName}
                    </td>
                    <td className="px-4 py-3">{order.userEmail}</td>
                    <td className="px-4 py-3">
                      ${order.totalAmount.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={order.status || "Pending"} // default to Pending
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                        className="text-sm p-1 border rounded"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Canceled">Canceled</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      {new Date(order.orderDate).toISOString().split("T")[0]}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="hover:underline mr-2 p-1 rounded bg-blue-800 text-white">
                        Detail
                      </button>
                      <div className="relative inline-block text-left">
                        <button className="text-gray-600 font-bold p-1 hover:text-gray-800 rounded border border-blue-800">
                          ...
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Pagination />
    </div>
  );
};

export default OrdersSide;
