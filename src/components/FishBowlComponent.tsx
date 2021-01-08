import React, { useRef } from "react";
import { ReactComponent as FishBowl } from "assets/fishbowl.svg";

const FishBowlComponent = () => {
  const wrapper = useRef(null) as any;

  return (
    <div className="fish-bowl" ref={wrapper}>
      <FishBowl />
    </div>
  );
};

export default FishBowlComponent;
