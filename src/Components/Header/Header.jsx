import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../Firebase/firebase.util";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import {
  HeaderContainer,
  LogoContainer,
  Option,
  OptionsContainer,
} from "./Header.StyledComponent";
// import "./Header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer className="options">
        <Option to="/shop">SHOP</Option>
        <Option to="/shop">CONTACT</Option>
        {currentUser ? (
          <Option as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </Option>
        ) : (
          <Option to="/signin">SIGN IN</Option>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
//   return {
//     currentUser,
//     hidden,
//   };
// };

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
