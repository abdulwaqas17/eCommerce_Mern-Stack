import React from 'react';

const BlogCard = (props) => {
  return (
    <div className="md:w-[23%] sm:w-[50%] w-[95%] flex flex-col gap-5  rounded-lg  hover:shadow-md transition">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <a href="/blogs/news/coronavirus-tips-to-protect-yourself-your-family-and" className="block overflow-hidden rounded-md">
          <img
            src={props.img}
            alt="Coronavirus: Tips To Protect Yourself, Your Family And"
            className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Posted on: <span className="text-gray-600">Jan 30, 2025</span>
          </p>

          <h6 className="text-lg font-semibold text-gray-900 mb-3">
            <a href="/blogs/news/coronavirus-tips-to-protect-yourself-your-family-and">
              Coronavirus: Tips To Protect Yourself, Your Fam...
            </a>
          </h6>
        </div>

        <a
          href="/blogs/news/coronavirus-tips-to-protect-yourself-your-family-and"
          className="inline-flex items-center text-blue-600 hover:underline font-medium mt-2"
        >
          <svg
            className="mr-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 6V12M12 12V18M12 12H18M12 12H6" />
          </svg>
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
