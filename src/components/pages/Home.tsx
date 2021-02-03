import React from "react";
import { Aquarium } from "models";
import Page from "./Page";
import Head from "./Head";
import PageContent from "./PageContent";
import AquariumsList from "features/aquarium/AquariumsList";
import FishBowlComponent from "components/FishBowlComponent";
import Menu from "components/Menu";
import Dialog from "features/dialog/Dialog";
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
      <Dialog
        className="dialog"
        title="Test"
        submitHandle={() => {}}
        isOpen={false}
      />
    </Menu>
    <PageContent>
      <Head className="head" />
      <FishBowlComponent />
    </PageContent>
      <Dialog />
  </Page>
);

export default Home;
