import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./CartItem.StyledComponent";
// import "./CartItem.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
