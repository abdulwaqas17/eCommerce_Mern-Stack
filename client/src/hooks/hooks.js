import { useContext } from "react";
import { cartContext,userContext, wishlistContext } from '../context/contextdata';

export const useCarts = () => useContext(cartContext);
export const useWishlist = () => useContext(wishlistContext);
export const useUser = () => useContext(userContext);
