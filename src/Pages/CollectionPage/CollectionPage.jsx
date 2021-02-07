import React from "react";
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import {
  CollectionPageContainer,
  Title,
  Items,
} from "./CollectionPage.StyledComponent";
// import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem as="div" key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
