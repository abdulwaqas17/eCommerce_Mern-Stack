// import React from 'react';
// import { FaHome, FaShoppingBag, FaShoppingCart, FaStore, FaPlusSquare, FaMoneyBillWave, FaUser, FaComments, FaStar, FaCog, FaTags } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md overflow-y-auto">
//       {/* Top Section */}
//       <div className="flex justify-between items-center p-4">
        
//           <img src=" //ap-medilazar.myshopify.com/cdn/shop/files/logo.png" alt="Dashboard"  />
         
//         <button className="text-gray-600">
//           <i className="material-icons">menu_open</i>
//         </button>
//       </div>

//       {/* Navigation Menu */}
//       <nav>
//         <ul className="space-y-4">
//           {/* Dashboard Item */}
//           <li className="hover:bg-gray-100 rounded">
//             <Link to="/admindashboard/" className="flex items-center space-x-2 p-3 text-gray-700">
//               <FaHome className="text-xl" />
//               <span>Dashboard</span>
//             </Link>
//           </li>

          // {/* Products Menu with Submenu */}
          // <li className="group hover:bg-gray-100 rounded">
          //   <Link to="/admindashboard/products" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaShoppingBag className="text-xl" />
          //     <span>Products</span>
          //   </Link>
          //   {/* <div className="hidden group-hover:block bg-gray-100 w-full z-10">
          //     <Link to="page-products-list.html" className="block px-4 py-2 text-gray-700">Product List</Link>
          //     <Link to="page-products-grid.html" className="block px-4 py-2 text-gray-700">Product Grid</Link>
          //     <Link to="page-categories.html" className="block px-4 py-2 text-gray-700">Categories</Link>
          //   </div> */}
          // </li>

          // {/* Orders Menu with Submenu */}
          // <li className="group hover:bg-gray-100 rounded">
          //   <Link to="/admindashboard/orders" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaShoppingCart className="text-xl" />
          //     <span>Orders</span>
          //   </Link>
          //   {/* <div className="hidden group-hover:block bg-gray-100 w-full">
          //     <Link to="page-orders-1.html" className="block px-4 py-2 text-gray-700">Order List 1</Link>
          //     <Link to="page-orders-2.html" className="block px-4 py-2 text-gray-700">Order List 2</Link>
          //   </div> */}
          // </li>

          // {/* Sellers Menu with Submenu */}
          // <li className="relative group hover:bg-gray-100 rounded">
          //   <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaStore className="text-xl" />
          //     <span>Sellers</span>
          //   </Link>
          //   {/* <div className=" hidden group-hover:block bg-gray-100 w-full">
          //     <Link to="page-sellers-cards.html" className="block px-4 py-2 text-gray-700">Sellers Cards</Link>
          //     <Link to="page-sellers-list.html" className="block px-4 py-2 text-gray-700">Sellers List</Link>
          //   </div> */}
          // </li>

          // {/* Add Product Menu with Submenu */}
          // <li className="relative group hover:bg-gray-100 rounded">
          //   <Link to="/admindashboard/add-product" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaPlusSquare className="text-xl" />
          //     <span>Add Product</span>
          //   </Link>
          //   {/* <div className=" hidden group-hover:block bg-gray-100 w-full">
          //     <Link to="page-form-product-1.html" className="block px-4 py-2 text-gray-700">Add Product 1</Link>
          //   </div> */}
          // </li>

          // {/* Transactions Menu with Submenu */}
          // <li className="relative group hover:bg-gray-100 rounded">
          //   <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaMoneyBillWave className="text-xl" />
          //     <span>Transactions</span>
          //   </Link>
          //   {/* <div className=" hidden group-hover:block bg-gray-100 w-full">
          //     <Link to="page-transactions-1.html" className="block px-4 py-2 text-gray-700">Transaction 1</Link>
          //   </div> */}
          // </li>

          // {/* Account Menu with Submenu */}
          // <li className="relative group hover:bg-gray-100 rounded">
          //   <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaUser className="text-xl" />
          //     <span>Account</span>
          //   </Link>
          //   {/* <div className=" hidden group-hover:block bg-gray-100 w-full">
          //     <Link to="page-account-login.html" className="block px-4 py-2 text-gray-700">User Login</Link>
          //   </div> */}
          // </li>

          // {/* Reviews */}
          // <li className="hover:bg-gray-100 rounded">
          //   <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaComments className="text-xl" />
          //     <span>Reviews</span>
          //   </Link>
          // </li>

          // {/* Brands */}
          // <li className="hover:bg-gray-100 rounded">
          //   <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaStar className="text-xl" />
          //     <span>Brands</span>
          //   </Link>
          // </li>

          // {/* Settings */}
          // <li className="relative group hover:bg-gray-100 rounded">
          //   <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaCog className="text-xl" />
          //     <span>Settings</span>
          //   </Link>
          //   {/* <div className="hidden group-hover:block bg-gray-100 w-full">
          //     <Link to="page-settings-1.html" className="block px-4 py-2 text-gray-700">Setting Sample 1</Link>
          //     <Link to="page-settings-2.html" className="block px-4 py-2 text-gray-700">Setting Sample 2</Link>
          //   </div> */}
          // </li>

          // {/* Starter Page */}
          // <li className="hover:bg-gray-100 rounded">
          //   <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
          //     <FaTags className="text-xl" />
          //     <span>Starter Page</span>
          //   </Link>
          // </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
import React from 'react';
import { FaHome, FaShoppingBag, FaShoppingCart, FaStore, FaPlusSquare, FaMoneyBillWave, FaUser, FaComments, FaStar, FaCog, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed top-0 left-0 h-screen bg-white shadow-md overflow-y-auto z-50 transition-all duration-300 ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'}`}>
      {/* Top Section */}
      <div className="flex justify-between items-center p-4">
        <img src="//ap-medilazar.myshopify.com/cdn/shop/files/logo.png" alt="Dashboard" />
        <button 
          className="text-gray-600 md:hidden"
          onClick={toggleSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-4">
          {/* Dashboard Item */}
          <li className="hover:bg-gray-100 rounded">
            <Link to="/admindashboard/" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaHome className="text-xl" />
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Other menu items remain the same */}
          {/* ... */}
           {/* Products Menu with Submenu */}
          <li className="group hover:bg-gray-100 rounded">
            <Link to="/admindashboard/products" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaShoppingBag className="text-xl" />
              <span>Products</span>
            </Link>
            {/* <div className="hidden group-hover:block bg-gray-100 w-full z-10">
              <Link to="page-products-list.html" className="block px-4 py-2 text-gray-700">Product List</Link>
              <Link to="page-products-grid.html" className="block px-4 py-2 text-gray-700">Product Grid</Link>
              <Link to="page-categories.html" className="block px-4 py-2 text-gray-700">Categories</Link>
            </div> */}
          </li>

          {/* Orders Menu with Submenu */}
          <li className="group hover:bg-gray-100 rounded">
            <Link to="/admindashboard/orders" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaShoppingCart className="text-xl" />
              <span>Orders</span>
            </Link>
            {/* <div className="hidden group-hover:block bg-gray-100 w-full">
              <Link to="page-orders-1.html" className="block px-4 py-2 text-gray-700">Order List 1</Link>
              <Link to="page-orders-2.html" className="block px-4 py-2 text-gray-700">Order List 2</Link>
            </div> */}
          </li>

          {/* Sellers Menu with Submenu */}
          <li className="relative group hover:bg-gray-100 rounded">
            <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaStore className="text-xl" />
              <span>Sellers</span>
            </Link>
            {/* <div className=" hidden group-hover:block bg-gray-100 w-full">
              <Link to="page-sellers-cards.html" className="block px-4 py-2 text-gray-700">Sellers Cards</Link>
              <Link to="page-sellers-list.html" className="block px-4 py-2 text-gray-700">Sellers List</Link>
            </div> */}
          </li>

          {/* Add Product Menu with Submenu */}
          <li className="relative group hover:bg-gray-100 rounded">
            <Link to="/admindashboard/add-product" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaPlusSquare className="text-xl" />
              <span>Add Product</span>
            </Link>
            {/* <div className=" hidden group-hover:block bg-gray-100 w-full">
              <Link to="page-form-product-1.html" className="block px-4 py-2 text-gray-700">Add Product 1</Link>
            </div> */}
          </li>

          {/* Transactions Menu with Submenu */}
          <li className="relative group hover:bg-gray-100 rounded">
            <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaMoneyBillWave className="text-xl" />
              <span>Transactions</span>
            </Link>
            {/* <div className=" hidden group-hover:block bg-gray-100 w-full">
              <Link to="page-transactions-1.html" className="block px-4 py-2 text-gray-700">Transaction 1</Link>
            </div> */}
          </li>

          {/* Account Menu with Submenu */}
          <li className="relative group hover:bg-gray-100 rounded">
            <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaUser className="text-xl" />
              <span>Account</span>
            </Link>
            {/* <div className=" hidden group-hover:block bg-gray-100 w-full">
              <Link to="page-account-login.html" className="block px-4 py-2 text-gray-700">User Login</Link>
            </div> */}
          </li>

          {/* Reviews */}
          <li className="hover:bg-gray-100 rounded">
            <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaComments className="text-xl" />
              <span>Reviews</span>
            </Link>
          </li>

          {/* Brands */}
          <li className="hover:bg-gray-100 rounded">
            <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaStar className="text-xl" />
              <span>Brands</span>
            </Link>
          </li>

          {/* Settings */}
          <li className="relative group hover:bg-gray-100 rounded">
            <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaCog className="text-xl" />
              <span>Settings</span>
            </Link>
            {/* <div className="hidden group-hover:block bg-gray-100 w-full">
              <Link to="page-settings-1.html" className="block px-4 py-2 text-gray-700">Setting Sample 1</Link>
              <Link to="page-settings-2.html" className="block px-4 py-2 text-gray-700">Setting Sample 2</Link>
            </div> */}
          </li>

          {/* Starter Page */}
          <li className="hover:bg-gray-100 rounded">
            <Link to="#" className="flex items-center space-x-2 p-3 text-gray-700">
              <FaTags className="text-xl" />
              <span>Starter Page</span>
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
