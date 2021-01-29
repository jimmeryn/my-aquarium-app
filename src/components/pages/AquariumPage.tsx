import React from "react";

import Page from "./Page";
import PageContent from "./PageContent";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import LatestParamList from "features/param/LatestParamsList";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { Param } from "models";
import AddButton from "components/buttons/AddButton";

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
      <AddButton
        className="refill-button"
        name="Refill"
        value={refillValue ?? "No refills"}
      />
      <AddButton className="refill-button" name="Parameters" />
      <LatestParamList params={params} />
    </Menu>
    <PageContent>
      <Navbar className="navbar" />
    </PageContent>
  </Page>
);

export default AquariumPage;
