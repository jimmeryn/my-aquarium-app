import React from "react";

const Hamburger: React.FunctionComponent<{
  active: boolean;
  setActive: () => void;
}> = ({ active, setActive }) => {
  return (
    <button style={{ display: "none" }} onClick={() => setActive()}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
