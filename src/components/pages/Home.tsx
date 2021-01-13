import React from "react";
import { Link } from "react-router-dom";

import FishBowlComponent from "components/FishBowlComponent";
import Page from "./Page";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import PageContent from "./PageContent";
import { Title, Subtitle } from "components/Typography";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import { AquariumParamButton } from "components/buttons/AquariumParamButton";

const Home = () => (
  <Page>
    <Menu className="menu">
          <Link to={`/aquarium/${id}`}>
      <AquariumTitleButton
        className={"aquarium-title"}
        name={"Aquarium #1"}
        dividers={true}
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
