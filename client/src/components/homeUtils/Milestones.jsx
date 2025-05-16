import React from "react";

const Milestones = () => {
  const services = [
    {
      id: "service_7hi4HV",
      icon: "//ap-medilazar.myshopify.com/cdn/shop/files/home3_icon_1.png?v=1736132785&width=48",
      title: "50 Lalk +",
      description: "Families Served",
      width: 48,
      height: 60
    },
    {
      id: "service_ybJDKA",
      icon: "//ap-medilazar.myshopify.com/cdn/shop/files/home3_icon_2.png?v=1736132786&width=60",
      title: "1.5 Crore +",
      description: "Orders Delivered",
      width: 60,
      height: 48
    },
    {
      id: "service_hCCHh9",
      icon: "//ap-medilazar.myshopify.com/cdn/shop/files/home3_icon_3.png?v=1736132786&width=49",
      title: "22000 +",
      description: "Pincodes Served",
      width: 49,
      height: 54
    },
    {
      id: "service_7XLiqW",
      icon: "//ap-medilazar.myshopify.com/cdn/shop/files/home3_icon_4.png?v=1736132785&width=54",
      title: "10 Lakl +",
      description: "Medicines Available",
      width: 54,
      height: 54
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-2 mb-4"
              data-aos="zoom-out"
            >
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg h-full hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">
                  <img 
                    src={service.icon} 
                    alt="" 
                    width={service.width} 
                    height={service.height} 
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;