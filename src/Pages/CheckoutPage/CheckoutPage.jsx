import React from "react";
// import "./CheckoutPage.scss";
import {
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  Total,
} from "./CheckoutPage.StyledComponent";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../../Components/StripeCheckoutButton/StripeCheckoutButton";
import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selector";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer className="checkout-page">
    <CheckoutHeader className="checkout-header">
      <HeaderBlock className="header-block">
        <span>PRODUCT</span>
      </HeaderBlock>
      <HeaderBlock className="header-block">
        <span>DESCRIPTION</span>
      </HeaderBlock>
      <HeaderBlock className="header-block">
        <span>QUANTITY</span>
      </HeaderBlock>
      <HeaderBlock className="header-block">
        <span>PRICE</span>
      </HeaderBlock>
      <HeaderBlock className="header-block">
        <span>REMOVE</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}
    <Total className="total">TOTAL: &#x20b9;{total}</Total>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
