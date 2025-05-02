import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination';

const OrdersSide = () => {

      let [orders, setOrders] = useState([]);
    
       useEffect(() => {
          
      
          const fetchData = async () => {
            try {
             
              let res = await fetch("http://localhost:3000/dashboard/orders");
      
              let data = await res.json();
      
              console.log(data);
      
              setOrders(data.orders);
            } catch (err) {
              console.log(err);
            }
          };
      
          fetchData();
        }, []);

  return (
    <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
  {/* Left Side: Title and Description */}
  <div>
    <h2 className="text-2xl font-semibold text-gray-800">Order List</h2>
    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
  </div>

  {/* Right Side: Search Bar */}
  <div>
    <input
      type="text"
      placeholder="Search order ID"
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm w-full md:w-64"
    />
  </div>
       </div>

       <div className="bg-white shadow rounded-lg mb-6">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded-md w-full md:w-1/3"
          />
        <div className='grow flex gap-4 justify-end'>
        <select className="border px-3 py-2 rounded-md w-full md:w-[150px]">Status
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

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-600">#ID</th>
              <th className="px-4 py-3 font-medium text-gray-600">Name</th>
              <th className="px-4 py-3 font-medium text-gray-600">Email</th>
              <th className="px-4 py-3 font-medium text-gray-600">Total</th>
              <th className="px-4 py-3 font-medium text-gray-600">Status</th>
              <th className="px-4 py-3 font-medium text-gray-600">Date</th>
              <th className="px-4 py-3 font-medium text-right text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-3">{order._id.slice(1,6)}</td>
                <td className="px-4 py-3 font-bold">{order.shippingAddress.fullName}</td>
                <td className="px-4 py-3">{order.userEmail}</td>
                <td className="px-4 py-3">${order.totalAmount.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "Canceled"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3"> {new Date(order.orderDate).toISOString().split('T')[0]}</td>
                <td className="px-4 py-3 text-right">
                  <button className=" hover:underline mr-2  p-1 rounded bg-blue-800 text-white">Detail</button>
                  <div className="relative inline-block text-left">
                    <button className="text-gray-600 font-bold p-1 hover:text-gray-800 rounded border border-blue-800">...</button>
                    {/* Dropdown menu can be added with state logic if needed */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


    <Pagination />

    </div>
  )
}

export default OrdersSide
