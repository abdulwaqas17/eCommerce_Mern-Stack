import React, { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCarts } from "../../hooks/hooks";

const CartTable = () => {
  const cartItems = [
    {
      id: 1,
      title: "Teethstr8 Max Vitamizzin 230 Rustic Plastic Knife",
      image: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-18-1.jpg?v=1734420708",
      price: 389.56,
      quantity: 1,
    },
    {
      id: 2,
      title: "Rustic Linen Keyboard",
      image: "https://ap-medilazar.myshopify.com/cdn/shop/files/download_916e8a38-463e-4fbc-abfc-44cd8df90a1f.jpg?v=1734420751",
      price: 34.21,
      quantity: 1,
    },
    {
      id: 3,
      title: "Otrivin Breathe Clean Natural Daily Nasal Cleanser",
      image: "https://ap-medilazar.myshopify.com/cdn/shop/files/product-21-1.jpg?v=1734420694",
      price: 254.68,
      quantity: 3,
    },
  ];

  
     let {carts,setCarts} = useCarts();

     console.log(carts);
     

  useEffect(()=> {

    let fetchData = async ()=> {

      try {

        console.log('hello');
        
    var cartProducts = carts.map(async (i)=> {

      console.log(i);
      

      let res = await fetch(`http://localhost:3000/products/get/${i}`);
      let data = await res.json();

      console.log('data ==>', data);

      
      return(
        <div>{data.price}</div>
      )

    })

      } catch (err) {
        console.log(err);
        
      }

      

      
      
      // console.log(cartProducts);
    }

    fetchData();

    

   },[])

  return (
    <div className="w-full px-5 py-6 overflow-x-auto">
      <form action="/cart" method="post" className="w-full">
        <table className="min-w-full bg-white  rounded-md">
          <thead>
            <tr className="text-left font-semibold">
              <th className="p-3">Product</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border border-gray-300">
                <td className="p-3 flex gap-4 items-start">
                  <img src={item.image} alt={item.title} className="w-20 h-20 rounded object-cover" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
                    <p className="text-gray-500 text-xs mt-1">${item.price.toFixed(2)}</p>
                    <button
                      type="button"
                      className="text-xs text-red-500 hover:underline mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </td>

                <td className="p-3 text-center">
                  <div className="inline-flex items-center border rounded px-2">
                    <button type="button" className="text-gray-600 hover:text-black">
                      <FaMinus />
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      className="w-10 text-center border-0 focus:ring-0 text-sm"
                      readOnly
                    />
                    <button type="button" className="text-gray-600 hover:text-black">
                      <FaPlus />
                    </button>
                  </div>
                </td>

                <td className="p-3 text-right text-sm text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CartTable;