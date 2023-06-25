/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import { NewsCard } from "../NewsCard";
import { SliderContainer } from "../SliderContainer";
import styles from "./Blog.module.css";

export const Blog = ({ style }) => {
  return (
    <div className={styles.blog} style={style}>
      <div className={styles.title}>სიახლეები</div>
      <NewsCard hasCompanies={false} />
      <div className={styles.newsCard2}>
        <div className={styles.cover2}>
          <img
            className={styles.image2}
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/image-3.png"
          />
          <SliderContainer
            style={{
              left: "258px",
              position: "absolute",
              top: "460px",
            }}
          />
        </div>
        <div className={styles.description3}>
          <div className={styles.header3}>
            <div className={styles.title1}>მთიელი წიგნები აჭარაში</div>
            <div className={styles.label1}>15 მაისი, 2023</div>
          </div>
          <p className={styles.body1}>
            დიდი ხანი ვემზადებოდით ამ გასვლისთვის. ვიცოდით, ყველაზე ბევრი ბავშვი
            მაღალმთიან აჭარაში დაგვხვდებოდა. წიგნებს ვყიდულობდით, ვაგროვებდით,
            გვჩუქნიდნენ და ნელ-ნელა ივსებოდა ჩვენი ოთახი... ბოლოს კი ფეხის
            დასადგმელი ადგილიც აღარ დაგვრჩა...
          </p>
          <div className={styles.statistics3}>
            <div className={styles.books2}>
              <div className={styles.element1}>3 500</div>
              <div className={styles.i}>წიგნი</div>
            </div>
            <div className={styles.kids2}>
              <div className={styles.element9}>1 200</div>
              <div className={styles.i2}>გახარებული ბავშვი</div>
            </div>
            <div className={styles.donors2}>
              <div className={styles.element10}>5</div>
              <div className={styles.i3}>დონორი</div>
            </div>
          </div>
          <div className={styles.companies2}>
            <img
              className={styles.company4}
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/company-01-2@2x.png"
            />
            <img
              className={styles.company5}
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/company-02-2@2x.png"
            />
            <img
              className={styles.company6}
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/company-03-2@2x.png"
            />
            <img
              className={styles.company7}
              alt="Company"
              src="https://generation-sessions.s3.amazonaws.com/37ae6cbc3736273cee0fcc91c05abd4c/img/company-04-1.svg"
            />
          </div>
        </div>
      </div>
      <Button
        requestAnEstimateStyle={{
          marginLeft: "-11.50px",
          marginRight: "-11.50px",
        }}
        text="იხილე მეტი"
      />
    </div>
  );
};
