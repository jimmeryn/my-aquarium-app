import styled, { css } from "styled-components";
import { StyledButton } from "./Button";

export const AquariumParamButton = styled(StyledButton)<{ divider?: boolean }>`
  font-weight: lighter;
  font-size: 0.9rem;
  color: white;
  background-color: #18202c;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  ${(props) =>
    props.divider &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    `};
`;
