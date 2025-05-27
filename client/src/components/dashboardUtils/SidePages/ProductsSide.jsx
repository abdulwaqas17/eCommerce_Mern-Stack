import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { motion } from "framer-motion";
import useProducts from "../../../utils/useProducts";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ProductsSide = () => {
  const { products, loading, error } = useProducts();
  const [dashProducts, setDashProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState({
    show: false,
    id: null,
    name: "",
  });

  useEffect(() => {
    setDashProducts(products);
  }, [products]);

  const handleDeleteProduct = (productId, productName) => {
    Swal.fire({
      title: `Delete "${productName}"?`,
      text: "Are you sure you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("adminToken");

        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/product/delete/${productId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
                role: "admin",
              },
            }
          );

          const data = await res.json();
          if (res.ok && data.success) {
            Swal.fire("Deleted!", data.message, "success");
            setDashProducts((prev) =>
              prev.filter((item) => item._id !== productId)
            );
          } else {
            Swal.fire(
              "Error!",
              data.message || "Failed to delete product",
              "error"
            );
          }
        } catch (err) {
          console.error("Error deleting product:", err);
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      }
    });
  };

  const handleEditProduct = (productId) => {
    const productToEdit = dashProducts.find((p) => p._id === productId);
    if (productToEdit) {
      setEditProduct(productToEdit);
      setShowModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    // === Validation ===
  if (!editProduct.name || !editProduct.price || !editProduct.imageFile) {
    toast.error("Please fill all required fields: name, price, and image");
    return; // Stop further execution
  }

    const formData = new FormData();
    formData.append("name", editProduct.name);
    formData.append("price", editProduct.price);
    if (editProduct.imageFile) {
      formData.append("image", editProduct.imageFile);
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/product/update/${editProduct._id}`,
        {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
            role: "admin",
          },
          body: formData,
        }
      );

      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(data.message);
        setShowModal(false);
        setDashProducts((prev) =>
          prev.map((p) =>
            p._id === editProduct._id ? { ...p, ...data.updatedProduct } : p
          )
        );
      } else {
        toast.error(data.message || "Update failed");
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Error updating product");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">Products List</h2>
          <p className="text-gray-500 dark:text-gray-400">
            List of all products
          </p>
        </div>
        <div className="space-x-2">
          <button className="btn btn-light border-blue-900 border rounded px-3 py-1">
            Export
          </button>
          <button className="btn btn-light border-blue-900 border rounded px-3 py-1">
            Import
          </button>
          <button className="btn btn-primary border-blue-900 border rounded px-3 py-1">
            Create new
          </button>
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

        {dashProducts.map((item) => (
          <div
            key={item._id}
            className="flex flex-wrap items-center border-b py-4 last:border-0"
          >
            <input type="checkbox" className="form-checkbox px-2" />
            <div className="flex-1 flex items-center gap-3 min-w-[200px]">
              <img
                src={item.image1}
                className="w-16 h-16 object-cover rounded"
                alt="Item"
              />
              <h6 className="font-medium">{item.name}</h6>
            </div>
            <div className="w-28 text-gray-700 font-medium">${item.price}</div>
            <div className="w-28">
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                Active
              </span>
            </div>
            <div className="w-28 text-sm text-gray-500">02.11.2022</div>
            <div className="w-36 text-end space-x-1 flex gap-[20px] justify-center">
              <button
                className="btn btn-brand btn-sm text-green-700 font-bold cursor-pointer"
                onClick={() => handleEditProduct(item._id)}
              >
                Edit
              </button>
              <button
                className="btn btn-light btn-sm text-red-700 font-bold cursor-pointer"
                onClick={() =>
                  setConfirmDelete({
                    show: true,
                    id: item._id,
                    name: item.name,
                  })
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {showModal && editProduct && (
          <div className="z-20 fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-md shadow-xl relative"
            >
              <h2 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
                Edit Product
              </h2>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="space-y-4">
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded-xl"
                    placeholder="Name"
                    value={editProduct.name}
                    onChange={(e) =>
                      setEditProduct({ ...editProduct, name: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    className="w-full border px-3 py-2 rounded-xl"
                    placeholder="Price"
                    value={editProduct.price}
                    onChange={(e) =>
                      setEditProduct({ ...editProduct, price: e.target.value })
                    }
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full border px-3 py-2 rounded-xl"
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        imageFile: e.target.files[0],
                      })
                    }
                  />
                  {editProduct.image1 && (
                    <img
                      src={editProduct.image1}
                      alt="Current"
                      className="w-20 h-20 rounded object-cover"
                    />
                  )}
                </div>

                <div className="flex justify-end mt-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                  >
                    Update
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Custom Delete Confirmation Modal */}
        {confirmDelete.show && (
          <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-4">
                Are you sure you want to delete{" "}
                <span className="text-red-600">{confirmDelete.name}</span>?
              </h3>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() =>
                    setConfirmDelete({ show: false, id: null, name: "" })
                  }
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-black"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-light btn-sm text-red-700 font-bold cursor-pointer"
                  onClick={() => handleDeleteProduct(item._id, item.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <Pagination />
    </div>
  );
};

export default ProductsSide;
