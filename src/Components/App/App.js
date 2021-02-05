import React from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import ShopPage from "../../Pages/Shop/Shop";
import Signin_Signup from "../../Pages/Signin-Signup/Signin_Signup";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfile } from "../../Firebase/firebase.util";
import { connect } from "react-redux";
import currentUser from "../../redux/user/user.action";

import "./App.scss";

class App extends React.Component {
  unSubcribeUser = null;

  componentDidMount() {
    const { currentUser } = this.props;

    this.unSubcribeUser = auth.onAuthStateChanged(async (userData) => {
      const userRef = await createUserProfile(userData);
      if (userRef) {
        userRef.onSnapshot((snapshot) => {
          // data inside snapshot can be accessed only via .data()
          return currentUser({
            // use onSnapShot method to listen to any change in the data
            ...snapshot.data(),
          });
        });
      } else {
        currentUser(userData);
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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Signin_Signup} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { currentUser })(App);
