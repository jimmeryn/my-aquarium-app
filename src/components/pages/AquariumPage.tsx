import React from "react";

import Page from "./Page";
import PageContent from "./PageContent";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import LatestParamList from "features/param/LatestParamsList";
import { AquariumTitleButton } from "components/buttons/AquariumTitleButton";
import AddRefillButton from "features/param/AddRefillButton";
import AddParamsButton from "features/param/AddParamsButton";
import ParamTable from "features/param/ParamsTable";
import Graph from "features/graph/Graph";
import { useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { Param } from "models";

const AquariumPage: React.FunctionComponent<{
  name: string;
  aquariumId: number;
}> = ({ name, aquariumId }) => {
  function getLatestParamsAndFilterValue(params: Param[]) {
    let initState: { params: Param[]; refillValue: number | undefined } = {
      params: [],
      refillValue: undefined,
    };

    return params.reduce(
      (paramAndFilterObject, currentParam) =>
        currentParam.name === "refill"
          ? { ...paramAndFilterObject }
          : { ...paramAndFilterObject, params: [...params, currentParam] },
      initState
    );
  }

  const { params, refillValue } = useSelector((state: RootState) =>
    getLatestParamsAndFilterValue(state.aquariumSlice[aquariumId].params)
  );

  return (
    <Page className="page">
      <Menu className="menu">
        <AquariumTitleButton className="aquarium-title">
          {name}
        </AquariumTitleButton>
        <AddRefillButton refillValue={refillValue} />
        <AddParamsButton />
        <LatestParamList params={params} />
      </Menu>
      <PageContent>
        <Navbar className="navbar" />
        <Graph />
        <ParamTable />
      </PageContent>
    </Page>
  );
};

export default AquariumPage;
