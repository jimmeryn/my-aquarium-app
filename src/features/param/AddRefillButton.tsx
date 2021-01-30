import React from "react";
import AddButton from "components/buttons/AddButton";

const AddRefillButton: React.FunctionComponent<{
  refillValue?: number;
}> = ({ refillValue }) => (
  <AddButton
    className="add-refill-button"
    name="Refill"
    value={refillValue ?? "No refills"}
  />
);

export default AddRefillButton;
