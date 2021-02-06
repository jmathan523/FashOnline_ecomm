import React from "react";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
