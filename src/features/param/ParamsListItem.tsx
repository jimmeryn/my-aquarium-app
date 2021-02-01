import React from "react";
import styles from "./ParamsList.module.css";
import { AquariumParamButton } from "components/buttons/AquariumParamButton";

const ParamsListItem: React.FunctionComponent<{
  className: string;
  name: string;
  value: number | null;
}> = ({ className, name, value }) => (
  <AquariumParamButton className={className} divider>
    <div className={styles.paramsListItem}>
      <div className={styles.paramName}>{name}</div>
      <div className={styles.paramValue}>{`${value} [mg/l]`}</div>
    </div>
  </AquariumParamButton>
);

export default ParamsListItem;
