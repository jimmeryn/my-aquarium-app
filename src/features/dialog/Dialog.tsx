import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { closeDialog, DialogType } from "./dialogSlice";
import DialogAquariumContent from "./DialogAquariumContent";
import DialogComponent from "./DialogComponent";
import DialogParamsContent from "./DialogParamsContent";
import DialogRefillContent from "./DialogRefillContent";
import DialogInputWrapper from "./DialogInputWrapper";
import DialogInput from "./DialogInput";
import DialogInputLabel from "./DialogInputLabel";

const dialog = {
  addParam: {
    title: "Add Parameter",
    submit: () => {},
    children: () => <DialogParamsContent />,
  },
  addRefill: {
    title: "Add Refill",
    submit: () => {},
    children: () => <DialogRefillContent />,
  },
  addAquarium: {
    title: "Add Aquarium",
    submit: () => {},
    children: () => <DialogAquariumContent />,
  },
  closed: { title: "", submit: () => {}, children: () => null },
};

const Dialog = () => {
  const dialogState = useSelector((state: RootState) => state.dialogSlice);
  const dispatch = useDispatch();

  return (
    <DialogComponent
      title={dialog[dialogState].title}
      isDialogOpen={dialogState !== DialogType.closed}
      submitHandle={() => {
        dialog[dialogState].submit();
        dispatch(closeDialog());
      }}
      closeDialog={() => dispatch(closeDialog())}
    >
      {dialog[dialogState].children()}
      <DialogInputWrapper className="date-picker">
        <DialogInputLabel className="date-picker-label" label={`Date`} />
        <DialogInput
          className="date-picker-input"
          type="date"
          textAlign="center"
        />
      </DialogInputWrapper>
    </DialogComponent>
  );
};

export default Dialog;
