import React from "react";
import "./CheckoutPage.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selector";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>PRODUCT</span>
      </div>
      <div className="header-block">
        <span>DESCRIPTION</span>
      </div>
      <div className="header-block">
        <span>QUANTITY</span>
      </div>
      <div className="header-block">
        <span>PRICE</span>
      </div>
      <div className="header-block">
        <span>REMOVE</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}
    <div className="total">TOTAL: &#x20b9;{total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
