import React from "react";
import "./CollectionOverview.scss";
import { connect } from "react-redux";
import { selectCollectionPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
