import React from "react";
import { Button } from "../Button";
import styles from "./Header.module.css";

export const Header = ({ style }) => {
  return (
    <div className={styles.header} style={style}>
      <img
        className="logo-2"
        alt="Logo"
        src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/logo-1.svg"
      />
      <div className={styles.menuItems}>
        <div className={styles.menuItem}>მთავარი</div>
        <div className={styles.menuItem2}>ჩვენს შესახებ</div>
        <div className={styles.menuItem3}>სიახლეები</div>
        <Button
          requestAnEstimateStyle={{
            color: "#008ca8",
            marginLeft: "-18.50px",
            marginRight: "-18.50px",
            marginTop: "-1.50px",
          }}
          style={{
            backgroundColor: "unset",
            border: "1.5px solid",
            borderColor: "#008ca8",
          }}
          text="ავტორიზაცია"
        />
        <Button text="დონაცია" />
      </div>
    </div>
  );
};
