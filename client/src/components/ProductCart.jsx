import { useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FiEye } from "react-icons/fi"; // Eye icon
import { FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Card = (props) => {
  const navigate = useNavigate();

  const { product,addToCart, addToWishlist, isWishlisted } = props;
  const { t } = useTranslation();
  

  return (
    <div className="bg-transparent hover:bg-white p-4 rounded-lg">
      <div className="rounded-md box-content hover:bg-white  duration-100 mx-auto h-full flex flex-col">
      <div className="relative overflow-hidden bg-[#eaf6ff] aspect-square group">
        <img
          src={product.image1}
          alt={product.name}
          className="w-[333px] h-full object-cover"
          onClick={() => navigate(`/product/${product._id}`)}
        />
        <img
          src={product.image2}
          alt={product.name}
          className="absolute top-0 left-0 w-[333px] h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Right-Top Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          {/* Wishlist */}
          <div
            onClick={() => addToWishlist(product)}
            className="p-1.5 rounded-full shadow cursor-pointer transitio bg-white"
            
            title="Add to Wishlist"
          >
            {isWishlisted ? <FaHeart className="text-red-500" size={18}/> : <FiHeart className="text-red-500" size={18} />} 
            
          </div>

          {/* View (Eye icon) */}
          <div
            onClick={() => navigate(`/product/${product._id}`)}
            className="p-1.5 rounded-full shadow text-gray-600 hover:text-white bg-white hover:bg-pink-600  cursor-pointer"
            title="View Details"
          >
            <FiEye  size={18} />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className=" space-y-2 flex-grow flex flex-col">
        <p className="text-sm text-indigo-600 font-medium line-clamp-1">
          {t(`categories.${product.useFor}`)}
        </p>

        <h3
          className="text-lg font-semibold text-gray-800 hover:text-indigo-700 transition line-clamp-2 cursor-pointer  h-[56px]"
          onClick={() => navigate(`/product/${product._id}`)}
        >
          {product.name}
        </h3>

        <div className="flex items-center space-x-1 text-yellow-400 text-sm mt-auto">
          <span>★★★★★</span>
          <span className="text-gray-500">(0 reviews)</span>
        </div>

        <div className="text-xl font-bold text-pink-600 mt-2">
          ${product.price}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {t("buttons.addToCart")}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Card;
