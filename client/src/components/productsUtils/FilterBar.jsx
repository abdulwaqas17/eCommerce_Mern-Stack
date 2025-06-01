// import { useState } from "react";
// import { ChevronDown, X } from "lucide-react";

// const FilterBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [sortBy, setSortBy] = useState("best-selling");

//   const sortOptions = [
//     { value: "manual", label: "Featured" },
//     { value: "best-selling", label: "Best selling" },
//     { value: "title-ascending", label: "Alphabetically, A-Z" },
//     { value: "title-descending", label: "Alphabetically, Z-A" },
//     { value: "price-ascending", label: "Price, low to high" },
//     { value: "price-descending", label: "Price, high to low" },
//   ];

//   return (
//     <div className="flex justify-between items-center p-4 bg-white">
//       {/* Filter Icon & Text */}
//       <div className="flex items-center gap-2">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
//           {/* simplified icon path */}
//           <path d="M1 1h14M1 8h14M1 15h14" stroke="black" strokeWidth="2" />
//         </svg>
//         <span className="font-medium">Filter</span>
//         <span className="text-gray-500 ml-4">10 products</span>
//       </div>

//       {/* Sort Dropdown */}
//       <div className="relative flex gap-3">
//         <span className="text-gray-700">Sort by</span>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center gap-1  px-3 py-1 rounded-md text-sm"
//         >
//           <span>{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
//           <ChevronDown className="w-4 h-4" />
//         </button>

//         {/* Dropdown */}
//         {isOpen && (
//           <div className="absolute right-0 top-[20px] mt-2 w-60 bg-white border shadow-lg z-10 rounded-md overflow-hidden">
//             <div className="flex justify-between items-center px-4 py-2 border-b">
//               <span className="font-semibold text-sm">Sort by</span>
//               <button onClick={() => setIsOpen(false)}>
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="flex flex-col p-2">
//               {sortOptions.map((option) => (
//                 <label key={option.value} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
//                   <input
//                     type="radio"
//                     name="sort_by"
//                     value={option.value}
//                     checked={sortBy === option.value}
//                     onChange={() => {
//                       setSortBy(option.value);
//                       setIsOpen(false);
//                     }}
//                     className="accent-black"
//                   />
//                   <span>{option.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterBar;
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("best-selling");

  const sortOptions = [
    { value: "manual", label: "Featured" },
    { value: "best-selling", label: "Best selling" },
    { value: "title-ascending", label: "Alphabetically, A-Z" },
    { value: "title-descending", label: "Alphabetically, Z-A" },
    { value: "price-ascending", label: "Price, low to high" },
    { value: "price-descending", label: "Price, high to low" },
  ];

  return (
    <div className="bg-white py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      {/* Filter Section */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="black"
          viewBox="0 0 16 16"
        >
          <path d="M1 1h14M1 8h14M1 15h14" stroke="black" strokeWidth="2" />
        </svg>
        <span className="font-medium text-sm sm:text-base">Filter</span>
        <span className="text-gray-500 text-xs sm:text-sm md:ml-2">
          10 products
        </span>
      </div>

      {/* Sort Dropdown */}
      <div className="relative flex gap-3 items-center">
        <span className="text-gray-700 text-[.7rem] sm:text-base">Sort by</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-3 py-1 rounded-md text-xs sm:text-sm border border-gray-300"
        >
          <span>{sortOptions.find((opt) => opt.value === sortBy)?.label}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute right-0 top-[calc(100%+0.25rem)] mt-1 w-48 sm:w-60 bg-white border shadow-md z-20 rounded-md overflow-hidden">
            <div className="flex justify-between items-center px-3 py-2 border-b">
              <span className="font-semibold text-sm">Sort by</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close sort options">
                <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            <div className="flex flex-col p-2">
              {sortOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer text-sm"
                >
                  <input
                    type="radio"
                    name="sort_by"
                    value={option.value}
                    checked={sortBy === option.value}
                    onChange={() => {
                      setSortBy(option.value);
                      setIsOpen(false);
                    }}
                    className="accent-black h-4 w-4"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;