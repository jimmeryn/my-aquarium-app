import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import Menu from "components/Menu";
import React from "react";
import AddParamsButton from "./AddParamsButton";
import AddRefillButton from "./AddRefillButton";
import LatestParamsList from "./LatestParamsList";

const ParamMenu: React.FunctionComponent<{
  name: string;
  aquariumId: number;
}> = ({ name, aquariumId }) => (
  <Menu className="menu">
    <AquariumTitleButton className="aquarium-title">{name}</AquariumTitleButton>
    <AddRefillButton aquariumId={aquariumId} />
    <AddParamsButton />
    <LatestParamsList aquariumId={aquariumId} />
  </Menu>
);

export default ParamMenu;
