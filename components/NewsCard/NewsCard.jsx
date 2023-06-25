/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SliderContainer } from "../SliderContainer";
import styles from "./NewsCard.module.css";

export const NewsCard = ({ hasCompanies = true }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.description2}>
        <div className={styles.header2}>
          <div className={styles.title3}>მთიელი წიგნები სვანეთში</div>
          <div className={styles.label}>15 მაისი, 2023</div>
        </div>
        <p className={styles.body}>
          სხვა პასუხისმგებლობაც გვქონდა ამ გასვლაშიდათო ტურაშვილი იქნებოდა ჩვენ
          გვერდით. ერთია როცა წიგნი მიგაქვს ბავშვებთან, მაგრამ სხვა გრძნობაა
          როცა მათი საყვარელი ავტორიც თან მიგყავს. არ დაგიმალავთ, ცოტას
          ვღელავდით. ყველაფერმა კი ისე ჩაიარა, ერთმანეთს ვეკითხებოდით ნუთუ,
          ასეთი ლამაზი დღეები მართლა გამოგვივიდაო?!
        </p>
        <div className={styles.statistics2}>
          <div className={styles.books}>
            <div className={styles.element3}>3 500</div>
            <div className={styles.element4}>წიგნი</div>
          </div>
          <div className={styles.kids}>
            <div className={styles.element5}>1 200</div>
            <div className={styles.element6}>გახარებული ბავშვი</div>
          </div>
          <div className={styles.donors}>
            <div className={styles.element7}>5</div>
            <div className={styles.element8}>დონორი</div>
          </div>
        </div>
        {hasCompanies && (
          <div className={styles.companies}>
            <img
              className={styles.company}
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/company-01-2@2x.png"
            />
            <img
              className={styles.img}
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/company-02-2@2x.png"
            />
            <img
              className={styles.company2}
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/company-03-2@2x.png"
            />
            <img
              className={styles.company3}
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/company-04-2.svg"
            />
          </div>
        )}
      </div>
      <div className={styles.cover}>
        <img
          className={styles.image}
          alt="Image"
          src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/image-6.png"
        />
        <SliderContainer
          style={{
            left: "258px",
            position: "absolute",
            top: "460px",
          }}
        />
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  hasCompanies: PropTypes.bool,
};
