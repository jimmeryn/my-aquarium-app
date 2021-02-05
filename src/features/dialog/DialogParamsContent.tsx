import React from "react";
import styles from "./Dialog.module.scss";
import DialogInputWrapper from "./DialogInputWrapper";
import DialogInput from "./DialogInput";
import DialogInputName from "./DialogInputName";

const DialogParamsContent: React.FunctionComponent<{
  params: string[];
  values: number[];
}> = ({ params, values }) => (
  <div className={styles.paramTable}>
    <div className={styles.paramTableLabel}>
      <div>Name</div>
      <div>Value [mg/l]</div>
    </div>
    {params.map((param, i) => (
      <DialogInputWrapper
        key={i}
        className="dialog-param-item-wrapper"
        isTableItem
      >
        <DialogInput className="dialog-param-item-input" value={values[i]} />
        <DialogInputName className="dialog-param-item-name" name={param} />
      </DialogInputWrapper>
    ))}
  </div>
);

export default DialogParamsContent;
