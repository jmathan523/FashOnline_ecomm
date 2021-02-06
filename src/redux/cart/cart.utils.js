// to group the same items in the cart. by adding a new property quantity

const addItemToCart = (cartItems, newCartItem) => {
  // check cart item already exists. returns array if match found
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newCartItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newCartItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  // return an array with quantity added
  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export default addItemToCart;
