/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import styles from "./Envelope.module.css";

export const Envelope = ({ style }) => {
  return (
    <div
      className={styles.envelope}
      style={{
        ...{
          backgroundImage:
            "url(https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/envelope-2.svg)",
        },
        ...style,
      }}
    />
  );
};
