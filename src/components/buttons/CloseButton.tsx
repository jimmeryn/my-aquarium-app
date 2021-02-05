import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

const CloseButtonComponent: React.FunctionComponent<{
  className: string;
  isDialogOpen: boolean;
  handleOnClick: () => void;
}> = ({ className, isDialogOpen, handleOnClick }) => {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDialogOpen && wrapper.current) {
      const closeButton = wrapper.current.children[0];

      gsap.set([closeButton], { autoAlpha: 0 });
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.to(closeButton, { autoAlpha: 1 });
    }
  }, [isDialogOpen]);

  return (
    <div ref={wrapper}>
      <button
        className={className}
        onClick={() => {
          handleOnClick();
        }}
      />
    </div>
  );
};

const CloseButton = styled(CloseButtonComponent)`
  visibility: hidden;
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
    position: absolute;
    left: 32px;
    top: 30px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    cursor: pointer;
    background-color: transparent;
    border: none;

    :before,
    :after {
      position: absolute;
      content: " ";
      top: 0px;
      height: 33px;
      width: 2px;
      background-color: #ffffff;
    }

    :before {
      transform: rotate(45deg);
    }

    :after {
      transform: rotate(-45deg);
    }
  }
`;

export default CloseButton;
