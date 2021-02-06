import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartItem } from "../../redux/cart/cart.action";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, toggleCartItem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <div className="empty-item">Your Cart is empty</div>
      )}
    </div>
    <div className="button">
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartItem();
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartItem })(CartDropdown)
);
