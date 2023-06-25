/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Arrow2 } from "../../icons/Arrow2";
import { Envelope } from "../Envelope";
import { Facebook } from "../Facebook";
import { PhoneWrapper } from "../PhoneWrapper";
import styles from "./Footer.module.css";

export const Footer = ({ style }) => {
  return (
    <div className={styles.footer} style={style}>
      <div className={styles.copyrights}>
        <img
          className="logo"
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/logo-3@2x.png"
        />
        <img
          className="divider"
          alt="Divider"
          src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/divider-1.svg"
        />
        <p className={styles.element}>
          2023 ყველა უფლება დაცულია&nbsp;&nbsp;მთიელი წიგნების მიერ.
        </p>
      </div>
      <div className={styles.contact}>
        <div className={styles.title}>კონტაქტი</div>
        <div className={styles.div}>
          <div className={styles.container}>
            <PhoneWrapper
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/phone-1.svg)",
                minWidth: "24px",
                width: "unset",
              }}
            />
            <div className={styles.textWrapper}>+(995) 599 999 999</div>
          </div>
          <div className={styles.container2}>
            <Facebook
              style={{
                minWidth: "24px",
                width: "unset",
              }}
            />
            <a
              className={styles.facebook}
              href={""}
              rel="noopener noreferrer"
              target="_blank"
            >
              facebook.com/mtieli.tsignebi
            </a>
          </div>
          <div className={styles.container3}>
            <Envelope
              style={{
                backgroundImage:
                  "url(https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/envelope-1.svg)",
                minWidth: "24px",
                width: "unset",
              }}
            />
            <div className={styles.mtielitsignebige}>mtielitsignebi@ge</div>
          </div>
        </div>
      </div>
      <div className={styles.subscribe}>
        <div className={styles.title2}>გამოიწერე სიახლეები</div>
        <div className={styles.container4}>
          <p className={styles.description}>
            დაგეგმილი და შესრულებული მოგზაურობების შესახებ
          </p>
          <div className={styles.input}>
            <div className={styles.overlapGroup}>
              <div className={styles.arrowWrapper}>
                <Arrow2
                  style={{
                    height: "24px",
                    minWidth: "24px",
                    position: "relative",
                  }}
                />
              </div>
              <div className={styles.element2}>შენი ელ-ფოსტა</div>
              <div className={styles.input2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  href: PropTypes.string,
};
