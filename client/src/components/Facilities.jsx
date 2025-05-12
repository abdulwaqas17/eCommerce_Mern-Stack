import React from "react";
import { FaTruck, FaCreditCard, FaHeadset, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaTruck size={40} className="text-cyan-600" />,
    title: "Fast Delivery",
    description: "We deliver your products quickly and safely.",
  },
  {
    icon: <FaCreditCard size={40} className="text-cyan-600" />,
    title: "Secure Payment",
    description: "All transactions are secured and encrypted.",
  },
  {
    icon: <FaHeadset size={40} className="text-cyan-600" />,
    title: "24/7 Support",
    description: "Our support team is available anytime.",
  },
  {
    icon: <FaShieldAlt size={40} className="text-cyan-600" />,
    title: "Money Back Guarantee",
    description: "Not satisfied? Get your money back easily.",
  },
];

const Facilities = () => {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center bg-gray-100 hover:bg-cyan-50 transition-all rounded-lg p-6 gap-4 text-center sm:text-left"
            >
              <div>{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
