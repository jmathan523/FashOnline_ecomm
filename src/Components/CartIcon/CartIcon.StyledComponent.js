import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  position: relative;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 30px;
  height: 30px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 13px;
  bottom: 8px;
  font-weight: bolder;
`;
