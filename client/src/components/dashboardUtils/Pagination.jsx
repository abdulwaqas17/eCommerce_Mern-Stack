import React from 'react';


const Pagination = () => {
  const pages = [1, 2, 3, '...', 16];
  const currentPage = 1;

  return (
    <div className="mt-8 mb-12">
      <nav aria-label="Page navigation">
        <ul className="flex items-center gap-2">
          {pages.map((page, index) => (
            <li key={index}>
              {page === '...' ? (
                <span className="px-3 py-1 rounded-md bg-gray-200 text-gray-500 cursor-default">...</span>
              ) : (
                <a
                  href="#"
                  className={`px-3 py-1 rounded-md text-sm border ${
                    currentPage === page
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {String(page).padStart(2, '0')}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="#"
              className="px-2 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
              aria-label="Next"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
