import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Page: React.FunctionComponent = ({ children }) => (
  <StyledPage>{children}</StyledPage>
);

export default Page;
