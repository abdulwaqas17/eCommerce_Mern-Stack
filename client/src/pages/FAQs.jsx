import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import HelpCenter from "../components/FAQsUtils/HelpCenter";
import OrderingFAQs from "../components/FAQsUtils/OrderingFAQs";
import { useTheme } from "../hooks/hooks";

const FAQs = () => {
  const {dark,light} = useTheme();
  return (
    <div>
      <Navbar />

      <div style={{
    
          backgroundImage: `linear-gradient(to bottom, ${dark}, ${light})`,
        }}>
        <div className="pt-[45px] pb-[50px]">
          <h2 className="text-center text-4xl font-bold">FAQs</h2>
          <Breadcrumb val="FAQs" />
        </div>

        <HelpCenter />

        <OrderingFAQs />
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;
