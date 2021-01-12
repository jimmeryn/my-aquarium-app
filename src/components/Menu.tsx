import React from "react";
import styled from "styled-components";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { TitleButton } from "components/buttons/TitleButton";

const MenuComponent: React.FunctionComponent<{ className: string }> = ({
  className,
  children,
}) => (
  <div className={className}>
    <TitleButton className={"title-button"} name={"My Aquarium"} />
    {children}
    <AquariumTitleButton
      className={"add-aquarium-button"}
      name={"Add Aquarium"}
    />
  </div>
);

const Menu = styled(MenuComponent)`
  background-color: #18202c;
  height: 100vh;
  width: 19vw;
  z-index: 3;
  overflow-y: auto;
`;

export default Menu;
