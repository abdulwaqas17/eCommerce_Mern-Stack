import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUpload, FiX } from "react-icons/fi";

const AddProductSide = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    type: "",
    category: "",
    useFor: "",
    price: "",
    stock: "",
    image1: null,
    image2: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductDetails((prev) => ({
        ...prev,
        [e.target.name]: file,
      }));
    }
  };

  const removeImage = (imageName) => {
    setProductDetails((prev) => ({
      ...prev,
      [imageName]: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const { name, price, stock, type, category, useFor, image1, image2 } = productDetails;

    if (
      !name?.trim() ||
      !price ||
      !stock ||
      !type?.trim() ||
      !category?.trim() ||
      !useFor?.trim() ||
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

    const token = window.localStorage.getItem("adminToken");

    try {
      setIsSubmitting(true);
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
          useFor: "",
          price: "",
          stock: "",
          image1: null,
          image2: null,
        });
      } else {
        toast.error(data.message || "Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Add New Product</h2>
          <p className="text-gray-500 text-sm">Fill in the details below to add a new product</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Save to draft
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-blue-600 text-white rounded px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Publish Product"}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content - Left Side */}
        <div className="w-full lg:w-9/12 space-y-6">
          {/* Basic Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-200 p-4 bg-gray-50">
              <h4 className="text-lg font-medium text-gray-800">Basic Information</h4>
            </div>
            <div className="p-4 md:p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={productDetails.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Enter detailed product description"
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Regular price <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={productDetails.price}
                        name="price"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Stock <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Quantity"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="stock"
                      onChange={handleChange}
                      value={productDetails.stock}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={productDetails.type}
                      name="type"
                      onChange={handleChange}
                    >
                      <option value="">Select type</option>
                      <option value="Popular">Popular</option>
                      <option value="Trending">Trending</option>
                      <option value="Recent">Recent</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Make a template</span>
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Shipping Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-200 p-4 bg-gray-50">
              <h4 className="text-lg font-medium text-gray-800">Shipping Information</h4>
            </div>
            <div className="p-4 md:p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="0.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">in</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="0.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">in</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">g</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shipping fees</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                    <input
                      type="text"
                      placeholder="0.00"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="w-full lg:w-3/12 space-y-6">
          {/* Media Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-200 p-4 bg-gray-50">
              <h4 className="text-lg font-medium text-gray-800">Media</h4>
            </div>
            <div className="p-4 md:p-6 space-y-4">
              {['image1', 'image2'].map((imageName, index) => (
                <div key={imageName} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {index === 0 ? 'Primary Image' : 'Secondary Image'} <span className="text-red-500">*</span>
                  </label>
                  {productDetails[imageName] ? (
                    <div className="relative group">
                      <img
                        src={URL.createObjectURL(productDetails[imageName])}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-40 object-cover rounded-md border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(imageName)}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FiX className="text-red-500" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG (Max. 5MB)</p>
                      </div>
                      <input
                        type="file"
                        name={imageName}
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Organization Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-200 p-4 bg-gray-50">
              <h4 className="text-lg font-medium text-gray-800">Organization</h4>
            </div>
            <div className="p-4 md:p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="category"
                  onChange={handleChange}
                  value={productDetails.category}
                >
                  <option value="">Select category</option>
                  <option value="Diagnostic">Diagnostic</option>
                  <option value="Supplement">Supplement</option>
                  <option value="Health Care">Health Care</option>
                  <option value="Beauty">Beauty</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sub-category <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="useFor"
                  onChange={handleChange}
                  value={productDetails.useFor}
                >
                  <option value="">Select sub-category</option>
                  <option value="Respiratory">Respiratory</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Covid Protection">Covid Protection</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                <input
                  type="text"
                  placeholder="Add tags separated by commas"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProductSide;
