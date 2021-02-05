import React from "react";
import styled from "styled-components";

const DialogInputUnitComponent: React.FunctionComponent<{
  className: string;
  unit: string;
}> = ({ className, unit }) => <div className={className}>{`[${unit}]`}</div>;

const DialogInputUnit = styled(DialogInputUnitComponent)`
  position: absolute;
  right: 0px;
  bottom: 6px;
`;

export default DialogInputUnit;
