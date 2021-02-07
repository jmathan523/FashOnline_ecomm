import React from "react";
// import "./CheckoutItem.scss";
import { connect } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./CheckoutItem.StyledComponent";

const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, { clearItem, removeItem, addItem })(CheckoutItem);
