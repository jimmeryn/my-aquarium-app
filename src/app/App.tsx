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
          <AquariumPage />
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
