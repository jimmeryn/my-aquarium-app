import React, { useRef } from "react";
import { ReactComponent as FishBowl } from "assets/fishbowl.svg";
// import gsap from "gsap";

const FishBowlComponent = () => {
  const wrapper = useRef(null) as any;

  return (
    <div ref={wrapper}>
      <FishBowl />
    </div>
  );
};

export default FishBowlComponent;
