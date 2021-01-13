import * as React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const NavbarComponent: React.FunctionComponent<{ className: string }> = ({
  className,
}) => (
  <div className={className}>
    <Hamburger
      active={true}
      setActive={() => {
        return;
      }}
    />
  </div>
);

const Navbar = styled(NavbarComponent)`
  background-color: #009be5;
  min-height: 7vh;
  height: 7vh;
  width: 81vw;
  display: flex;
  box-shadow: 0 2px 3px #0000003a;
  position: sticky;
  top: 0;
`;

export default Navbar;
