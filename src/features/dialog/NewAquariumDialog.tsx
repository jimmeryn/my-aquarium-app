import React from "react";
import DatePicker from "./DatePicker";
import DialogComponent from "./DialogComponent";
import DialogInput from "./DialogInput";
import DialogInputLabel from "./DialogInputLabel";
import DialogInputUnit from "./DialogInputUnit";
import DialogInputWrapper from "./DialogInputWrapper";

const NewAquariumDialog: React.FunctionComponent<{
  submitHandle: (
    name: string | undefined,
    size: number,
    startDate: string
  ) => void;
}> = ({ submitHandle }) => {
  const [size, setSize] = React.useState(100);
  const [name, setName] = React.useState("");
  const [startDate, setStartDate] = React.useState(
    new Date().toJSON().slice(0, 10)
  );

  return (
    <DialogComponent
      title="Add Aquarium"
      submitHandle={() => submitHandle(name, size, startDate)}
    >
      <DialogInputWrapper className="dialog-aquarium-name-wrapper">
        <DialogInputLabel
          className="dialog-aquarium-name-label"
          label="Name (optional)"
        />
        <DialogInput
          className="dialog-aquarium-name-input"
          textAlign="center"
          value={name}
          handleOnChange={setName}
        />
      </DialogInputWrapper>
      <DialogInputWrapper className="dialog-aquarium-size-wrapper">
        <DialogInputLabel className="dialog-aquarium-size-label" label="Size" />
        <DialogInput
          className="dialog-aquarium-size-input"
          textAlign="center"
          value={size}
          handleOnChange={setSize}
        />
        <DialogInputUnit className="dialog-aquarium-name-unit" unit="l" />
      </DialogInputWrapper>
      <DatePicker
        label="Start Date"
        date={startDate}
        handleSetDate={setStartDate}
      />
    </DialogComponent>
  );
};

export default NewAquariumDialog;
