import { useContext } from "react";
import { cartContext,userContext } from '../context/contextdata';

export const useCarts = () => useContext(cartContext);
export const useUser = () => useContext(userContext);
