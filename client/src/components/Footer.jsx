// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t px-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8">
          {/* Logo + Description */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <img
              src="https://ap-medilazar.myshopify.com/cdn/shop/files/logo.png?v=1732847887"
              alt="Logo"
              className="w-[150px] mb-4"
            />
            <p className="text-gray-500 text-base leading-relaxed">
              Medilazar Shop is proud of being a best Pharmacy Online shop in USA with high-quality medicines, supplements, healthcare products…
            </p>
          </div>

          {/* Information Links */}
          <div className="w-full md:w-1/2 lg:w-1/5">
            <h6 className="uppercase text-[#1d2a38] font-semibold mb-4">Information</h6>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#2ea5b6]">Newsroom</a></li>
              <li><a href="#" className="hover:text-[#2ea5b6]">Sell Your Pharmacy</a></li>
              <li><a href="#" className="hover:text-[#2ea5b6]">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-[#2ea5b6]">Careers</a></li>
              <li><a href="#" className="hover:text-[#2ea5b6]">Investor Relations</a></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="w-full md:w-1/2 lg:w-1/5">
            <h6 className="uppercase text-[#1d2a38] font-semibold mb-4">Categories</h6>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/" className="hover:text-[#2ea5b6]">Devices</a></li>
              <li><a href="/" className="hover:text-[#2ea5b6]">Family Care</a></li>
              <li><a href="/" className="hover:text-[#2ea5b6]">Fitness</a></li>
              <li><a href="/" className="hover:text-[#2ea5b6]">Lifestyle</a></li>
              <li><a href="/" className="hover:text-[#2ea5b6]">Personal care</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="w-full md:w-1/2 lg:w-1/5">
            <h6 className="uppercase text-[#1d2a38] font-semibold mb-4">Our Services</h6>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/" className="hover:text-[#2ea5b6]">Shipping</a></li>
              <li><a href="/" className="hover:text-[#2ea5b6]">Returns</a></li>
              <li><a href="/" className="hover:text-[#2ea5b6]">Product Recalls</a></li>
              <li><a href="/" className="hover:text-[#2ea5b6]">Contact Us</a></li>
              <li><a href="/" className="hover:text-[#2ea5b6]">Site Map</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
