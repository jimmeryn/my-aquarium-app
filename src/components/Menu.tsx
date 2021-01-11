import React from "react";
import styled from "styled-components";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { TitleButton } from "components/buttons/TitleButton";

const StyledMenu = styled.div`
  background-color: #18202c;
  height: 100vh;
  width: 19vw;
  z-index: 3;
  overflow-y: auto;
`;

const Menu: React.FunctionComponent = ({ children }) => (
  <StyledMenu>
    <TitleButton className={"title-button"} name={"My Aquarium"} />
    {children}
    <AquariumTitleButton
      className={"add-aquarium-button"}
      name={"Add Aquarium"}
    />
  </StyledMenu>
);

export default Menu;
