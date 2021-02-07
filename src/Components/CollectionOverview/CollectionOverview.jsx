import React from "react";
import { CollectionOverviewContainer } from "./CollectionOverview.StyledComponent";
// import "./CollectionOverview.scss";
import { connect } from "react-redux";
import { selectCollectionPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
