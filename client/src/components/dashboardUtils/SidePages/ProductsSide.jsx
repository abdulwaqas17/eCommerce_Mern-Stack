import React from 'react'
import Pagination from '../Pagination'

const ProductsSide = () => {
  return (
    <div>
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-3xl font-bold">Products List</h2>
      <p className="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="space-x-2">
      <button className="btn btn-light border-blue-900 border rounded px-3 py-1">Export</button>
      <button className="btn btn-light border-blue-900 border rounded px-3 py-1">Import</button>
      <button className="btn btn-primary border-blue-900 border rounded px-3 py-1">Create new</button>
    </div>
  </div>
        <section className="p-6 bg-white dark:bg-gray-900">

  <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-6">
    <div className="flex flex-wrap items-center gap-4">
      <div>
        <input type="checkbox" className="form-checkbox" />
      </div>
      <div className="flex-1 min-w-[200px]">
        <select className="form-select w-full">
          <option>All category</option>
          <option>Electronics</option>
          <option>Clothes</option>
          <option>Automobile</option>
        </select>
      </div>
      <div>
        <input type="date" className="form-input w-full" />
      </div>
      <div>
        <select className="form-select w-full">
          <option>Status</option>
          <option>Active</option>
          <option>Disabled</option>
          <option>Show all</option>
        </select>
      </div>
    </div>
  </div>

  {/* Product Item */}
  {[1, 2, 3, 4, 5].map((item, index) => (
    <div
      key={index}
      className="flex flex-wrap items-center border-b py-4 last:border-0"
    >
      <div className="px-2">
        <input type="checkbox" className="form-checkbox" />
      </div>
      <div className="flex-1 flex items-center gap-3 min-w-[200px]">
        <img
          src={`/assets/imgs/items/${item}.jpg`}
          className="w-16 h-16 object-cover rounded"
          alt="Item"
        />
        <h6 className="font-medium">
          {item === 1
            ? "T-shirt for men medium size"
            : item === 2
            ? "Helionic Hooded Down Jacket"
            : item === 3
            ? "Lace mini dress with faux leather"
            : item === 4
            ? "Fanmis Men's Travel Bag"
            : "Jeans Shorts for Men"}
        </h6>
      </div>
      <div className="w-28 text-gray-700 font-medium">${[34.5, 990.99, 76.99, 18, 76.99][index]}</div>
      <div className="w-28">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            index === 3
              ? "bg-green-100 text-green-700"
              : index === 4
              ? "bg-red-100 text-red-700"
              : index === 2
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-700"
          }`}
        >
          {index === 3
            ? "Active"
            : index === 4
            ? "Disabled"
            : index === 2
            ? "Archived"
            : "Active"}
        </span>
      </div>
      <div className="w-28 text-sm text-gray-500">02.11.2022</div>
      <div className="w-36 text-end space-x-1">
        <button className="btn btn-brand btn-sm">Edit</button>
        <button className="btn btn-light btn-sm">Delete</button>
      </div>
    </div>
  ))}
</section>

<Pagination />

    </div>
  )
}

export default ProductsSide