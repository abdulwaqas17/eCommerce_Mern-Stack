import { useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FiEye } from "react-icons/fi"; // Eye icon

const Card = (props) => {
  const navigate = useNavigate();

  const { product, addToWishlist, isWishlisted, addToCart } = props;

  return (
    <div className="w-full bg-white border rounded-xl shadow hover:shadow-lg transition-all duration-300 mx-auto h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-xl aspect-square group">
        <img
          src={product.image1}
          alt={product.name}
          className="w-full h-full object-cover"
          onClick={() => navigate(`/product/${product._id}`)}
        />
        <img
          src={product.image2}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Right-Top Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          {/* Wishlist */}
          <div
            onClick={() => addToWishlist(product)}
            className={`p-1.5 rounded-full shadow cursor-pointer transition ${
              isWishlisted ? "bg-pink-200" : "bg-white hover:bg-red-100"
            }`}
            title="Add to Wishlist"
          >
            <FiHeart className="text-red-500" size={18} />
          </div>

          {/* View (Eye icon) */}
          <div
            onClick={() => navigate(`/product/${product._id}`)}
            className="p-1.5 rounded-full shadow bg-white hover:bg-gray-100 cursor-pointer"
            title="View Details"
          >
            <FiEye className="text-gray-600" size={18} />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2 flex-grow flex flex-col">
        <p className="text-sm text-indigo-600 font-medium line-clamp-1">
          {product.useFor}
        </p>

        <h3
          className="text-lg font-semibold text-gray-800 hover:text-indigo-700 transition line-clamp-2 cursor-pointer"
          onClick={() => navigate(`/product/${product._id}`)}
        >
          {product.name}
        </h3>

        <div className="flex items-center space-x-1 text-yellow-400 text-sm mt-auto">
          <span>★★★★★</span>
          <span className="text-gray-500">(0 reviews)</span>
        </div>

        <div className="text-xl font-bold text-gray-800 mt-2">
          ${product.price}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
