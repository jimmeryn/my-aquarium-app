import React from "react";
import { AquariumParamButton } from "components/buttons/AquariumParamButton";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { DialogType } from "features/dialog/dialogSlice";

const AquariumsListItem: React.FunctionComponent<{
  id: number;
  name?: string;
  handleOpenAquarium: () => void;
  handleOpenDialog: (type: DialogType) => void;
}> = ({ id, name, handleOpenAquarium, handleOpenDialog }) => (
  <React.Fragment key={id}>
    <AquariumTitleButton
      className="aquarium-title"
      handleOnClick={handleOpenAquarium}
    >
      {name && name.length > 0 ? name : `Aquarium #${id + 1}`}
    </AquariumTitleButton>
    <AquariumParamButton
      className="aquarium-param-button"
      handleOnClick={handleOpenAquarium}
    >
      {"Show Params"}
    </AquariumParamButton>
    <AquariumParamButton
      className="aquarium-param-button"
      handleOnClick={() => handleOpenDialog(DialogType.addParam)}
    >
      {"Add Params"}
    </AquariumParamButton>
    <AquariumParamButton
      className="aquarium-param-button"
      handleOnClick={() => handleOpenDialog(DialogType.addRefill)}
    >
      {"Add Refill"}
    </AquariumParamButton>
  </React.Fragment>
);

export default AquariumsListItem;
