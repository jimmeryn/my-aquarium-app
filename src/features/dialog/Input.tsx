import React from "react";
import style from "./Dialog.module.scss";

const Input: React.FunctionComponent<{
  className: string;
  type?: string;
  label?: string;
  unit?: string;
}> = ({ className, type, label, unit }) => (
  <div className={className}>
    <label className={style.label}>{label}</label>
    <input type={type ?? "text"} className={style.dialogInput} />
    <span className={style.unit}>{unit}</span>
  </div>
);

export default Input;
