import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./Page";
import Head from "./Head";
import PageContent from "./PageContent";
import { RootState } from "app/rootReducer";
import FishBowlComponent from "components/FishBowlComponent";
import Menu from "components/Menu";
import Dialog from "features/dialog/Dialog";
import { openDialog } from "features/dialog/dialogSlice";
import AquariumsListItem from "features/aquarium/AquariumsListItem";
import AddAquariumButton from "features/aquarium/AddAquariumButton";

const Home: React.FunctionComponent<{
  handleHomeClick: () => void;
  handleAquariumClick: (aquariumId: number) => void;
}> = ({ handleHomeClick, handleAquariumClick }) => {
  const dispatch = useDispatch();
  const aquariums = useSelector((state: RootState) => state.aquariumSlice);

  return (
    <Page className="page">
      <Menu className="menu" handleHomeClick={handleHomeClick}>
        {aquariums.map(({ name }, id) => (
          <AquariumsListItem
            key={id}
            id={id}
            name={name}
            handleOpenAquarium={() => handleAquariumClick(id)}
            handleOpenDialog={(type) => dispatch(openDialog({ type }))}
          />
        ))}
        <AddAquariumButton />
      </Menu>
      <PageContent>
        <Head className="head" />
        <FishBowlComponent />
      </PageContent>
      <Dialog />
    </Page>
  );
};

export default Home;
