import { useContext } from "react";
import CartContext from "../context/cartContext";

export const useCarts = () => useContext(CartContext);