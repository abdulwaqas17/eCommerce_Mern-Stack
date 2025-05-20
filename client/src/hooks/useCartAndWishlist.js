import { useEffect } from "react";
import { useCarts,useWishlist,useUser } from "../hooks/hooks";

export default function useCartAndWishlist() {
  const { carts, setCarts } = useCarts();
  const { user } = useUser();
  const { wishlist, setWishlist } = useWishlist();

  // Save carts to localStorage
  useEffect(() => {
    localStorage.setItem(`Carts_${user? user._id : 'guest'}`, JSON.stringify(carts));
  }, [carts]);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem(`Wishlist_${user? user._id : 'guest'}`, JSON.stringify(wishlist));
  }, [wishlist]);

  // Add to cart function
  const addToCart = (product) => {
    if (!product || !product._id) return;

    const existingItem = carts.find((item) => item._id === product._id);

    if (existingItem) {
      const updatedCarts = carts.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCarts(updatedCarts);
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };

  // Toggle wishlist function
  const toggleWishlist = (product) => {
    if (!product || !product._id) return;

    const isInWishlist = wishlist.find((item) => item._id === product._id);

    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item._id !== product._id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return {
    carts,
    wishlist,
    addToCart,
    toggleWishlist,
  };
}
