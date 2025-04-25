import React from 'react';

const DashboardFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-xs border-t pt-4 pb-6 mt-8 text-gray-600">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8">
        <div className="mb-2 sm:mb-0">
          {year} ©, Evara - HTML Ecommerce Template.
        </div>
        <div className="text-right">
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
