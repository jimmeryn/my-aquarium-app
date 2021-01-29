import React from "react";
import { Param } from "models";
import LatestParamListItem from "./LatestParamListItem";

const LatestParamList: React.FunctionComponent<{ params: Param[] }> = ({
  params,
}) => (
  <React.Fragment>
    {params.map(({ id, value, name }) => (
      <LatestParamListItem
        className="latest-param-list-item"
        key={id}
        value={value}
        name={name}
      />
    ))}
  </React.Fragment>
);

export default LatestParamList;
