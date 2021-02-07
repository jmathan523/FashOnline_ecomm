import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  display: flex;
  border: 1px solid black;
  width: 250px;
  height: 380px;
  position: absolute;
  top: 100px;
  right: 55px;
  box-shadow: 0 5px 10px lightgray;
  background-color: whitesmoke;
  z-index: 2;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 0;
`;

export const CartItemsContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  position: relative;
`;

export const EmptyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 25%;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 2px;
`;
