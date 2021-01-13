import React from "react";
import { Aquarium } from "models";
import Page from "./Page";
import Head from "./Head";
import PageContent from "./PageContent";
import AquariumsList from "features/aquarium/AquariumsList";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import FishBowlComponent from "components/FishBowlComponent";
import Menu from "components/Menu";
import Navbar from "components/Navbar";

const Home: React.FunctionComponent<{
  aquariums: Aquarium[];
}> = ({ aquariums }) => (
  <Page className="page">
    <Menu className="menu">
      {aquariums.map(({ id, name }) => (
        <AquariumsList id={id} name={name} />
      ))}
      <AquariumTitleButton
        className="add-aquarium-button"
        name="Add Aquarium"
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
