import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImage,
  Title,
  Content,
  SubTitle,
} from "./MenuItem.StyledComponent";
// import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <Content>
        <Title>{title}</Title>
        <SubTitle>Shop Now</SubTitle>
      </Content>
    </MenuItemContainer>
  );
};

// withRouter HOF gives access to history,location and match props from Route directly to the component
// where it is required
export default withRouter(MenuItem);
