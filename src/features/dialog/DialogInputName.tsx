import React from "react";
import styled from "styled-components";

const DialogInputNameComponent: React.FunctionComponent<{
  className: string;
  name: string;
}> = ({ className, name }) => <div className={className}>{name}</div>;

const DialogInputName = styled(DialogInputNameComponent)`
  position: absolute;
  left: 0px;
  bottom: 5px;
  font-weight: lighter;
`;

export default DialogInputName;
