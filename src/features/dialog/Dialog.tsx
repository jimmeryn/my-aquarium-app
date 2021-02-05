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

const dialogSubmit = {
  addParam: () => {},
  addRefill: () => {},
  addAquarium: () => {},
  closed: () => {},
};

const dialogTitle = {
  addParam: "Add Parameter",
  addRefill: "Add Refill",
  addAquarium: "Add Aquarium",
  closed: "",
};

const Dialog = () => {
  const { dialogState, params } = useSelector((state: RootState) => ({
    dialogState: state.dialogSlice,
    params: [
      ...new Set(state.aquariumSlice[0].params.map((param) => param.name)),
    ],
  }));
  const dispatch = useDispatch();

  return (
    <DialogComponent
      title={dialogTitle[dialogState]}
      isDialogOpen={dialogState !== DialogType.closed}
      submitHandle={() => {
        dialogSubmit[dialogState]();
        dispatch(closeDialog());
      }}
      closeDialog={() => dispatch(closeDialog())}
    >
      {(() => {
        switch (dialogState) {
          case DialogType.addAquarium:
            return <DialogAquariumContent value={100} />;
          case DialogType.addParam:
            return (
              <DialogParamsContent
                params={params}
                values={Array(params.length).fill(0)}
              />
            );
          case DialogType.addRefill:
            return <DialogRefillContent value={10} />;
          default:
            return null;
        }
      })()}
      <DialogInputWrapper className="date-picker">
        <DialogInputLabel className="date-picker-label" label="Date" />
        <DialogInput
          className="date-picker-input"
          type="date"
          value={new Date().toJSON().slice(0, 10)}
          textAlign="center"
        />
      </DialogInputWrapper>
    </DialogComponent>
  );
};

export default Dialog;
