import cartActionTypes from "./cart.types";

export const toggleCartItem = () => ({
  type: cartActionTypes.TOGGLE_CART_ITEM,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
