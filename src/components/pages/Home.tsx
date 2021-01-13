import React from "react";
import { Link } from "react-router-dom";

import Page from "./Page";
import { Head } from "./Head";
import FishBowlComponent from "components/FishBowlComponent";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import PageContent from "./PageContent";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { AquariumParamButton } from "components/buttons/AquariumParamButton";
import { Aquarium } from "models";

const Home: React.FunctionComponent<{
  aquariums: Aquarium[];
}> = ({ aquariums }) => (
  <Page className="page">
    <Menu className="menu">
      {aquariums.map(({ id, name }) => (
        <React.Fragment key={id}>
          <Link to={`/aquarium/${id}`}>
            <AquariumTitleButton
              className="aquarium-title"
              name={name && name.length > 0 ? name : `Aquarium #${id + 1}`}
            />
          </Link>
          <Link to={`/aquarium/${id}`}>
            <AquariumParamButton
              className="aquarium-param-button"
              name="Show Params"
            />
          </Link>
          <AquariumParamButton
            className="aquarium-param-button"
            name="Add Params"
          />
          <AquariumParamButton
            className="aquarium-param-button"
            name="Add Refill"
          />
        </React.Fragment>
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
