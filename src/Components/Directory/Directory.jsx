import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import directorySection from "../../redux/directory/directory.selector";
import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: directorySection,
});

export default connect(mapStateToProps)(Directory);
