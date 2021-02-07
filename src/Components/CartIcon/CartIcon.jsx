import React from "react";
import { connect } from "react-redux";
import { toggleCartItem } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./CartIcon.StyledComponent";
// import "./CartIcon.scss";

const CartIcon = ({ toggleCartItem, itemCount }) => (
  <CartIconContainer className="cart-icon" onClick={toggleCartItem}>
    <ShoppingIconContainer className="shopping-icon" />
    <ItemCount className="item-count">{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartItem })(CartIcon);
