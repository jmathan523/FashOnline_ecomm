import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-position: center;
  background-size: cover;
  margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  height: 5%;
  margin-bottom: 15px;
`;

export const Name = styled.span`
  width: 90%;
`;

export const Price = styled.span`
  width: 10%;
`;

export const AddButton = styled(CustomButton)`
  position: absolute;
  bottom: 75px;
  display: none;

  &:focus,
  &:active {
    border: none;
  }
`;
