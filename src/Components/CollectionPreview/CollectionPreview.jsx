import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  Title,
  Preview,
} from "./CollectionPreview.StyledComponent";
// import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
