// App.js ya DataProvider.jsx me
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { userContext,cartContext } from "./contextdata";

export default function DataProvider({ children }) {
  const [user, setUser] = useState(null);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded); // ya backend se fresh user data fetch bhi kar sakte ho
      } catch (err) {
        console.log("Invalid token");
        localStorage.removeItem('userToken');
      }
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <cartContext.Provider value={{ carts, setCarts }}>
        {children}
      </cartContext.Provider>
    </userContext.Provider>
  );
}
