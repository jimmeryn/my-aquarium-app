import styled, { css } from "styled-components";
import { StyledButton } from "./Button";

export const AquariumParamButton = styled(StyledButton)<{ divider?: boolean }>`
  width: 100%;
  height: 7vh;
  font-weight: lighter;
  font-size: 0.9rem;
  color: white;
  background-color: var(--menu-background-color);
  :hover {
    background-color: var(--hover-color);
  }
  ${(props) =>
    props.divider &&
    css`
      border-bottom: 1px solid var(--divider-color);
    `};
`;
