import React from "react";
import { useDispatch } from "react-redux";
import { AquariumParamButton } from "components/buttons/AquariumParamButton";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { DialogType, openDialog } from "features/dialog/dialogSlice";

const AquariumsListItem: React.FunctionComponent<{
  id: number;
  name?: string;
  handleOnClick: () => void;
}> = ({ id, name, handleOnClick }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment key={id}>
      <AquariumTitleButton
        className="aquarium-title"
        handleOnClick={handleOnClick}
      >
        {name && name.length > 0 ? name : `Aquarium #${id + 1}`}
      </AquariumTitleButton>
      <AquariumParamButton
        className="aquarium-param-button"
        handleOnClick={handleOnClick}
      >
        {"Show Params"}
      </AquariumParamButton>
      <AquariumParamButton
        className="aquarium-param-button"
        handleOnClick={() =>
          dispatch(openDialog({ type: DialogType.addParam }))
        }
      >
        {"Add Params"}
      </AquariumParamButton>
      <AquariumParamButton
        className="aquarium-param-button"
        handleOnClick={() =>
          dispatch(openDialog({ type: DialogType.addRefill }))
        }
      >
        {"Add Refill"}
      </AquariumParamButton>
    </React.Fragment>
  );
};

export default AquariumsListItem;
