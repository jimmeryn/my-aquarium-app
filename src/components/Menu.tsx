import React from "react";
import styled from "styled-components";
import { TitleButton } from "components/buttons/TitleButton";

const MenuComponent: React.FunctionComponent<{
  className: string;
  handleHomeClick: () => void;
}> = ({ className, children, handleHomeClick }) => (
  <div className={className}>
    <TitleButton className="title-button" handleOnClick={handleHomeClick}>
      {"My Aquarium"}
    </TitleButton>
    {children}
  </div>
);

const Menu = styled(MenuComponent)`
  background-color: var(--menu-background-color);
  height: 100vh;
  width: 19vw;
  overflow-y: auto;
`;

export default Menu;
