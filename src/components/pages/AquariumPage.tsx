import React from "react";
import { useSelector } from "react-redux";
import Page from "./Page";
import PageContent from "./PageContent";
import { RootState } from "app/rootReducer";
import Graph from "features/graph/Graph";
import Dialog from "features/dialog/Dialog";
import AddParamsButton from "features/param/AddParamsButton";
import AddRefillButton from "features/param/AddRefillButton";
import ParamTable from "features/param/ParamsTable";
import LatestParamsList from "features/param/LatestParamsList";
import Menu from "components/Menu";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";

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
        <AddRefillButton aquariumId={aquariumId} />
        <AddParamsButton />
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
