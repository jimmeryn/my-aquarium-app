import React from "react";
import styled from "styled-components";

const DialogInputLabelComponent: React.FunctionComponent<{
  className: string;
  label: string;
}> = ({ className, label }) => <div className={className}>{label}</div>;

const DialogInputLabel = styled(DialogInputLabelComponent)`
  position: absolute;
  max-height: 40%;
  top: 0px;
  left: 0px;
`;

export default DialogInputLabel;
