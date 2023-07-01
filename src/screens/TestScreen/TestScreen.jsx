import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const TestScreen = () => {
  return (
    <div className="test-screen">
      <div className="section">
        <h1 className="text-wrapper">Awesome!</h1>
        <p className="p">
          Some coool description b ბოლო რამდენიმე წელია ტრადიციად გვექცა რომ
          ლაშქრობის დროს მთაში მცხოვრები ბავშვებისთვის წიგნები ჩავიტანოთ.
          მიღებულმა შედეგებმა გვაფიქრებინა, რომ უფრო მასშტაბური გაგვეხადა ეს
          ყველაფერი. ახლა კი, მთიელი წიგნების მიზანია, შევიძინოთ, შევაგროვოთ
          საინტერესო და სასურველი ლიტერატურა მთიელი მოზარდებისათვის.laa blaa
          blaaaaa blaasc
        </p>
        <Button
          className="button-instance"
          requestAnEstimateClassName="design-component-instance-node"
          text="იხილე მეტი vvv"
        />
      </div>
    </div>
  );
};
