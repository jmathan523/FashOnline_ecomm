import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  Name,
  Price,
  ImageContainer,
  AddButton,
} from "./CollectionItem.StyledComponent";
// import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionFooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, { addItem })(CollectionItem);
