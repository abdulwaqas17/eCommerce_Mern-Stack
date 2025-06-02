// import React, { useEffect, useState } from "react";
// import Pagination from "../Pagination";
// import { motion } from "framer-motion";
// import useProducts from "../../../utils/useProducts";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";

// const ProductsSide = () => {
//   const { products, loading, error } = useProducts();
//   const [dashProducts, setDashProducts] = useState([]);
//   const [editProduct, setEditProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [confirmDelete, setConfirmDelete] = useState({
//     show: false,
//     id: null,
//     name: "",
//   });

//   useEffect(() => {
//     setDashProducts(products);
//   }, [products]);

//   const handleDeleteProduct = (productId, productName) => {
//     Swal.fire({
//       title: `Delete "${productName}"?`,
//       text: "Are you sure you want to delete this product?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const token = localStorage.getItem("adminToken");

//         try {
//           const res = await fetch(
//             `${import.meta.env.VITE_API_URL}/product/delete/${productId}`,
//             {
//               method: "DELETE",
//               headers: {
//                 "Content-Type": "application/json",
//                 authorization: `Bearer ${token}`,
//                 role: "admin",
//               },
//             }
//           );

//           const data = await res.json();
//           if (res.ok && data.success) {
//             Swal.fire("Deleted!", data.message, "success");
//             setDashProducts((prev) =>
//               prev.filter((item) => item._id !== productId)
//             );
//           } else {
//             Swal.fire(
//               "Error!",
//               data.message || "Failed to delete product",
//               "error"
//             );
//           }
//         } catch (err) {
//           console.error("Error deleting product:", err);
//           Swal.fire("Error!", "Something went wrong!", "error");
//         }
//       }
//     });
//   };

//   const handleEditProduct = (productId) => {
//     const productToEdit = dashProducts.find((p) => p._id === productId);
//     if (productToEdit) {
//       setEditProduct(productToEdit);
//       setShowModal(true);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("adminToken");

//     // === Validation ===
//   if (!editProduct.name || !editProduct.price || !editProduct.imageFile) {
//     toast.error("Please fill all required fields: name, price, and image");
//     return; // Stop further execution
//   }

//     const formData = new FormData();
//     formData.append("name", editProduct.name);
//     formData.append("price", editProduct.price);
//     if (editProduct.imageFile) {
//       formData.append("image", editProduct.imageFile);
//     }

//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_URL}/product/update/${editProduct._id}`,
//         {
//           method: "PUT",
//           headers: {
//             authorization: `Bearer ${token}`,
//             role: "admin",
//           },
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       if (res.ok && data.success) {
//         toast.success(data.message);
//         setShowModal(false);
//         setDashProducts((prev) =>
//           prev.map((p) =>
//             p._id === editProduct._id ? { ...p, ...data.updatedProduct } : p
//           )
//         );
//       } else {
//         toast.error(data.message || "Update failed");
//       }
//     } catch (error) {
//       console.error("Update failed:", error);
//       toast.error("Error updating product");
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-3xl font-bold">Products List</h2>
//           <p className="text-gray-500 dark:text-gray-400">
//             List of all products
//           </p>
//         </div>
//         <div className="space-x-2">
//           <button className="btn btn-light border-blue-900 border rounded px-3 py-1">
//             Export
//           </button>
//           <button className="btn btn-light border-blue-900 border rounded px-3 py-1">
//             Import
//           </button>
//           <button className="btn btn-primary border-blue-900 border rounded px-3 py-1">
//             Create new
//           </button>
//         </div>
//       </div>

//       <section className="p-6 bg-white dark:bg-gray-900">
//         <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-6">
//           <div className="flex flex-wrap items-center gap-4">
//             <div>
//               <input type="checkbox" className="form-checkbox" />
//             </div>
//             <div className="flex-1 min-w-[200px]">
//               <select className="form-select w-full">
//                 <option>All category</option>
//                 <option>Electronics</option>
//                 <option>Clothes</option>
//                 <option>Automobile</option>
//               </select>
//             </div>
//             <div>
//               <input type="date" className="form-input w-full" />
//             </div>
//             <div>
//               <select className="form-select w-full">
//                 <option>Status</option>
//                 <option>Active</option>
//                 <option>Disabled</option>
//                 <option>Show all</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {dashProducts.map((item) => (
//           <div
//             key={item._id}
//             className="flex flex-wrap items-center border-b py-4 last:border-0"
//           >
//             <input type="checkbox" className="form-checkbox px-2" />
//             <div className="flex-1 flex items-center gap-3 min-w-[200px]">
//               <img
//                 src={item.image1}
//                 className="w-16 h-16 object-cover rounded"
//                 alt="Item"
//               />
//               <h6 className="font-medium">{item.name}</h6>
//             </div>
//             <div className="w-28 text-gray-700 font-medium">${item.price}</div>
//             <div className="w-28">
//               <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
//                 Active
//               </span>
//             </div>
//             <div className="w-28 text-sm text-gray-500">02.11.2022</div>
//             <div className="w-36 text-end space-x-1 flex gap-[20px] justify-center">
//               <button
//                 className="btn btn-brand btn-sm text-green-700 font-bold cursor-pointer"
//                 onClick={() => handleEditProduct(item._id)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn btn-light btn-sm text-red-700 font-bold cursor-pointer"
//                 onClick={() =>
//                   setConfirmDelete({
//                     show: true,
//                     id: item._id,
//                     name: item.name,
//                   })
//                 }
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}

//         {showModal && editProduct && (
//           <div className="z-20 fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center">
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-md shadow-xl relative"
//             >
//               <h2 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
//                 Edit Product
//               </h2>
//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     className="w-full border px-3 py-2 rounded-xl"
//                     placeholder="Name"
//                     value={editProduct.name}
//                     onChange={(e) =>
//                       setEditProduct({ ...editProduct, name: e.target.value })
//                     }
//                   />
//                   <input
//                     type="number"
//                     className="w-full border px-3 py-2 rounded-xl"
//                     placeholder="Price"
//                     value={editProduct.price}
//                     onChange={(e) =>
//                       setEditProduct({ ...editProduct, price: e.target.value })
//                     }
//                   />
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="w-full border px-3 py-2 rounded-xl"
//                     onChange={(e) =>
//                       setEditProduct({
//                         ...editProduct,
//                         imageFile: e.target.files[0],
//                       })
//                     }
//                   />
//                   {editProduct.image1 && (
//                     <img
//                       src={editProduct.image1}
//                       alt="Current"
//                       className="w-20 h-20 rounded object-cover"
//                     />
//                   )}
//                 </div>

//                 <div className="flex justify-end mt-4 gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                     className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
//                   >
//                     Update
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         )}

//         {/* Custom Delete Confirmation Modal */}
//         {confirmDelete.show && (
//           <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-sm w-full">
//               <h3 className="text-lg font-semibold mb-4">
//                 Are you sure you want to delete{" "}
//                 <span className="text-red-600">{confirmDelete.name}</span>?
//               </h3>
//               <div className="flex justify-end gap-3">
//                 <button
//                   onClick={() =>
//                     setConfirmDelete({ show: false, id: null, name: "" })
//                   }
//                   className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-black"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="btn btn-light btn-sm text-red-700 font-bold cursor-pointer"
//                   onClick={() => handleDeleteProduct(item._id, item.name)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       <Pagination />
//     </div>
//   );
// };

// export default ProductsSide;
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaFileExport, FaFileImport, FaPlus, FaTimes } from "react-icons/fa";
import { FiCheck, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import useProducts from "../../../utils/useProducts";
import { toast } from "react-toastify";
import Pagination from "../Pagination";
import Swal from "sweetalert2";

const ProductsSide = () => {
  const { products, loading, error } = useProducts();
  const [dashProducts, setDashProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    setDashProducts(products);
  }, [products]);

  const handleDeleteProduct = (productId, productName) => {
    setProductToDelete({ id: productId, name: productName });
    setConfirmDelete(true);
  };

  const confirmDeleteAction = async () => {
    if (!productToDelete) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/product/delete/${productToDelete.id}`,
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
        toast.success(data.message);
        setDashProducts((prev) =>
          prev.filter((item) => item._id !== productToDelete.id)
        );
      } else {
        toast.error(data.message || "Failed to delete product");
      }
    } catch (err) {
      console.error("Error deleting product:", err);
      toast.error("Something went wrong!");
    } finally {
      setConfirmDelete(false);
      setProductToDelete(null);
    }
  };

  const handleEditProduct = (productId) => {
    const productToEdit = dashProducts.find((p) => p._id === productId);
    if (productToEdit) {
      setEditProduct({ ...productToEdit, imageFile: null });
      setShowModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    if (!editProduct.name || !editProduct.price) {
      toast.error("Please fill all required fields: name and price");
      return;
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
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Products List</h2>
          <p className="text-gray-500">List of all products</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 border border-blue-900 rounded px-3 py-1 text-sm md:text-base">
            <FaFileExport className="text-blue-900" /> Export
          </button>
          <button className="flex items-center gap-2 border border-blue-900 rounded px-3 py-1 text-sm md:text-base">
            <FaFileImport className="text-blue-900" /> Import
          </button>
          <button className="flex items-center gap-2 bg-blue-900 text-white rounded px-3 py-1 text-sm md:text-base">
            <FaPlus /> Create new
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <section className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
          <div className="items-center md:flex hidden">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
          </div>
          <div className="flex-1 w-full min-w-[200px]">
            <select className="w-full p-2 border rounded-md">
              <option>All category</option>
              <option>Electronics</option>
              <option>Clothes</option>
              <option>Automobile</option>
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <input type="date" className="w-full p-2 border rounded-md" />
          </div>
          <div className="w-full sm:w-auto">
            <select className="w-full p-2 border rounded-md">
              <option>Status</option>
              <option>Active</option>
              <option>Disabled</option>
              <option>Show all</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="form-checkbox h-4 w-4" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dashProducts.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <input type="checkbox" className="form-checkbox h-4 w-4" />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded object-cover"
                          src={item.image1}
                          alt={item.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${item.price}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    02.11.2022
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => handleEditProduct(item._id)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit"
                      >
                        <FaEdit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(item._id, item.name)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <FaTrashAlt className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      
{/* Edit Modal */}
<AnimatePresence>
  {showModal && editProduct && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      {/* Backdrop - lower z-index */}
      <div 
        className="fixed inset-0 transition-opacity bg-gray-500 opacity-75"
        aria-hidden="true"
        onClick={() => setShowModal(false)}
      ></div>
      
      {/* Modal container - higher z-index */}
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
       <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Edit Product
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <FaTimes className="h-5 w-5" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Product name"
                          value={editProduct.name}
                          onChange={(e) =>
                            setEditProduct({ ...editProduct, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Price"
                          value={editProduct.price}
                          onChange={(e) =>
                            setEditProduct({ ...editProduct, price: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                          Product Image
                        </label>
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          onChange={(e) =>
                            setEditProduct({
                              ...editProduct,
                              imageFile: e.target.files[0],
                            })
                          }
                        />
                        {editProduct.image1 && !editProduct.imageFile && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">Current Image:</p>
                            <img
                              src={editProduct.image1}
                              alt="Current product"
                              className="mt-1 h-20 w-20 object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-1 sm:text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                      >
                        Update Product
                      </button>
                    </div>
                  </form>
                </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

{/* Delete Confirmation Modal */}
<AnimatePresence>
  {confirmDelete && productToDelete && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      {/* Backdrop - lower z-index */}
      <div 
        className="fixed inset-0 transition-opacity bg-gray-500 opacity-75"
        aria-hidden="true"
        onClick={() => setConfirmDelete(false)}
      ></div>
      
      {/* Modal container - higher z-index */}
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <FaTrashAlt className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Delete Product
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete <span className="font-semibold">{productToDelete.name}</span>? This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={confirmDeleteAction}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setConfirmDelete(false);
                      setProductToDelete(null);
                    }}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
         </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      <Pagination />
    </div>
  );
};

export default ProductsSide;


      // {/* Edit Modal */}
      // <AnimatePresence>
      //   {showModal && editProduct && (
      //     <motion.div
      //       initial={{ opacity: 0 }}
      //       animate={{ opacity: 1 }}
      //       exit={{ opacity: 0 }}
      //       className="fixed inset-0 z-500 overflow-y-auto"
      //     >
      //       <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      //         <div className="fixed inset-0 transition-opacity" aria-hidden="true">
      //           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      //         </div>
      //         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      //         <motion.div
      //           initial={{ scale: 0.95, opacity: 0 }}
      //           animate={{ scale: 1, opacity: 1 }}
      //           exit={{ scale: 0.95, opacity: 0 }}
      //           className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      //           role="dialog"
      //           aria-modal="true"
      //           aria-labelledby="modal-headline"
      //         >
      //           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      //             <div className="flex justify-between items-center mb-4">
      //               <h3 className="text-lg leading-6 font-medium text-gray-900">
      //                 Edit Product
      //               </h3>
      //               <button
      //                 onClick={() => setShowModal(false)}
      //                 className="text-gray-400 hover:text-gray-500"
      //               >
      //                 <FaTimes className="h-5 w-5" />
      //               </button>
      //             </div>
      //             <form onSubmit={handleSubmit}>
      //               <div className="space-y-4">
      //                 <div>
      //                   <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      //                     Product Name
      //                   </label>
      //                   <input
      //                     type="text"
      //                     id="name"
      //                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      //                     placeholder="Product name"
      //                     value={editProduct.name}
      //                     onChange={(e) =>
      //                       setEditProduct({ ...editProduct, name: e.target.value })
      //                     }
      //                     required
      //                   />
      //                 </div>
      //                 <div>
      //                   <label htmlFor="price" className="block text-sm font-medium text-gray-700">
      //                     Price
      //                   </label>
      //                   <input
      //                     type="number"
      //                     id="price"
      //                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      //                     placeholder="Price"
      //                     value={editProduct.price}
      //                     onChange={(e) =>
      //                       setEditProduct({ ...editProduct, price: e.target.value })
      //                     }
      //                     required
      //                   />
      //                 </div>
      //                 <div>
      //                   <label htmlFor="image" className="block text-sm font-medium text-gray-700">
      //                     Product Image
      //                   </label>
      //                   <input
      //                     type="file"
      //                     id="image"
      //                     accept="image/*"
      //                     className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      //                     onChange={(e) =>
      //                       setEditProduct({
      //                         ...editProduct,
      //                         imageFile: e.target.files[0],
      //                       })
      //                     }
      //                   />
      //                   {editProduct.image1 && !editProduct.imageFile && (
      //                     <div className="mt-2">
      //                       <p className="text-sm text-gray-500">Current Image:</p>
      //                       <img
      //                         src={editProduct.image1}
      //                         alt="Current product"
      //                         className="mt-1 h-20 w-20 object-cover rounded"
      //                       />
      //                     </div>
      //                   )}
      //                 </div>
      //               </div>
      //               <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
      //                 <button
      //                   type="button"
      //                   onClick={() => setShowModal(false)}
      //                   className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-1 sm:text-sm"
      //                 >
      //                   Cancel
      //                 </button>
      //                 <button
      //                   type="submit"
      //                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
      //                 >
      //                   Update Product
      //                 </button>
      //               </div>
      //             </form>
      //           </div>
      //         </motion.div>
      //       </div>
      //     </motion.div>
      //   )}
      // </AnimatePresence>

      // {/* Delete Confirmation Modal */}
      // <AnimatePresence>
      //   {confirmDelete && productToDelete && (
      //     <motion.div
      //       initial={{ opacity: 0 }}
      //       animate={{ opacity: 1 }}
      //       exit={{ opacity: 0 }}
      //       className="fixed inset-0 z-100 overflow-y-auto"
      //     >
      //       <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      //         <div className="fixed inset-0 transition-opacity" aria-hidden="true">
      //           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      //         </div>
      //         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      //         <motion.div
      //           initial={{ scale: 0.95, opacity: 0 }}
      //           animate={{ scale: 1, opacity: 1 }}
      //           exit={{ scale: 0.95, opacity: 0 }}
      //           className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      //           role="dialog"
      //           aria-modal="true"
      //           aria-labelledby="modal-headline"
      //         >
      //           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      //             <div className="sm:flex sm:items-start">
      //               <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
      //                 <FaTrashAlt className="h-6 w-6 text-red-600" />
      //               </div>
      //               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
      //                 <h3 className="text-lg leading-6 font-medium text-gray-900">
      //                   Delete Product
      //                 </h3>
      //                 <div className="mt-2">
      //                   <p className="text-sm text-gray-500">
      //                     Are you sure you want to delete <span className="font-semibold">{productToDelete.name}</span>? This action cannot be undone.
      //                   </p>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      //             <button
      //               type="button"
      //               onClick={confirmDeleteAction}
      //               className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
      //             >
      //               Delete
      //             </button>
      //             <button
      //               type="button"
      //               onClick={() => {
      //                 setConfirmDelete(false);
      //                 setProductToDelete(null);
      //               }}
      //               className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      //             >
      //               Cancel
      //             </button>
      //           </div>
      //         </motion.div>
      //       </div>
      //     </motion.div>
      //   )}
      // </AnimatePresence>
