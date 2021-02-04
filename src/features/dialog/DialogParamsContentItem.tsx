import React from "react";
import styled from "styled-components";
import style from "./DialogParamsTable.module.scss";
import Input from "./Input";

const DialogParamsContentItemComponent: React.FunctionComponent<{
  className: string;
  label: string;
}> = ({ className, label }) => (
  <div className={className}>
    <div className={style.paramLabel}>{label}</div>
    <Input className={style.dialogParamInput} />
  </div>
);

const DialogParamsContentItem = styled(DialogParamsContentItemComponent)`
  padding: 10px 5px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 2px var(--dark-grey-1);
  opacity: 1;
  :hover {
    opacity: 0.8;
    border-bottom: solid 2px var(--navbar-color);
  }
`;

export default DialogParamsContentItem;
