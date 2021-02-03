import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AquariumParamButton } from "components/buttons/AquariumParamButton";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { DialogType, openDialog } from "features/dialog/dialogSlice";

const AquariumsListItem: React.FunctionComponent<{
  id: number;
  name?: string;
}> = ({ id, name }) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment key={id}>
      <Link to={`/aquarium/${id}`}>
        <AquariumTitleButton className="aquarium-title">
          {name && name.length > 0 ? name : `Aquarium #${id + 1}`}
        </AquariumTitleButton>
      </Link>
      <Link to={`/aquarium/${id}`}>
        <AquariumParamButton className="aquarium-param-button">
          {"Show Params"}
        </AquariumParamButton>
      </Link>
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
