/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Elipse } from "../Elipse";
import "./SliderContainer.module.css";

export const SliderContainer = ({ style }) => {
  return (
    <div className="slider-container" style={style}>
      <Elipse
        elipseStyle={{
          backgroundColor: "#8e8e8e",
        }}
        style={{
          minWidth: "24px",
          width: "unset",
        }}
      />
      <Elipse
        style={{
          minWidth: "24px",
          width: "unset",
        }}
      />
      <Elipse
        style={{
          minWidth: "24px",
          width: "unset",
        }}
      />
    </div>
  );
};
