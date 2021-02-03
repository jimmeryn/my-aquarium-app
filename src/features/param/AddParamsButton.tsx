import React from "react";
import AddButton from "components/buttons/AddButton";
import { useDispatch } from "react-redux";
import { DialogType, openDialog } from "features/dialog/dialogSlice";

const AddParamsButton: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  return (
    <AddButton
      className="add-params-button"
      name="Parameters"
      handleOnClick={() => dispatch(openDialog({ type: DialogType.addParam }))}
    />
  );
};

export default AddParamsButton;
