import React from "react";
import { Aquarium } from "models";
import Page from "./Page";
import Head from "./Head";
import PageContent from "./PageContent";
import FishBowlComponent from "components/FishBowlComponent";
import Menu from "components/Menu";
import AquariumsList from "features/aquarium/AquariumsList";
import Dialog from "features/dialog/Dialog";

const Home: React.FunctionComponent<{
  aquariums: Aquarium[];
}> = ({ aquariums }) => (
  <Page className="page">
    <Menu className="menu">
      <AquariumsList aquariums={aquariums} />
    </Menu>
    <PageContent>
      <Head className="head" />
      <FishBowlComponent />
    </PageContent>
    <Dialog />
  </Page>
);

export default Home;
