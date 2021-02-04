import React from "react";
import styled from "styled-components";

const DialogInputWrapperComponent: React.FunctionComponent<{
  className: string;
}> = ({ className, children }) => <div className={className}>{children}</div>;

const DialogInputWrapper = styled(DialogInputWrapperComponent)<{
  isTableItem?: boolean;
}>`
  position: relative;
  color: white;
  width: ${({ isTableItem }) => (isTableItem ? "100%" : "50%")};
  height: 7vh;
  padding: ${({ isTableItem }) => isTableItem && "10px 5px"};
  border-bottom: solid 2px var(--dark-grey-1);
  opacity: 1;
  :hover {
    opacity: 0.8;
    border-bottom: solid 2px var(--navbar-color);
  }
`;

export default DialogInputWrapper;
