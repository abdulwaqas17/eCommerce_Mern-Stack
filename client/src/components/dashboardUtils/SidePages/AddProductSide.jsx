import React, { useState } from "react";
import { toast } from "react-toastify"; // ✅ Toasts instead of alerts
import "react-toastify/dist/ReactToastify.css";

const AddProductSide = () => {
  let [productDetails, setProductDetails] = useState({
    name: "",
    type: "",
    category: "",
    subCategory: "",
    price: "",
    stock: "",
    image1: null,
    image2: null,
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProductDetails((prevoius) => ({ ...prevoius, [name]: value }));
  };

  let handleImageChange = (e) => {
    setProductDetails((prevoius) => ({
      ...prevoius,
      [e.target.name]: e.target.files[0],
    }));
  };

  console.log(productDetails);
  
 const handleSubmit = async (e) => {
  e.preventDefault();

  const {
    name,
    price,
    stock,
    type,
    category,
    subCategory,
    image1,
    image2,
  } = productDetails;

  if (
    !name?.trim() ||
    !price ||
    !stock ||
    !type?.trim() ||
    !category?.trim() ||
    !subCategory?.trim() ||
    !image1 ||
    !image2
  ) {
    toast.error("Kindly fill all the details.");
    return;
  }

  const formDataToSend = new FormData();
  for (const key in productDetails) {
    formDataToSend.append(key, productDetails[key]);
  }

  let token = window.localStorage.getItem("adminToken");

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/dashboard/admin/add-product`,
      {
        method: "POST",
        body: formDataToSend,
        headers: {
          authorization: `Bearer ${token}`,
          role: "admin",
        },
      }
    );

    const data = await res.json();
    if (res.ok) {
      toast.success(data.message || "Product added successfully!");
      setProductDetails({
    name: "",
    type: "",
    category: "",
    subCategory: "",
    price: "",
    stock: "",
    image1: null,
    image2: null,
  })
    } else {
      toast.error(data.message || "Failed to add product.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong. Please try again.");
  }
};

  return (
    <section className="p-4">
      <div className="flex justify-between items-center mb-6 w-full">
        <h2 className="text-2xl font-semibold">Add New Product</h2>
        <div className="space-x-3">
          <button className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-200 text-sm">
            Save to draft
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 text-sm"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-9/12 px-4">
          {/* Basic Section */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="border-b p-4">
              <h4 className="text-lg font-medium">Basic</h4>
            </div>
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <label className="block mb-1">Product title</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="w-full border rounded px-3 py-2"
                    value={productDetails.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Full description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    rows="4"
                    placeholder="Type here"
                  ></textarea>
                </div>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full lg:w-1/3 px-2 mb-4">
                    <label className="block mb-1">Regular price</label>
                    <input
                      type="number"
                      placeholder="1000"
                      className="w-full border rounded px-3 py-2"
                      value={productDetails.price}
                      name="price"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full lg:w-1/3 px-2 mb-4">
                    <label className="block mb-1">Stock</label>
                    <input
                      type="number"
                      placeholder="10"
                      className="w-full border rounded px-3 py-2"
                      name="stock"
                      onChange={handleChange}
                      value={productDetails.stock}
                    />
                  </div>
                  <div className="w-full lg:w-1/3 px-2 mb-4">
                    <label className="block mb-1">Type</label>
                    <select
                      className="w-full border rounded px-3 py-2"
                      value={productDetails.type}
                      name="type"
                      onChange={handleChange}
                    >
                      <option value="Popular">Popular</option>
                      <option value="Trending">Trending</option>
                      <option value="Recent">Recent</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Tax rate</label>
                  <input
                    type="text"
                    placeholder="%"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <label className="flex items-center mb-4">
                  <input type="checkbox" className="mr-2" />
                  <span>Make a template</span>
                </label>
              </form>
            </div>
          </div>

          {/* Shipping Section */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="border-b p-4">
              <h4 className="text-lg font-medium">Shipping</h4>
            </div>
            <div className="p-4">
              <form>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block mb-1">Width</label>
                    <input
                      type="text"
                      placeholder="inch"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <label className="block mb-1">Height</label>
                    <input
                      type="text"
                      placeholder="inch"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Weight</label>
                  <input
                    type="text"
                    placeholder="gram"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Shipping fees</label>
                  <input
                    type="text"
                    placeholder="$"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-3/12 px-4">
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="border-b p-4">
              <h4 className="text-lg font-medium">Media</h4>
            </div>
            <div className="p-4">
              <div className=" p-4 text-center">
                <img
                  src="/images/uploadImg.svg"
                  alt="upload"
                  className="mx-auto mb-2"
                />
                <input
                  type="file"
                  name="image1"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mb-[5px] cursor-pointer w-full text-sm text-[#4f5d77] bg-[#f4f5f9] border-2 border-gray-200 h-[45px]"
                />
                <input
                  type="file"
                  name="image2"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer w-full text-sm text-[#4f5d77] bg-[#f4f5f9] border-2 border-gray-200 h-[45px]"
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg mb-6">
            <div className="border-b p-4">
              <h4 className="text-lg font-medium">Organization</h4>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label className="block mb-1 text-sm">Category</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    name="category"
                    onChange={handleChange}
                    value={productDetails.category}
                  >
                    <option value="Diagnostic">Diagnostic</option>
                    <option value="Supplement">Supplement</option>
                    <option value="Health Care">Health Care</option>
                    <option value="Beauty">Beauty</option>
                  </select>
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label className="block mb-1 text-sm">Sub-category</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    name="subCategory"
                    onChange={handleChange}
                    value={productDetails.subCategory}
                  >
                    <option value="Respiratory">Respiratory</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Covid Protection">Covid Protection</option>
                  </select>
                </div>
                <div className="w-full px-2">
                  <label className="block mb-1">Tags</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProductSide;
