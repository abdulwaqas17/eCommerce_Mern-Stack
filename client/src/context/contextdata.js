import { createContext } from "react";

const cartContext = createContext(null);
const wishlistContext = createContext(null);
const userContext = createContext(null);

export {cartContext,userContext,wishlistContext};