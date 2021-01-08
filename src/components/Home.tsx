import React from "react";
import FishBowlComponent from "./FishBowlComponent";
import Page from "./Page";
import Navbar from "./Navbar";
import Menu from "./Menu";
import PageContent from "./PageContent";
import { Title, Subtitle } from "./Typography";

const Home = () => (
  <Page>
    <Menu>
      <div>Div here</div>
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
