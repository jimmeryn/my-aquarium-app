import React from "react";
import Page from "./Page";
import PageContent from "./PageContent";
import Graph from "features/graph/Graph";
import ParamMenu from "features/param/ParamMenu";
import ParamTable from "features/param/ParamsTable";

const AquariumPage: React.FunctionComponent<{
  name: string;
  aquariumId: number;
}> = ({ name, aquariumId }) => {
  return (
    <Page className="page">
      <ParamMenu name={name} aquariumId={aquariumId} />
      <PageContent>
        <Graph />
        <ParamTable />
      </PageContent>
    </Page>
  );
};

export default AquariumPage;
