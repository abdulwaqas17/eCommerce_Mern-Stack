import React from 'react'

const Services = () => {

    const services = [
        {
          title: "Medicine",
          description: "Over 25000 products",
          icon: "/images/asset 7.png",
        },
        {
          title: "Wellness",
          description: "Health products",
          icon: "/images/asset 8.png",
        },
        {
          title: "Diagnostic",
          description: "Book tests & checkups",
          icon: "/images/asset 9.png",
        },
        {
          title: "Health Corner",
          description: "Trending from health experts",
          icon: "/images/asset 10.png",
        },
        {
          title: "Medical Equipments",
          description: "Devices & Tools",
          icon: "/images/asset 11.png",
        },
      ];

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="flex md:justify-between justify-center gap-4 md:gap-0 flex-wrap w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="md:w-[19%] w-[90%] flex flex-col sm:flex-row items-center text-center sm:text-left bg-white shadow-md rounded-md p-4 transition hover:shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 mb-2 sm:mb-0 sm:mr-4 flex-shrink-0">
                <img src={service.icon} alt={service.title} className="h-full w-auto" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services