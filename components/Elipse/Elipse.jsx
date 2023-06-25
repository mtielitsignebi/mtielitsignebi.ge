/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./Elipse.module.css";

export const Elipse = ({ style, elipseStyle }) => {
  return (
    <div className="elipse" style={style}>
      <div className="div-2" style={elipseStyle} />
    </div>
  );
};
