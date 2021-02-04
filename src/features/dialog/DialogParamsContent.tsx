import React from "react";
import style from "./DialogParamsTable.module.scss";
import DialogInputWrapper from "./DialogInputWrapper";
import DialogInput from "./DialogInput";
import DialogInputName from "./DialogInputName";

const DialogParamsContent: React.FunctionComponent<{ params: string[] }> = ({
  params,
}) => (
  <div className={style.paramTable}>
    <div className={style.paramTableLabel}>
      <div>Name</div>
      <div>Value [mg/l]</div>
    </div>
    {params.map((param, i) => (
      <DialogInputWrapper
        key={i}
        className="dialog-param-item-wrapper"
        isTableItem
      >
        <DialogInput className="dialog-param-item-input" />
        <DialogInputName className="dialog-param-item-name" name={param} />
      </DialogInputWrapper>
    ))}
  </div>
);

export default DialogParamsContent;
