import { Link } from 'react-router-dom';
import { Home } from 'lucide-react'; // You can use Lucide or any other icon lib

const CatHeader = () => {
  return (
    <div className="py-[50px] bg-gradient-to-b from-[#eaf6ff] to-[#f6f7f7] mx-auto">
      <nav aria-label="Breadcrumb" className="text-xs ">
        <ol className="flex space-x-2 items-center justify-center">
          <li className="flex items-center ">
            <Link to="/" className="flex items-center text-blue-600 hover:underline">
              <Home className="w-5 h-5 mr-1 mb-[5px]" />
              Home
            </Link>
          </li>

          <li className="flex items-center">
            <span className="mx-2 text-gray-500">/</span>
            <span aria-current="page" className="text-gray-700">
              Infrared Thermometer
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default CatHeader;
