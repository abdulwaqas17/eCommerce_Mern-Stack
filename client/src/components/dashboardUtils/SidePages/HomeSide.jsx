// DashboardHome.jsx
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import DashboardCards from "../overviewBoxes";
import SalesAndRevenue from "../SalesAndRevenue";
import DashOrders from "../DashOrders";
import Pagination from "../Pagination";
import DashboardFooter from "../DashboardFooter";
import useOrders from "../../../utils/useOrders";

const DashboardHome = () => {
  const { orders, loading, error } = useOrders();
  return (
    <div>
      {/* top content */}
        <div className="bg-white shadow-sm rounded-md py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between">
      {/* Left Section - Title and Subtitle */}
      <div className="mb-4 sm:mb-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Dashboard
        </h2>
        <p className="text-sm text-gray-500">
          Whole data about your business here
        </p>
      </div>

      {/* Right Section - Create Report Button */}
      <div>
        <button
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          <FaFileAlt className="text-white text-lg" />
          Create report
        </button>
      </div>
    </div>
      {/* // over view boxes  */}
      <DashboardCards />

      {/* Sales and Revenue  */}
      <SalesAndRevenue />

      {/* DashOrders */}
      <DashOrders />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default DashboardHome;
