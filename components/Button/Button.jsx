/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";

export const Button = ({ requestAnEstimateStyle, text = "დონაცია", style }) => {
  return (
    <div className={styles.button} style={style}>
      <div className={styles.estimate} style={requestAnEstimateStyle}>
        {text}
      </div>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
