import React from "react";
import DialogInput from "./DialogInput";
import DialogInputLabel from "./DialogInputLabel";
import DialogInputWrapper from "./DialogInputWrapper";

const DatePicker: React.FunctionComponent<{
  label: string;
  date: string;
  handleSetDate: React.Dispatch<React.SetStateAction<string>>;
}> = ({ label, date, handleSetDate }) => {
  return (
    <DialogInputWrapper className="date-picker">
      <DialogInputLabel className="date-picker-label" label={label} />
      <DialogInput
        className="date-picker-input"
        type="date"
        value={date}
        textAlign="center"
        handleOnChange={handleSetDate}
      />
    </DialogInputWrapper>
  );
};

export default DatePicker;
