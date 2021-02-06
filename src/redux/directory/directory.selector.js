import { createSelector } from "reselect";

const directoryState = (state) => state.directory;

const directorySection = createSelector(
  [directoryState],
  (directory) => directory.sections
);

export default directorySection;
