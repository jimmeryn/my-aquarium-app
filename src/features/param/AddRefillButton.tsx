import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { getLatestRefillValue } from "api/filterParamsFunctions";
import AddButton from "components/buttons/AddButton";

const AddRefillButton: React.FunctionComponent<{ aquariumId: number }> = ({
  aquariumId,
}) => {
  const refillValue = useSelector((state: RootState) =>
    getLatestRefillValue(state.aquariumSlice[aquariumId].params)
  );

  return (
    <AddButton
      className="add-refill-button"
      name="Refill"
      value={refillValue ?? "No refills"}
    />
  );
};

export default AddRefillButton;
