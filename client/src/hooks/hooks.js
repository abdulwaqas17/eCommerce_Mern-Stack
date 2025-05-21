import { useContext } from "react";
import { cartContext,themeContext,userContext, wishlistContext } from '../context/contextdata';

export const useCarts = () => useContext(cartContext);
export const useWishlist = () => useContext(wishlistContext);
export const useUser = () => useContext(userContext);
export const useTheme = () => useContext(themeContext);
