import React from "react";
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
    <Menu>
      <AquariumTitleButton
        className={"aquarium-title"}
        name={"Aquarium #1"}
        dividers={true}
      />
      <AquariumParamButton
        className={"aquarium-param-button"}
        name={"Show Params"}
      />
      <AquariumParamButton
        className={"aquarium-param-button"}
        name={"Add Params"}
      />
      <AquariumParamButton
        className={"aquarium-param-button"}
        name={"Add Refill"}
      />
      <AquariumTitleButton
        className={"aquarium-title"}
        name={"Aquarium #2"}
        dividers={true}
      />
      <AquariumParamButton
        className={"aquarium-param-button"}
        name={"Show Params"}
      />
      <AquariumParamButton
        className={"aquarium-param-button"}
        name={"Add Params"}
      />
      <AquariumParamButton
        className={"aquarium-param-button"}
        name={"Add Refill"}
      />
    </Menu>
    <PageContent>
      <Navbar />
      <div>
        <div className="head">
          <Title>{"My Aquarium Application"}</Title>
          <Subtitle>{"Collect and display data"}</Subtitle>
          <Subtitle>{"from your fish tanks"}</Subtitle>
        </div>
        <FishBowlComponent />
      </div>
    </PageContent>
  </Page>
);

export default Home;
