import React from "react";
import styles from "./ParamsList.module.scss";
import { AquariumParamButton } from "components/buttons/AquariumParamButton";

const ParamsListItem: React.FunctionComponent<{
  name: string;
  value: number | null;
}> = ({ name, value }) => (
  <AquariumParamButton className="latest-param-list-item" divider>
    <div className={styles.paramsListItem}>
      <div className={styles.paramName}>{name}</div>
      <div className={styles.paramValue}>{`${value} [mg/l]`}</div>
    </div>
  </AquariumParamButton>
);

export default ParamsListItem;
