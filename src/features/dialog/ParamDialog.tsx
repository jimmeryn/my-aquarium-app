import React from "react";
import DatePicker from "./DatePicker";
import DialogComponent from "./DialogComponent";
import ParamTable from "./ParamTable";
const _ = require("lodash");

const ParamDialog: React.FunctionComponent<{
  paramNames: string[];
  submitHandle: () => void;
}> = ({ paramNames, submitHandle }) => {
  const [paramValues, setParamValues] = React.useState(
    new Array(paramNames.length).fill(0)
  );
  const [date, setDate] = React.useState(new Date().toJSON().slice(0, 10));

  const createObjectFromParamNamesAndValues = (
    paramNames: string[],
    paramValues: number[]
  ) => {};

  const submitHandleParams = _.flowRight([
    submitHandle,
    createObjectFromParamNamesAndValues,
  ]);

  const setParamValue = (paramId: number) => (paramValue: number) => {
    let newParamValues = [...paramValues];
    newParamValues[paramId] = paramValue;
    setParamValues(newParamValues);
  };

  return (
    <DialogComponent
      title="Add Parameters"
      submitHandle={() => submitHandleParams(paramNames, paramValues)}
    >
      <ParamTable
        paramNames={paramNames}
        paramValues={paramValues}
        setParamValue={setParamValue}
      />
      <DatePicker label="Measure Date" date={date} handleSetDate={setDate} />
    </DialogComponent>
  );
};

export default ParamDialog;
