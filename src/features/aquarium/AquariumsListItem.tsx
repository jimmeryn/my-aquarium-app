import React from "react";
import { AquariumParamButton } from "components/buttons/AquariumParamButton";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { Link } from "react-router-dom";

const AquariumsListItem: React.FunctionComponent<{
  id: number;
  name?: string;
}> = ({ id, name }) => (
  <React.Fragment key={id}>
    <Link to={`/aquarium/${id}`}>
      <AquariumTitleButton
        className="aquarium-title"
        name={name && name.length > 0 ? name : `Aquarium #${id + 1}`}
      />
    </Link>
    <Link to={`/aquarium/${id}`}>
      <AquariumParamButton
        className="aquarium-param-button"
        name="Show Params"
      />
    </Link>
    <AquariumParamButton className="aquarium-param-button" name="Add Params" />
    <AquariumParamButton className="aquarium-param-button" name="Add Refill" />
  </React.Fragment>
);

export default AquariumsListItem;
