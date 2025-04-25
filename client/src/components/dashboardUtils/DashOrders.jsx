import React from 'react';

const orders = [
  {
    id: '#SK2540',
    name: 'Neal Matthews',
    date: '07 Oct, 2022',
    total: '$400',
    status: 'Paid',
    method: 'Mastercard',
  },
  {
    id: '#SK2541',
    name: 'Jamal Burnett',
    date: '07 Oct, 2022',
    total: '$380',
    status: 'Chargeback',
    method: 'Visa',
  },
  {
    id: '#SK2542',
    name: 'Juan Mitchell',
    date: '06 Oct, 2022',
    total: '$384',
    status: 'Paid',
    method: 'Paypal',
  },
  {
    id: '#SK2543',
    name: 'Barry Dick',
    date: '05 Oct, 2022',
    total: '$412',
    status: 'Paid',
    method: 'Mastercard',
  },
  {
    id: '#SK2544',
    name: 'Ronald Taylor',
    date: '04 Oct, 2022',
    total: '$404',
    status: 'Refund',
    method: 'Visa',
  },
  {
    id: '#SK2545',
    name: 'Jacob Hunter',
    date: '04 Oct, 2022',
    total: '$392',
    status: 'Paid',
    method: 'Paypal',
  },
];

const statusColors = {
  Paid: 'text-green-600 bg-green-100',
  Chargeback: 'text-red-600 bg-red-100',
  Refund: 'text-yellow-600 bg-yellow-100',
};

const DashOrders = () => {
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
          <input type="date" className="border border-gray-300 rounded-md px-3 py-1 text-sm" />
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
            <option>Status</option>
            <option>All</option>
            <option>Paid</option>
            <option>Chargeback</option>
            <option>Refund</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 text-center">
                <input type="checkbox" />
              </th>
              <th className="p-2">Order ID</th>
              <th className="p-2">Billing Name</th>
              <th className="p-2">Date</th>
              <th className="p-2">Total</th>
              <th className="p-2">Payment Status</th>
              <th className="p-2">Payment Method</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="border-t">
                <td className="text-center p-2">
                  <input type="checkbox" />
                </td>
                <td className="p-2 font-semibold text-blue-600">{order.id}</td>
                <td className="p-2">{order.name}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">{order.total}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status] || 'bg-gray-100 text-gray-600'}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-2">{order.method}</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline text-xs">View details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashOrders;
