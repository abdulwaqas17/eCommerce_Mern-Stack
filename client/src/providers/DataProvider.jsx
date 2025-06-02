// App.js ya DataProvider.jsx me
import { useEffect, useState,useMemo } from "react";
import { jwtDecode } from "jwt-decode";
import {
  userContext,
  cartContext,
  wishlistContext,
  themeContext
} from "../context/contextdata";

export default function DataProvider({ children }) {

  const [user, setUser] = useState(null);
  const [carts, setCarts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded); // ya backend se fresh user data fetch bhi kar sakte ho
      } catch (err) {
        console.log("Invalid token");
        localStorage.removeItem("userToken");
      }
    }
  }, []);


  // to save un neccesary re renders
  const userValue = useMemo(() => ({ user, setUser }), [user]);
  const cartValue = useMemo(() => ({ carts, setCarts }), [carts]);
  const wishlistValue = useMemo(() => ({ wishlist, setWishlist }), [wishlist]);

  
  return (
    <themeContext.Provider value={{ dark: "#e4f6ffe1", light: "rgba(230,230,230,0.25)" }}>
      {/* You can replace "light" with your actual theme logic */}
    <userContext.Provider value={userValue}>
      <cartContext.Provider value={cartValue}>
        <wishlistContext.Provider value={wishlistValue}>
          {children}
        </wishlistContext.Provider>
      </cartContext.Provider>
    </userContext.Provider>
    </themeContext.Provider>
  );
}
