import React from "react";
import { Failstack } from "./Failstack";
import { EnhancementLevel } from "./EnhancementLevel";

export const EnhanceButton = ({ enhanceLevel, failStack }) => {
  function handleClick(e) {
    e.preventDefault();
    console.log(enhanceLevel);
  }

  return (
    <>
      <button onClick={handleClick}>Enhance</button>
    </>
  );
};
