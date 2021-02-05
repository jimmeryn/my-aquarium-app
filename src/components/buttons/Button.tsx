import React from "react";
import styled, { css } from "styled-components";

const Button: React.FunctionComponent<{
  className: string;
  handleOnClick?: () => void;
}> = ({ className, handleOnClick, children }) => {
  function createRipple(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const button = event.currentTarget;
    if (button) {
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    }
  }
  return (
    <button
      className={className}
      onClick={(e) => {
        createRipple(e);
        if (handleOnClick) {
          e.preventDefault();
          handleOnClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export const StyledButton = styled(Button)<{ dividers?: boolean }>`
  font-family: "Poppins";
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  opacity: 1;
  position: relative;
  overflow: hidden;

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 500ms linear;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  :hover,
  :focus {
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
