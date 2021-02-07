import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartItem } from "../../redux/cart/cart.action";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyItem,
  ButtonContainer,
} from "./CartDropdown.StyledComponent";
// import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, toggleCartItem }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyItem>Your Cart is empty</EmptyItem>
      )}
    </CartItemsContainer>
    <ButtonContainer>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartItem();
        }}
      >
        CHECKOUT
      </CustomButton>
    </ButtonContainer>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCartItem })(CartDropdown)
);
