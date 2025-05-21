import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Covid essentials",
    img: "https://ap-medilazar.myshopify.com/cdn/shop/collections/cate_1.png?v=1734407915",
    link: "/collections/covid-essentials",
  },
  {
    title: "Fitness supplements",
    img: "https://ap-medilazar.myshopify.com/cdn/shop/collections/cate_7.png?v=1734408059",
    link: "/collections/fitness-supplements",
  },
  {
    title: "Health condition",
    img: "https://ap-medilazar.myshopify.com/cdn/shop/collections/cate_4.png?v=1734407978",
    link: "/collections/health-condition",
  },
  {
    title: "Health food and drinks",
    img: "https://ap-medilazar.myshopify.com/cdn/shop/collections/cate_3.png?v=1734407956",
    link: "/collections/health-food-and-drinks",
  },
  {
    title: "Healthcare devices",
    img: "https://ap-medilazar.myshopify.com/cdn/shop/collections/cate_6.png?v=1734408033",
    link: "/collections/healthcare-devices",
  },
  {
    title: "Home page",
    img: "https://ap-medilazar.myshopify.com/cdn/shop/collections/cate_1_4096b62d-b6ff-4d5b-9759-ff5caa58b97c.png?v=1735116194",
    link: "/collections/frontpage",
  },
  {
    title: "Infrared Thermometer",
    img: "https://ap-medilazar.myshopify.com/cdn/shop/collections/cate_2.png?v=1734407937",
    link: "/collections/infrared-thermometer",
  },
  {
    title: "Skin care",
    img: "https://ap-medilazar.myshopify.com/cdn/shop/collections/cate_5.png?v=1734408002",
    link: "/collections/skin-care",
  },
];

const AllCategories = () => {
  const navigate = useNavigate();

  const navigateProduct = (category) => {
    window.localStorage.setItem('category',category);
    navigate('/products')
  }
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Shop by Category
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((item, index) => (
          <a
            key={index}
            onClick={() => navigateProduct(item.title)}
            className="w-[48%] sm:w-[30%] lg:w-[22%] flex flex-col items-center bg-white rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-contain mb-2"
              loading="lazy"
            />
            <p className="text-center text-sm font-medium text-gray-800">
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
