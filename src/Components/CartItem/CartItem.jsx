import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X &#8377; {price}
        </span>
      </div>
      <hr className="line-style" />
    </div>
  );
};

export default CartItem;
