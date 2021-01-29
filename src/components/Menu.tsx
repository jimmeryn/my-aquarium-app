import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleButton } from "components/buttons/TitleButton";

const MenuComponent: React.FunctionComponent<{
  className: string;
}> = ({ className, children }) => (
  <div className={className}>
    <Link to={"/"}>
      <TitleButton className="title-button">{"My Aquarium"}</TitleButton>
    </Link>
    {children}
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
