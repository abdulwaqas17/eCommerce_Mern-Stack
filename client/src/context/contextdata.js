import { createContext } from "react";

const cartContext = createContext(null);
const wishlistContext = createContext(null);
const userContext = createContext(null);
const themeContext = createContext(['#ebf7ff','#f6f7f71c']);

export {cartContext,userContext,wishlistContext,themeContext};