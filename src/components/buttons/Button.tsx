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
  width: 100%;
  margin: 0;
  padding: 0;
  height: 7vh;
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
      border-top: 2px solid #313b49;
      border-bottom: 2px solid #313b49;
    `}
`;
