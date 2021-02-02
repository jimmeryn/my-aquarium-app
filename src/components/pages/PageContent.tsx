import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaeff1;
  text-align: center;
  max-width: 81vw;
`;

const PageContent: React.FunctionComponent = ({ children }) => (
  <StyledContent>
    <Navbar className="navbar" />
    {children}
  </StyledContent>
);

export default PageContent;
