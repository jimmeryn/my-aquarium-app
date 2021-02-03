import React from "react";
import { Param } from "models";
import ParamListItem from "./ParamsListItem";

const ParamsList: React.FunctionComponent<{ params: Param[] }> = ({
  params,
}) => (
  <React.Fragment>
    {params.map(({ id, value, name }) => (
      <ParamListItem key={id} value={value} name={name} />
    ))}
  </React.Fragment>
);

export default ParamsList;
