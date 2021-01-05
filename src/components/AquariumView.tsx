import React from "react";

const AquariumView: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <div>{`AquariumView ${name}`}</div>
);

export default AquariumView;
