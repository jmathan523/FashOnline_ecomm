import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartItem } from "../../redux/cart/cart.action";

import "./CartIcon.scss";

const CartIcon = ({ toggleCartItem }) => (
  <div className="cart-icon" onClick={toggleCartItem}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default connect(null, { toggleCartItem })(CartIcon);
