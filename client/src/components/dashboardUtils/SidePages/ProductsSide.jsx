import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination'

const ProductsSide = () => {

  let [products, setProducts] = useState([]);

 // 🛠️ DELETE product function
 const deleteProduct = async (productId, productName) => {
  const confirmDelete = window.confirm(`Are you sure you want to delete the product "${productName}"?`);
  
  if (!confirmDelete) return;

  const token = window.localStorage.getItem("adminToken");

  try {
    const res = await fetch(`http://localhost:3000/product/delete/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        role : 'admin'
      },
    });

    const data = await res.json();
    alert(data.message);
    console.log('data ==>',data);
    

    if (res.ok && data.success) {
      // Remove deleted product from state
      setProducts(prev => prev.filter(item => item._id !== productId));
    }

  } catch (err) {
    console.log("Error deleting product:", err);
    alert("Something went wrong!");
  }
};


// useEffect for getting products from db
   useEffect(() => {
      console.log("carts []");
  
      const fetchData = async () => {
        try {
         
          let res = await fetch("http://localhost:3000/products");
  
          let data = await res.json();
  
          console.log(data);
  
          setProducts(data.products);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData();
    }, []);



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
  {products.map((item) => (
    <div
      key={item._id}
      className="flex flex-wrap items-center border-b py-4 last:border-0"
    >
      <div className="px-2">
        <input type="checkbox" className="form-checkbox" />
      </div>
      <div className="flex-1 flex items-center gap-3 min-w-[200px]">
        <img
          src={item.image1}
          className="w-16 h-16 object-cover rounded"
          alt="Item"
        />
        <h6 className="font-medium">
          {item.name}
        </h6>
      </div>
      <div className="w-28 text-gray-700 font-medium">${item.price}</div>
      <div className="w-28">
        <span
          className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700"
             
        >
        
          Active
       
           
        </span>
      </div>
      <div className="w-28 text-sm text-gray-500">02.11.2022</div>
      <div className="w-36 text-end space-x-1">
        <button className="btn btn-brand btn-sm" onClick={()=> editProduct(item._id)}>Edit</button>
        <button className="btn btn-light btn-sm" onClick={()=> deleteProduct(item._id,item.name)}>Delete</button>
      </div>
    </div>
  ))}
</section>

<Pagination />

    </div>
  )
}

export default ProductsSide