import { RootState } from "app/rootReducer";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeDialog, DialogType } from "./dialogSlice";
import NewAquariumDialog from "./NewAquariumDialog";
import ParamDialog from "./ParamDialog";
import RefillDialog from "./RefillDialog";
import { addAquarium } from "features/aquarium/aquariumsSlice";
import { addParam } from "features/param/paramsSlice";

const Dialog = () => {
  const { dialogState, paramNames } = useSelector((state: RootState) => ({
    dialogState: state.dialogSlice,
    paramNames: [
      ...new Set(state.aquariumSlice[0].params.map((param) => param.name)),
    ],
  }));

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {(() => {
        switch (dialogState) {
          case DialogType.addAquarium:
            return (
              <NewAquariumDialog
                submitHandle={(name, size, startDate) => {
                  dispatch(addAquarium({ name, size, startDate }));
                  dispatch(closeDialog());
                }}
              />
            );
          case DialogType.addParam:
            return (
              <ParamDialog
                paramNames={paramNames}
                // TODO
                submitHandle={() => {
                  dispatch(closeDialog());
                }}
              />
            );
          case DialogType.addRefill:
            return (
              <RefillDialog
                // TODO
                submitHandle={(refillValue: number, date: string) => {
                  dispatch(
                    addParam({
                      name: "refill",
                      value: refillValue,
                      date,
                      aquariumId: 0,
                    })
                  );
                  dispatch(closeDialog());
                }}
              />
            );
          default:
            return null;
        }
      })()}
    </React.Fragment>
  );
};

export default Dialog;
