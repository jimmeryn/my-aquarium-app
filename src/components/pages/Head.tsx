import React from "react";
import styled from "styled-components";
import { Subtitle, Title } from "components/Typography";

const HeadComponent: React.FunctionComponent<{ className: string }> = ({
  className,
}) => (
  <div className={className}>
    <Title>{"My Aquarium Application"}</Title>
    <Subtitle>{"Collect and display data"}</Subtitle>
    <Subtitle>{"from your fish tanks"}</Subtitle>
  </div>
);

const Head = styled(HeadComponent)`
  margin: 3vw 20vw 15vh 6vw;
  padding: 0;
`;

export default Head;
