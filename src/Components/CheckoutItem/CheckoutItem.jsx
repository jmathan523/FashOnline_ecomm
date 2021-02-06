import React from "react";
import "./CheckoutItem.scss";

const CheckoutItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="itemimage" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
