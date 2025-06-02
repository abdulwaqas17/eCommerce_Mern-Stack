// import {
//   FaSearch,
//   FaBell,
//   FaMoon,
//   FaExpand,
//   FaUserCircle,
//   FaLanguage,
//   FaSignOutAlt,
//   FaBars
// } from 'react-icons/fa';

// const TopNav = ({ toggleSidebar }) => {
//   return (
//     <header className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
//       {/* Mobile menu button */}
//       <button 
//         className="md:hidden text-gray-600 mr-4"
//         onClick={toggleSidebar}
//       >
//         <FaBars size={18} />
//       </button>

//       {/* Search Form */}
//       <div className="flex-1">
//         <form className="flex items-center max-w-md w-full h-[40px]">
//           <input
//             type="text"
//             placeholder="Search term"
//             className="h-[40px] flex-grow border p-2 border-gray-300 rounded-l-md focus:outline-none"
//           />
//           <button
//             type="button"
//             className="h-[40px] bg-gray-100 border p-2 border-l-0 border-gray-300 rounded-r-md"
//           >
//             <FaSearch className="text-gray-600" />
//           </button>
//         </form>
//       </div>

//       {/* Rest of the code remains the same */}
//       {/* ... */}
//             {/* Nav Icons */}
//       <div className="flex items-center space-x-4">
//         <button className="text-gray-600 hover:text-black">
//           <FaExpand size={18} />
//         </button>

//         <div className="relative">
//           <button className="text-gray-600 hover:text-black">
//             <FaBell size={18} />
//           </button>
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
//         </div>

//         <button className="text-gray-600 hover:text-black">
//           <FaMoon size={18} />
//         </button>

//         <button className="text-gray-600 hover:text-black">
//           <FaLanguage size={18} />
//         </button>

//         <button className="text-gray-600 hover:text-black">
//           <img
//             src="/images/asset 74.png"
//             alt="User"
//             className="w-8 h-8 rounded-full"
//           />
//         </button>
//       </div>

//     </header>
//   );
// };

// export default TopNav;
import {
  FaSearch,
  FaBell,
  FaMoon,
  FaExpand,
  FaUserCircle,
  FaLanguage,
  FaSignOutAlt,
  FaBars
} from 'react-icons/fa';

const TopNav = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center px-2 py-3 bg-white shadow-md md:px-6 lg:px-8">
      {/* Mobile menu button */}
      <button
        className=" text-gray-600 md:mr-5 mr-2 focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FaBars size={22} />
      </button>

      {/* Search Form */}
      <div className="flex-1 min-w-0">
        <form className="flex items-center w-full md:w-[70%] h-10">
          <input
            type="text"
            placeholder="Search term"
            className="h-full flex-grow border p-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="h-full bg-gray-100 border p-2 border-l-0 border-gray-300 rounded-r-md focus:outline-none hover:bg-gray-200"
            aria-label="Search"
          >
            <FaSearch className="text-gray-600" />
          </button>
        </form>
      </div>

      {/* Nav Icons */}
      <div className="flex items-center space-x-3 md:space-x-5">
        {/* Expand button - Hidden on all mobile devices */}
        <button className="hidden md:block text-gray-600 hover:text-black focus:outline-none" aria-label="Expand view">
          <FaExpand size={18} />
        </button>

        {/* Bell button - Hidden on all mobile devices */}
        <div className="relative hidden md:block">
          <button className="text-gray-600 hover:text-black focus:outline-none" aria-label="Notifications">
            <FaBell size={18} />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>

        {/* Moon button - Hidden on all mobile devices */}
        <button className="hidden md:block text-gray-600 hover:text-black focus:outline-none" aria-label="Toggle dark mode">
          <FaMoon size={18} />
        </button>

        {/* Language button - Hidden on all mobile devices */}
        <button className="hidden md:block text-gray-600 hover:text-black focus:outline-none" aria-label="Change language">
          <FaLanguage size={18} />
        </button>

        {/* User Profile button - Visible on all devices */}
        <button className="text-gray-600 hover:text-black focus:outline-none flex items-center" aria-label="User profile">
          <img
            src="/images/asset 74.png"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
