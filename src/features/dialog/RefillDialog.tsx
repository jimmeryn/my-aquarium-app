import React from "react";
import DatePicker from "./DatePicker";
import DialogComponent from "./DialogComponent";
import DialogInput from "./DialogInput";
import DialogInputLabel from "./DialogInputLabel";
import DialogInputUnit from "./DialogInputUnit";
import DialogInputWrapper from "./DialogInputWrapper";

const RefillDialog: React.FunctionComponent<{
  submitHandle: (refillValue: number, date: string) => void;
}> = ({ submitHandle }) => {
  const [refillValue, setRefillValue] = React.useState(10);
  const [date, setDate] = React.useState(new Date().toJSON().slice(0, 10));

  return (
    <DialogComponent
      title="Add Refill"
      submitHandle={() => submitHandle(refillValue, date)}
    >
      <DialogInputWrapper className="dialog-refill-wrapper">
        <DialogInputLabel className="dialog-refill-label" label="Refill" />
        <DialogInput
          className="dialog-refill-input"
          textAlign="center"
          value={refillValue}
          handleOnChange={setRefillValue}
        />
        <DialogInputUnit className="dialog-refill-unit" unit="l" />
      </DialogInputWrapper>
      <DatePicker label="Refill Date" date={date} handleSetDate={setDate} />
    </DialogComponent>
  );
};

export default RefillDialog;
