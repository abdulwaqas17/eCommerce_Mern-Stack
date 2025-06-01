// import React, { useState } from 'react';
// import { FaSearch, FaBell, FaMoon, FaExpand, FaUserCircle, FaLanguage, FaSignOutAlt } from 'react-icons/fa';

// const TopNav = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <header className="main-header navbar flex justify-between items-center p-4 bg-white shadow-md">
//       {/* Search Form */}
//       <div className="col-search flex-1">
//         <form className="searchform flex items-center space-x-2">
//           <div className="input-group flex items-center border p-2 rounded-lg">
//             <input
//               list="search_terms"
//               type="text"
//               className="form-control p-2 rounded-l-lg border-0"
//               placeholder="Search term"
//             />
//             <button className="btn btn-light bg-light p-2 rounded-r-lg" type="button">
//               <FaSearch />
//             </button>
//           </div>
//           <datalist id="search_terms">
//             <option value="Products" />
//             <option value="New orders" />
//             <option value="Apple iphone" />
//             <option value="Ahmed Hassan" />
//           </datalist>
//         </form>
//       </div>

//       {/* Navbar Items */}
//       <div className="col-nav flex items-center space-x-4">
//         {/* Menu Button */}
//         <button className="btn btn-icon btn-mobile me-auto" data-trigger="#offcanvas_aside">
//           <FaExpand />
//         </button>

//         {/* Notifications */}
//         <div className="nav-item relative">
//           <a className="nav-link btn-icon" href="#">
//             <FaBell className="text-xl" />
//             <span className="badge absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs px-2 py-1">3</span>
//           </a>
//         </div>

//         {/* Dark Mode Toggle */}
//         <div className="nav-item">
//           <button onClick={toggleDarkMode} className="btn-icon">
//             <FaMoon className="text-xl" />
//           </button>
//         </div>

//         {/* Fullscreen */}
//         <div className="nav-item">
//           <a href="#" className="requestfullscreen nav-link btn-icon">
//             <FaExpand className="text-xl" />
//           </a>
//         </div>

//         {/* Language Dropdown */}
//         <div className="dropdown nav-item relative">
//           <button className="dropdown-toggle btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
//             <FaLanguage className="text-xl" />
//           </button>
//           <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLanguage">
//             <a className="dropdown-item text-brand" href="#">
//               <img src="assets/imgs/theme/flag-us.png" alt="English" className="w-4 h-4 mr-2" />
//               English
//             </a>
//             <a className="dropdown-item" href="#">
//               <img src="assets/imgs/theme/flag-fr.png" alt="Français" className="w-4 h-4 mr-2" />
//               Français
//             </a>
//             <a className="dropdown-item" href="#">
//               <img src="assets/imgs/theme/flag-jp.png" alt="日本語" className="w-4 h-4 mr-2" />
//               日本語
//             </a>
//             <a className="dropdown-item" href="#">
//               <img src="assets/imgs/theme/flag-cn.png" alt="中文" className="w-4 h-4 mr-2" />
//               中文
//             </a>
//           </div>
//         </div>

//         {/* User Profile Dropdown */}
//         <div className="dropdown nav-item relative">
//           <a
//             className="dropdown-toggle btn-icon"
//             data-bs-toggle="dropdown"
//             href="#"
//             aria-expanded="false"
//           >
//             <img
//               className="img-xs rounded-circle"
//               src="assets/imgs/people/avatar2.jpg"
//               alt="User"
//               width="30"
//               height="30"
//             />
//           </a>
//           <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownAccount">
//             <a className="dropdown-item" href="#">
//               <FaUserCircle className="mr-2" />
//               Edit Profile
//             </a>
//             <a className="dropdown-item" href="#">
//               <FaUserCircle className="mr-2" />
//               Account Settings
//             </a>
//             <a className="dropdown-item" href="#">
//               <FaUserCircle className="mr-2" />
//               Wallet
//             </a>
//             <a className="dropdown-item" href="#">
//               <FaUserCircle className="mr-2" />
//               Billing
//             </a>
//             <a className="dropdown-item" href="#">
//               <FaUserCircle className="mr-2" />
//               Help center
//             </a>
//             <div className="dropdown-divider"></div>
//             <a className="dropdown-item text-danger" href="#">
//               <FaSignOutAlt className="mr-2" />
//               Logout
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopNav;
import React from 'react';
import {
  FaSearch,
  FaBell,
  FaMoon,
  FaExpand,
  FaUserCircle,
  FaLanguage,
  FaSignOutAlt
} from 'react-icons/fa';

const TobNav = () => {
  return (
    <header className=" flex justify-between items-center px-6 py-3 bg-white shadow-md">
      {/* Search Form */}
      <div className="flex-1">
        <form className="flex items-center max-w-md w-full h-[40px]">
          <input
            type="text"
            placeholder="Search term"
            className="h-[40px] flex-grow border p-2 border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            type="button"
            className="h-[40px] bg-gray-100 border p-2 border-l-0 border-gray-300 rounded-r-md"
          >
            <FaSearch className="text-gray-600" />
          </button>
        </form>
      </div>

      {/* Nav Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black">
          <FaExpand size={18} />
        </button>

        <div className="relative">
          <button className="text-gray-600 hover:text-black">
            <FaBell size={18} />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>

        <button className="text-gray-600 hover:text-black">
          <FaMoon size={18} />
        </button>

        <button className="text-gray-600 hover:text-black">
          <FaLanguage size={18} />
        </button>

        <button className="text-gray-600 hover:text-black">
          <img
            src="/images/asset 74.png"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
    </header>
  );
};

export default TobNav;
