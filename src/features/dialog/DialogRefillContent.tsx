import React from "react";
import DialogInputWrapper from "./DialogInputWrapper";
import DialogInput from "./DialogInput";
import DialogInputUnit from "./DialogInputUnit";
import DialogInputLabel from "./DialogInputLabel";

const DialogRefillContent = () => (
  <DialogInputWrapper className="dialog-refill-wrapper">
    <DialogInputLabel className="dialog-refill-label" label="Refill" />
    <DialogInput className="dialog-refill-input" textAlign="center" />
    <DialogInputUnit className="dialog-refill-unit" unit="l" />
  </DialogInputWrapper>
);

export default DialogRefillContent;
