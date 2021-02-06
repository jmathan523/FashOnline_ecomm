import { createSelector } from "reselect";

const selectcollection = (state) => state.shop;

export const selectCollectionItems = createSelector(
  [selectcollection],
  (shop) => shop.collections
);

export const selectCollectionPreview = createSelector(
  [selectCollectionItems],
  // Object.keys will return array of keys in the object
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollectionItems],
    (collections) => collections[collectionUrlParam]
  );
