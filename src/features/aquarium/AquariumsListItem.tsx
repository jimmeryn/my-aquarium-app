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
      <AquariumTitleButton className="aquarium-title">
        {name && name.length > 0 ? name : `Aquarium #${id + 1}`}
      </AquariumTitleButton>
    </Link>
    <Link to={`/aquarium/${id}`}>
      <AquariumParamButton className="aquarium-param-button">
        {"Show Params"}
      </AquariumParamButton>
    </Link>
    <AquariumParamButton className="aquarium-param-button">
      {"Add Params"}
    </AquariumParamButton>
    <AquariumParamButton className="aquarium-param-button">
      {"Add Refill"}
    </AquariumParamButton>
  </React.Fragment>
);

export default AquariumsListItem;
