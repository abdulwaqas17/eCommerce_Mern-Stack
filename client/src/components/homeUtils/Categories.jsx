import React from 'react'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'


const Categories = () => {

  const { t } = useTranslation();
    const categories = [
        {
          id: 'hVRgfR',
          name: 'Covid essentials',
          count: '12 Products',
          img: '/images/asset 14.png',
          bg: 'bg-[#ecf8f8]',
          link: '/products',
        },
        {
          id: 'X3FdiW',
          name: 'Infrared Thermometer',
          count: '10 Products',
          img: '/images/asset 15.png',
          bg: 'bg-[#f8f5ec]',
          link: '/products',
        },
        {
          id: 'LDXkaH',
          name: 'Health food and drinks',
          count: '9 Products',
          img: '/images/asset 16.png',
          bg: 'bg-[#eeeeee]',
          link: '/products',
        },
        {
          id: '7efjEH',
          name: 'Skin Care',
          count: '7 Products',
          img: '/images/asset 17.png',
          bg: 'bg-[#f4f0eb]',
          link: '/products',
        }
      ];

  return (
    <section className="bg-white py-16 px-[30px]">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1d2a38] mb-10">
              {t("headings.popularCategories")}
            </h2>
    
            <div className="flex flex-wrap md:justify-between justify-center md:gap-0 gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`flex items-center md:w-[23%] sm:w-[48%] w-[97%] p-5 rounded-md ${cat.bg} gap-4`}
                >
                  <div className="max-w-[50%]">
                    <Link to={cat.link}>
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-[15px] font-medium text-[#1d2a38] mb-2">
                      <Link to={cat.link}>{cat.name}</Link>
                    </h5>
                    <p className="text-[15px] text-[#7d879c]">{cat.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Categories