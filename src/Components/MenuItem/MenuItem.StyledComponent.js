import styled from "styled-components";

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "340px" : "240px")};
  min-width: 30%;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    .background-image {
      transform: scale(1.1);
      transition: transform 1s cubic-bezier(0.47, 0.46, 0.47, 0.47);
    }
  }
`;

export const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  height: 90px;
  padding: 0 25px;
  position: absolute;
  opacity: 0.7;
  background-color: white;
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  color: #4a4a4a;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  font-weight: lighter;
  text-transform: uppercase;
  margin-bottom: 6px;
`;
