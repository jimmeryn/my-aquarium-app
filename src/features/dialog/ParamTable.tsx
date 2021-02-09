import React from "react";
import styles from "./Dialog.module.scss";
import DialogInput from "./DialogInput";
import DialogInputName from "./DialogInputName";
import DialogInputWrapper from "./DialogInputWrapper";

const ParamTable: React.FunctionComponent<{
  paramNames: string[];
  paramValues: number[];
  setParamValue: (paramId: number) => (paramValue: number) => void;
}> = ({ paramNames, paramValues, setParamValue }) => (
  <div className={styles.paramTable}>
    <div className={styles.paramTableLabel}>
      <div>Name</div>
      <div>Value [mg/l]</div>
    </div>
    {paramNames.map((paramName, i) => (
      <DialogInputWrapper
        key={i}
        className="dialog-param-item-wrapper"
        isTableItem
      >
        <DialogInput
          className="dialog-param-item-input"
          value={paramValues[i]}
          handleOnChange={setParamValue(i)}
        />
        <DialogInputName className="dialog-param-item-name" name={paramName} />
      </DialogInputWrapper>
    ))}
  </div>
);

export default ParamTable;
