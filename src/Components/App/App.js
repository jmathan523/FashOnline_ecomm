import React from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import ShopPage from "../../Pages/Shop/Shop";
import SigninSignup from "../../Pages/Signin-Signup/Signin_Signup";
import CheckoutPage from "../../Pages/CheckoutPage/CheckoutPage";
import Header from "../Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfile } from "../../Firebase/firebase.util";
import { connect } from "react-redux";
import setCurrentUser from "../../redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

import "./App.scss";

class App extends React.Component {
  unSubcribeUser = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubcribeUser = auth.onAuthStateChanged(async (userData) => {
      const userRef = await createUserProfile(userData);
      if (userRef) {
        userRef.onSnapshot((snapshot) => {
          // data inside snapshot can be accessed only via .data()
          return setCurrentUser({
            // use onSnapShot method to listen to any change in the data
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userData);
      }
    });
  }

  componentWillUnmount() {
    this.unSubcribeUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// mapStateToProps using Create StructuredSelector reselect lib
// It will automatically pull the top level state, no need to pass state explicitly

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
