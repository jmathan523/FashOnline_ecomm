import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="itemimage" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { clearItem, removeItem, addItem })(CheckoutItem);
