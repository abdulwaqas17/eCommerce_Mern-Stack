// import { Heart, Eye, RefreshCcw } from "lucide-react";

import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  // console.log(props);
  // console.log(props.key); // key prop return undefined

  // YHN PR FUNCTION BNAY SE HAR CART KA ALAG ALAG FUNCTION BUN GYA
  // let addToCart = (id) => {
  //   // let updateCart = cart;
  //   // updateCart.push(e.target.id);
  //   // console.log(updateCart);
  //   setCart((prev) => [...prev, id]);
  //   // console.log('cart',cart);
  // };

  // console.log('cart',cart);

  return (
    <div className="w-[23%] bg-white border rounded-xl shadow hover:shadow-lg transition-transform duration-300">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={props.product.image1}
          alt={props.product.name}
          className="w-full"
          onClick={() => navigate(`/product/${props.product._id}`)}
        />
        <img
          src={props.product.image2}
          alt={props.product.name}
          className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-sm text-indigo-600 font-medium">
          {props.product.useFor}
        </p>
        <h3
          className="text-lg font-semibold text-gray-800 hover:text-indigo-700 transition"
          onClick={() => navigate(`/product/${props.product._id}`)}
        >
          {props.product.name}
        </h3>

        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
          <span>★★★★★</span>
          <span className="text-gray-500">(0 reviews)</span>
        </div>

        <div className="text-xl font-bold text-gray-800">
          ${props.product.price}
        </div>

        <button
          onClick={() => props.func(props.product)}
          className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
