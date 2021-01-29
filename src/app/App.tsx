import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "components/pages/Home";
import AquariumPage from "components/pages/AquariumPage";
import { Aquarium } from "models";

const aquariums: Aquarium[] = require("api/db.json").aquariums;

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home aquariums={aquariums} />
      </Route>
      {aquariums.map(({ id }) => (
        <Route key={id} path={`/aquarium/${id}`}>
          <AquariumPage
            name={`Aquarium #${id + 1}`}
            params={[
              {
                id: 1,
                name: "Cl2",
                value: 0,
                aquariumId: 0,
                date: new Date(),
              },
              {
                id: 2,
                name: "pH",
                value: 6.2,
                aquariumId: 0,
                date: new Date(),
              },
              {
                id: 3,
                name: "KH",
                value: 4,
                aquariumId: 0,
                date: new Date(),
              },
              {
                id: 4,
                name: "GH",
                value: 11,
                aquariumId: 0,
                date: new Date(),
              },
              {
                id: 5,
                name: "NO2",
                value: 0.1,
                aquariumId: 0,
                date: new Date(),
              },
              {
                id: 6,
                name: "NO3",
                value: 150,
                aquariumId: 0,
                date: new Date(),
              },
            ]}
          />
        </Route>
      ))}
      <Route path="*">
        {/* TODO: Error page 404*/}
        <Home aquariums={aquariums} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
