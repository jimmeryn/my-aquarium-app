import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "components/Home";
import AquariumPage from "components/AquariumPage";

export default function App() {
  const aquariumArray = [
    { name: "aquarium1", id: 1 },
    { name: "aquarium2", id: 2 },
  ];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {aquariumArray.map((aquarium) => (
          <Route key={aquarium.name} path={`/aquarium/${aquarium.id}`}>
            <AquariumPage />
          </Route>
        ))}
        <Route path="*">
          {/* TODO: Error page 400*/}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
