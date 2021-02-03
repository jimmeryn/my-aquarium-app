import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  font-family: "Poppins";
  font-style: normal;
  text-align: right;
  margin-left: 0;
  font-weight: 10;
  font-size: 36px;
  line-height: 40px;
  text-transform: capitalize;
  color: black;
`;

export const Subtitle = styled(Title)`
  margin-left: 150;
  font-weight: 200;
  font-size: 24px;
  line-height: 24px;
  text-transform: lowercase;
  color: var(--subtitle-color);
`;
