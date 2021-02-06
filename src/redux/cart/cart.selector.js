// reselect lib ensures that the component only re renders if any of the property in the state
// which it cares about changes, else it will not re render the component on every change in state

import { createSelector } from "reselect";

// input selector -> gives slice of state
const selectCart = (state) => state.cart;

// output Selector uses createSelector; accepts two arg -> one [inputselector], function
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
