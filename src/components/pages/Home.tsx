import React from "react";
import { Aquarium } from "models";
import Page from "./Page";
import Head from "./Head";
import PageContent from "./PageContent";
import AquariumsList from "features/aquarium/AquariumsList";
import FishBowlComponent from "components/FishBowlComponent";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";

const Home: React.FunctionComponent<{
  aquariums: Aquarium[];
}> = ({ aquariums }) => (
  <Page className="page">
    <Menu className="menu">
      <AquariumsList aquariums={aquariums} />
      <AquariumTitleButton className="add-aquarium-button">
        {"Add Aquarium"}
      </AquariumTitleButton>
      />
    </Menu>
    <PageContent>
      <Navbar className="navbar" />
      <Head className="head" />
      <FishBowlComponent />
    </PageContent>
  </Page>
);

export default Home;
