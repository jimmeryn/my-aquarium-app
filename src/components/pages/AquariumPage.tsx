import React from "react";

import Page from "./Page";
import PageContent from "./PageContent";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import LatestParamList from "features/param/LatestParamsList";

const AquariumPage: React.FunctionComponent = () => (
  <Page className="page">
    <Menu className="menu">
      <LatestParamList
        params={[
          {
            id: 1,
            name: "Cl2",
            value: 12.3,
            aquariumId: 0,
            date: new Date(),
          },
          {
            id: 2,
            name: "NO2",
            value: 125,
            aquariumId: 0,
            date: new Date(),
          },
        ]}
      />
    </Menu>
    <PageContent>
      <Navbar className="navbar" />
    </PageContent>
  </Page>
);

export default AquariumPage;
