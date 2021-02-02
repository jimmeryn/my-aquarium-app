import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "components/pages/Home";
import AquariumPage from "components/pages/AquariumPage";
import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

const App: React.FunctionComponent = () => {
  const aquariums = useSelector((state: RootState) => state.aquariumSlice);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home aquariums={aquariums} />
        </Route>
        {aquariums.map(({ id, name }, i) => (
          <Route key={id} path={`/aquarium/${id}`}>
            <AquariumPage
              name={name ?? `Aquarium #${i + 1}`}
              aquariumId={id as number}
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
};

export default App;
