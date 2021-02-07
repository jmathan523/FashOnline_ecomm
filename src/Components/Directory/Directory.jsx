import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import directorySection from "../../redux/directory/directory.selector";
import { DirectoryMenuContainer } from "./Directory.StyledComponent";
// import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: directorySection,
});

export default connect(mapStateToProps)(Directory);
