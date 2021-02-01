import React from "react";
import Page from "./Page";
import PageContent from "./PageContent";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import AddParamsButton from "features/param/AddParamsButton";
import AddRefillButton from "features/param/AddRefillButton";
import Graph from "features/graph/Graph";
import LatestParamsList from "features/param/LatestParamsList";
import ParamTable from "features/param/ParamsTable";

const AquariumPage: React.FunctionComponent<{
  name: string;
  aquariumId: number;
}> = ({ name, aquariumId }) => {
  return (
    <Page className="page">
      <Menu className="menu">
        <AquariumTitleButton className="aquarium-title">
          {name}
        </AquariumTitleButton>
        <AddRefillButton aquariumId={aquariumId} />
        <AddParamsButton />
        <LatestParamsList aquariumId={aquariumId} />
      </Menu>
      <PageContent>
        <Navbar className="navbar" />
        <Graph />
        <ParamTable />
      </PageContent>
    </Page>
  );
};

export default AquariumPage;
