import styled from "@emotion/styled";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  width: 100vw;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  gap: 10px;

`;

export const LinkPage = styled(Link)`
  color: red;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
