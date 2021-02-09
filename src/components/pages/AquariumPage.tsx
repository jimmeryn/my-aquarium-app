import React from "react";
import Page from "./Page";
import PageContent from "./PageContent";
import Graph from "features/graph/Graph";
import Dialog from "features/dialog/Dialog";
import AddParamsButton from "features/param/AddParamsButton";
import AddRefillButton from "features/param/AddRefillButton";
import ParamTable from "features/param/ParamsTable";
import LatestParamsList from "features/param/LatestParamsList";
import Menu from "components/Menu";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";

const AquariumPage: React.FunctionComponent<{
  name: string;
  aquariumId: number;
  handleAquariumClick: () => void;
  handleHomeClick: () => void;
}> = ({ name, aquariumId, handleAquariumClick, handleHomeClick }) => {
  return (
    <Page className="page">
      <Menu className="menu" handleHomeClick={handleHomeClick}>
        <AquariumTitleButton
          className="aquarium-title"
          handleOnClick={handleAquariumClick}
        >
          {name}
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
