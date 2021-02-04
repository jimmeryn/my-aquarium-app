import React from "react";
import DialogInputWrapper from "./DialogInputWrapper";
import DialogInput from "./DialogInput";
import DialogInputLabel from "./DialogInputLabel";
import DialogInputUnit from "./DialogInputUnit";

const DialogAquariumContent = () => (
  <React.Fragment>
    <DialogInputWrapper className="dialog-aquarium-name-wrapper">
      <DialogInputLabel
        className="dialog-aquarium-name-label"
        label="Aquarium Name"
      />
      <DialogInput className="dialog-aquarium-name-input" textAlign="center" />
    </DialogInputWrapper>
    <DialogInputWrapper className="dialog-aquarium-size-wrapper">
      <DialogInputLabel
        className="dialog-aquarium-size-label"
        label="Aquarium Size"
      />
      <DialogInput className="dialog-aquarium-size-input" isUnit />
      <DialogInputUnit className="dialog-aquarium-name-unit" unit="l" />
    </DialogInputWrapper>
  </React.Fragment>
);

export default DialogAquariumContent;
