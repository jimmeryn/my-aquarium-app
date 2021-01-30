import React from "react";

import Page from "./Page";
import PageContent from "./PageContent";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import LatestParamList from "features/param/LatestParamsList";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { Param } from "models";
import AddRefillButton from "features/param/AddRefillButton";
import AddParamsButton from "features/param/AddParamsButton";

const AquariumPage: React.FunctionComponent<{
  name: string;
  params: Param[];
  refillValue?: number;
}> = ({ name, params, refillValue }) => (
  <Page className="page">
    <Menu className="menu">
      <AquariumTitleButton className="aquarium-title">
        {name}
      </AquariumTitleButton>
      <AddRefillButton refillValue={refillValue} />
      <AddParamsButton />
      <LatestParamList params={params} />
    </Menu>
    <PageContent>
      <Navbar className="navbar" />
    </PageContent>
  </Page>
);

export default AquariumPage;
