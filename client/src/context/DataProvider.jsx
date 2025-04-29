import {useState } from "react"
import CartContext from "./cartContext";


export default function DataProvider({children}) {

    // console.log('CartContext',CartContext);
    

    let [carts,setCarts] = useState([]);

    return (

        <CartContext.Provider value={{carts,setCarts}}>

           {children}

        </CartContext.Provider>
    )
}