/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const About = () => {
  return (
    <div className="about">
      <div className="title">ვინ ვართ ჩვენ?</div>
      <p className="description">
        ბოლო რამდენიმე წელია ტრადიციად გვექცა სამეგობროს, რომ მოგზაურობის,
        ლაშქრობის დროს მთაში მცხოვრები ბავშვებისთვის წიგნები წაგვეყოლებინა.
        მიღებულმა შედეგებმა გვაფიქრებინა, რომ უფრო მასშტაბური გაგვეხადა ეს
        ყველაფერი. ახლა კი, მთიელი წიგნების მიზანია, შევიძინოთ, შევაგროვოთ
        საინტერესო და სასურველი ლიტერატურა მთიელი მოზარდებისათვის.
      </p>
      <Button requestAnEstimateClassName="button-3" text="დონაცია" />
    </div>
  );
};
