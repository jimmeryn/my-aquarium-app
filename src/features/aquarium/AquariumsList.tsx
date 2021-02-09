import React from "react";
import { Aquarium } from "models";
import AquariumsListItem from "./AquariumsListItem";
import AddAquariumButton from "./AddAquariumButton";

const AquariumsList: React.FunctionComponent<{
  aquariums: Aquarium[];
  handleOnClick: (id: number) => void;
}> = ({ aquariums, handleOnClick }) => (
  <React.Fragment>
    {aquariums.map(({ name }, id) => (
      <AquariumsListItem
        key={id}
        id={id}
        name={name}
        handleOnClick={() => handleOnClick(id)}
      />
    ))}
    <AddAquariumButton />
  </React.Fragment>
);

export default AquariumsList;
