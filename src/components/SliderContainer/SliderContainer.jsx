/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Elipse } from "../Elipse";
import "./style.css";

export const SliderContainer = ({ className }) => {
  return (
    <div className={`slider-container ${className}`}>
      <Elipse className="elipse-instance" elipseClassName="elipse-2" />
      <Elipse className="elipse-instance" />
      <Elipse className="elipse-instance" />
    </div>
  );
};
