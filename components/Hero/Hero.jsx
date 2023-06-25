/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { SliderContainer } from "../SliderContainer";
import styles from "./Hero.module.css";

export const Hero = ({ style }) => {
  return (
    <div
      className={styles.hero}
      style={{
        ...{
          backgroundImage:
            "url(https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/image-1.png)",
        },
        ...style,
      }}
    >
      <SliderContainer
        style={{
          left: "792px",
          top: "745px",
        }}
      />
    </div>
  );
};
