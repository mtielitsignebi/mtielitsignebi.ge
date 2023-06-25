/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import styles from "./Statistics.module.css";

export const Statistics = ({ style }) => {
  return (
    <div className={styles.statistics} style={style}>
      <div className={styles.title}>ჩვენი შედეგები</div>
      <div className={styles.statisticsWrapper}>
        <div className={styles.div3}>
          <div className={styles.div4}>
            <div className={styles.element11}>9 430</div>
            <div className={styles.element12}>
              <span className={styles.span}>შეგროვებული თანხა </span>
              <span className={styles.symbol}>₾</span>
            </div>
          </div>
          <div className={styles.div5}>
            <div className={styles.element13}>10 324</div>
            <div className={styles.element14}>წიგნი</div>
          </div>
          <div className={styles.div6}>
            <div className={styles.element15}>12 580</div>
            <div className={styles.element16}>გახარებული ბავშვი</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.element17}>760</div>
            <div className={styles.element18}>დონორი</div>
          </div>
        </div>
      </div>
      <img
        className={styles.map}
        alt="Map"
        src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/map-1.png"
      />
    </div>
  );
};
