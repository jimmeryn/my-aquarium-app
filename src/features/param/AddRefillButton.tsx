import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { getLatestRefillValue } from "api/filterParamsFunctions";
import AddButton from "components/buttons/AddButton";
import { DialogType, openDialog } from "features/dialog/dialogSlice";

const AddRefillButton: React.FunctionComponent<{ aquariumId: number }> = ({
  aquariumId,
}) => {
  const refillValue = useSelector((state: RootState) =>
    getLatestRefillValue(state.aquariumSlice[aquariumId].params)
  );
  const dispatch = useDispatch();

  return (
    <AddButton
      className="add-refill-button"
      name="Refill"
      value={refillValue ?? "No refills"}
      handleOnClick={() => dispatch(openDialog({ type: DialogType.addRefill }))}
    />
  );
};

export default AddRefillButton;
