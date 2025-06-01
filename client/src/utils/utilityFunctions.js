export const calculateTotalPrice = (carts) => {
  return carts.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

export const calculateTotalQuantity = (carts) => {
  return carts.reduce((acc, item) => acc + item.quantity, 0);
};

export const getItemFromLS = (param) => {
  return window.localStorage.getItem(param);
};
