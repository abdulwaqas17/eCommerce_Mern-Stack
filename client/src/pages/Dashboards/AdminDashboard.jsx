// Root layout component
import React from 'react';
import Sidebar from '../../components/dashboardUtils/Siderbar';

import DashboardHome from '../../components/dashboardUtils/SidePages/HomeSide';
import TopNav from '../../components/dashboardUtils/TopNav';
import DashboardFooter from '../../components/dashboardUtils/DashboardFooter';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className=" bg-gray-100">

      <Sidebar />

      <div className='ml-[259px]'>

        <TopNav />

        <div className='p-5'>

          <Outlet/> {/* Yahan pe content render hoga jab route match hoga */}

        </div>
          {/* DashboardFooter */}
          <DashboardFooter />

      </div>

    </div>
  );
};

export default AdminDashboard;
// React + Tailwind CSS version of the given HTML structure, focusing on <main> section
// Flex is preferred over Grid. For brevity, some repeating structures are abstracted.









