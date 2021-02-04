import React from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import ShopPage from "../../Pages/Shop/Shop";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    );
  }
}

export default App;
