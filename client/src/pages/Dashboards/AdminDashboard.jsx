// // Root layout component
// import React from 'react';
// import Sidebar from '../../components/dashboardUtils/Siderbar';

// import DashboardHome from '../../components/dashboardUtils/SidePages/HomeSide';
// import TopNav from '../../components/dashboardUtils/TopNav';
// import DashboardFooter from '../../components/dashboardUtils/DashboardFooter';
// import { Outlet } from 'react-router-dom';

// const AdminDashboard = () => {


//   return (
//     <div className=" bg-gray-100">

//       <Sidebar />

//       <div className='ml-[259px]'>

//         <TopNav />

//         <div className='p-5'>

//           <Outlet/> {/* Yahan pe content render hoga jab route match hoga */}

//         </div>
//           {/* DashboardFooter */}
//           <DashboardFooter/>

//       </div>

//     </div>
//   );
// };

// export default AdminDashboard;
// // React + Tailwind CSS version of the given HTML structure, focusing on <main> section
// // Flex is preferred over Grid. For brevity, some repeating structures are abstracted.

import React, { useState } from 'react';
import Sidebar from '../../components/dashboardUtils/Siderbar';
import TopNav from '../../components/dashboardUtils/TopNav';
import DashboardFooter from '../../components/dashboardUtils/DashboardFooter';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
        <TopNav toggleSidebar={toggleSidebar} />

        <div className="p-5">
          <Outlet />
        </div>

        <DashboardFooter />
      </div>
    </div>
  );
};

export default AdminDashboard;







