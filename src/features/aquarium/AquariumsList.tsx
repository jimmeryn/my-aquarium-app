import React from "react";
import { Aquarium } from "models";
import AquariumsListItem from "./AquariumsListItem";

const AquariumsList: React.FunctionComponent<{ aquariums: Aquarium[] }> = ({
  aquariums,
}) => (
  <React.Fragment>
    {aquariums.map(({ id, name }) => (
      <AquariumsListItem key={id} id={id} name={name} />
    ))}
  </React.Fragment>
);

export default AquariumsList;
