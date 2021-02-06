import React from "react";
import CustomButton from "../CustomButton/CustomButton";

import "./CartDropdown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <div className="button">
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
