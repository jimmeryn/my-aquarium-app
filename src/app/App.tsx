import React, { useState } from "react";
import "./App.scss";
import Home from "components/pages/Home";
import AquariumPage from "components/pages/AquariumPage";

const App: React.FunctionComponent = () => {
  const [aquariumId, setAquariumId] = useState<number | null>(null);
  const [aquarpimPageOpen, setAquarpimPageOpen] = useState<boolean>(false);

  const changeAppState = (aquariumPageOpen: boolean, aquariumId: number) => {
    setAquarpimPageOpen(aquariumPageOpen);
    setAquariumId(aquariumId);
  };

  return (
    <React.Fragment>
      {aquarpimPageOpen && typeof aquariumId == "number" ? (
        <AquariumPage
          aquariumId={aquariumId}
          handleAquariumClick={() => changeAppState(true, aquariumId)}
          handleHomeClick={() => changeAppState(false, 0)}
        />
      ) : (
        <Home
          handleHomeClick={() => changeAppState(false, 0)}
          handleAquariumClick={(aquariumId: number) =>
            changeAppState(true, aquariumId)
          }
        />
      )}
    </React.Fragment>
  );
};

export default App;
