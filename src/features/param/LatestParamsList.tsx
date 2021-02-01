import React from "react";
import { useSelector } from "react-redux";
import ParamList from "./ParamsList";
import { RootState } from "app/rootReducer";
import { getLatestParams } from "api/filterParams";

const LatestParamsList: React.FunctionComponent<{ aquariumId: number }> = ({
  aquariumId,
}) => {
  const params = useSelector((state: RootState) =>
    getLatestParams(state.aquariumSlice[aquariumId].params)
  );

  return <ParamList params={params} />;
};

export default LatestParamsList;
