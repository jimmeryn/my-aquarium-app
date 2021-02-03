import React from "react";
import DialogComponent from "./DialogComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { closeDialog, DialogType } from "./dialogSlice";
import DialogAquariumContent from "./DialogAquariumContent";
import DialogParamsContent from "./DialogParamsContent";
import DialogRefillContent from "./DialogRefillContent";

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
      submitHandle={dialog[dialogState].submit}
      closeDialog={() => dispatch(closeDialog())}
    >
      {dialog[dialogState].children()}
    </DialogComponent>
  );
};

export default Dialog;
