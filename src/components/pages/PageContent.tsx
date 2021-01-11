import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaeff1;
  text-align: center;
`;

const PageContent: React.FunctionComponent = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);

export default PageContent;
