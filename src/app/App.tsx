import React, { useState } from "react";
import "./App.scss";
import Home from "components/pages/Home";
import AquariumPage from "components/pages/AquariumPage";
import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

const App: React.FunctionComponent = () => {
  const aquariums = useSelector((state: RootState) => state.aquariumSlice);
  const [aquariumId, setAquariumId] = useState<number | null>(null);
  const [aquarpimPageOpen, setAquarpimPageOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      {aquarpimPageOpen && typeof aquariumId == "number" ? (
        <AquariumPage
          name={aquariums[aquariumId].name ?? `Aquarium #${aquariumId + 1}`}
          aquariumId={aquariumId}
          handleAquariumClick={() => {
            setAquarpimPageOpen(true);
            setAquariumId(aquariumId);
          }}
          handleHomeClick={() => {
            setAquarpimPageOpen(false);
            setAquariumId(0);
          }}
        />
      ) : (
        <Home
          aquariums={aquariums}
          handleHomeClick={() => {
            setAquarpimPageOpen(false);
            setAquariumId(0);
          }}
          handleAquariumClick={(aquariumId: number) => {
            setAquarpimPageOpen(true);
            setAquariumId(aquariumId);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default App;
