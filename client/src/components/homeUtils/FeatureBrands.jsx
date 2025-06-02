import React from 'react';
import { useTranslation } from 'react-i18next';

const brandImages = [
  "https://ap-medilazar.myshopify.com/cdn/shop/files/brand_1.png?crop=center&height=48&v=1734657741&width=144",
  "https://ap-medilazar.myshopify.com/cdn/shop/files/brand_2.png?crop=center&height=45&v=1734657742&width=118",
  "https://ap-medilazar.myshopify.com/cdn/shop/files/brand_3.png?crop=center&height=58&v=1734657742&width=157",
  "https://ap-medilazar.myshopify.com/cdn/shop/files/brand_4.png?crop=center&height=50&v=1734657742&width=159",
  "https://ap-medilazar.myshopify.com/cdn/shop/files/brand_5.png?crop=center&height=41&v=1734657742&width=176",
  "https://ap-medilazar.myshopify.com/cdn/shop/files/brand_6.png?crop=center&height=48&v=1734657741&width=145",
  "https://ap-medilazar.myshopify.com/cdn/shop/files/brand_7.png?crop=center&height=45&v=1734657741&width=177",
  "https://ap-medilazar.myshopify.com/cdn/shop/files/brand_8.png?crop=center&height=42&v=1734657741&width=181",
];

const FeaturedBrands = () => {
    const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">{t("headings.featuredBrands")}</h2>
        <p className="text-sm text-gray-500 pt-[13px] md:text-[1rem]">Trusted by top health & wellness companies</p>
      </div>

      <div className="flex justify-between flex-wrap gap-[30px]">
        {brandImages.map((src, index) => (
          <div key={index} className="md:w-[23%] sm:w-[50%] w-[100%] flex items-center bg-white justify-center py-[32px] hover:scale-105 transition-transform duration-300 rounded">
            <a href="#">
              <img src={src} alt={`Brand ${index + 1}`} className="max-h-12 object-contain" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrands;
