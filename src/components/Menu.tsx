import React from "react";
import styled from "styled-components";
import Button from "./buttons/Button";

const StyledMenu = styled.div`
  background-color: #18202c;
  height: 100vh;
  width: 19vw;
  z-index: 3;
  overflow-y: auto;
`;

const Menu: React.FunctionComponent = ({ children }) => (
  <StyledMenu>
    {children}
  </StyledMenu>
);

export default Menu;
