/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import styles from "./About.module.css";

export const About = ({ style }) => {
  return (
    <div className={styles.about} style={style}>
      <div className={styles.title}>ვინ ვართ ჩვენ?</div>
      <div className={styles.container}>
        <p className={styles.description}>
          მთიელი წიგნების მიზანია, შევიძინოთ, შევაგროვოთ საინტერესო და სასურველი
          ლიტერატურა მთიელი მოზარდებისათვის.
        </p>
        <Button text="დონაცია" />
      </div>
    </div>
  );
};
