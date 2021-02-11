import React from "react";
import { useSelector } from "react-redux";
import Page from "./Page";
import PageContent from "./PageContent";
import { getLatestRefillValue } from "api/filterParamsFunctions";
import Graph from "features/graph/Graph";
import Dialog from "features/dialog/Dialog";
import ParamTable from "features/param/ParamsTable";
import LatestParamsList from "features/aquarium/LatestParamsList";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import AddButton from "components/buttons/AddButton";

const AquariumPage: React.FunctionComponent<{
  aquariumId: number;
  handleAquariumClick: () => void;
  handleHomeClick: () => void;
}> = ({ aquariumId, handleAquariumClick, handleHomeClick }) => {
  const aquariumName =
    useSelector((state: RootState) => state.aquariumSlice)[aquariumId].name ??
    `Aquarium #${aquariumId + 1}`;
  return (
    <Page className="page">
      <Menu className="menu" handleHomeClick={handleHomeClick}>
        <AquariumTitleButton
          className="aquarium-title"
          handleOnClick={handleAquariumClick}
        >
          {aquariumName}
        </AquariumTitleButton>
        <AddButton
          className="add-refill-button"
          name="Refill"
          value={refillValue ?? "No refills"}
          handleOnClick={() =>
            dispatch(openDialog({ type: DialogType.addRefill, aquariumId }))
          }
        />
        <AddButton
          className="add-params-button"
          name="Parameters"
          handleOnClick={() =>
            dispatch(openDialog({ type: DialogType.addParam, aquariumId }))
          }
        />
        <LatestParamsList aquariumId={aquariumId} />
      </Menu>
      <PageContent>
        <Graph />
        <ParamTable />
      </PageContent>
      <Dialog />
    </Page>
  );
};

export default AquariumPage;
