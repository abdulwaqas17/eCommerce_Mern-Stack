// DashboardHome.jsx
import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import DashboardCards from '../overviewBoxes';
import SalesAndRevenue from '../SalesAndRevenue';
import DashOrders from '../DashOrders';
import Pagination from '../Pagination';
import DashboardFooter from '../DashboardFooter';


const DashboardHome = () => {
    return (
        <div className=''>

            {/* top content */}
            <div className="flex items-center justify-between px-4 py-6 bg-white shadow-sm rounded-md">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                    <p className="text-sm text-gray-500">Whole data about your business here</p>
                </div>
                <div>
                    <a href="#" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        <FaFileAlt className="text-white text-lg" />
                        Create report
                    </a>
                </div>
            </div>
            {/* // over view boxes  */}
            <DashboardCards />

            {/* Sales and Revenue  */}
            <SalesAndRevenue/>

            {/* DashOrders */}
            <DashOrders/>

            {/* Pagination */}
            <Pagination />

            
        </div>

    );
};

export default DashboardHome;