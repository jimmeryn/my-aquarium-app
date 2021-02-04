import React from "react";
import styled, { css } from "styled-components";

const Button: React.FunctionComponent<{
  className: string;
  handleOnClick?: () => void;
}> = ({ className, handleOnClick, children }) => (
  <button
    className={className}
    onClick={(e) => {
      if (handleOnClick) {
        e.preventDefault();
        handleOnClick();
      }
    }}
  >
    {children}
  </button>
);

export const StyledButton = styled(Button)<{ dividers?: boolean }>`
  font-family: "Poppins";
  text-transform: uppercase;
  cursor: pointer;
  color: white;

  opacity: 1;
  :hover {
    opacity: 0.8;
  }

  border: none;
  ${(props) =>
    props.dividers &&
    css`
      border-top: 2px solid var(--dark-grey-1);
      border-bottom: 2px solid var(--dark-grey-1);
    `}
`;
