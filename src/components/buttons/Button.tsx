import React from "react";
import Divider from "./Divider";

const Button: React.FunctionComponent<{
  name: string;
  dividers?: boolean;
  handleButtonClick?: () => void;
}> = ({ name, dividers = false, handleButtonClick }) => (
  <React.Fragment>
    {dividers ? <Divider /> : null}
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (handleButtonClick) handleButtonClick();
        }}
      >
        <div>{name}</div>
      </button>
    </div>
    {dividers ? <Divider /> : null}
  </React.Fragment>
);

export default Button;
