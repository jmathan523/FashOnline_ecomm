import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  // console.log(history, match);
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

// withRouter HOF gives access to history,location and match props from Route directly to the component
// where it is required
export default withRouter(MenuItem);
