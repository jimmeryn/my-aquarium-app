import React from "react";

import Page from "./Page";
import PageContent from "./PageContent";
import Menu from "components/Menu";
import Navbar from "components/Navbar";

const AquariumPage: React.FunctionComponent = () => (
  <Page className="page">
    <Menu className="menu"></Menu>
    <PageContent>
      <Navbar className="navbar" />
    </PageContent>
  </Page>
);

export default AquariumPage;
