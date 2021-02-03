import React from "react";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { useDispatch } from "react-redux";
import { DialogType, openDialog } from "features/dialog/dialogSlice";

const AddAquariumButton = () => {
  const dispatch = useDispatch();

  return (
    <AquariumTitleButton
      className="add-aquarium-button"
      handleOnClick={() =>
        dispatch(openDialog({ type: DialogType.addAquarium }))
      }
    >
      {"Add Aquarium"}
    </AquariumTitleButton>
  );
};

export default AddAquariumButton;
