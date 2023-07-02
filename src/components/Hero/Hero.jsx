/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { SliderContainer } from "../SliderContainer";
import "./style.css";

export const Hero = () => {
  return (
    <div className="hero">
      <img
        className="image"
        alt="Image"
        src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/image-5.png"
      />
      <SliderContainer className="slider-container-instance" />
    </div>
  );
};
