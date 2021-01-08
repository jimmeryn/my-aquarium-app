import React from "react";
import FishBowlComponent from "./FishBowlComponent";
import { Title, Subtitle } from "./Typography";

const Home = () => (
  <div className="landing-page">
    <div className="head">
          <Title>{"My Aquarium Application"}</Title>
          <Subtitle>{"Collect and display data"}</Subtitle>
          <Subtitle>{"from your fish tanks"}</Subtitle>
    </div>
    <FishBowlComponent />
  </div>
);

export default Home;
