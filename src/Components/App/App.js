import React from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import ShopPage from "../../Pages/Shop/Shop";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
