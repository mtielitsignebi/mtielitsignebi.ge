/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        alt="Logo"
        src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/logo-3.svg"
      />
      <div className="menu-items">
        <div className="menu-item">მთავარი</div>
        <div className="text-wrapper">ჩვენს შესახებ</div>
        <div className="text-wrapper">სიახლეები</div>
        <Button
          className="button-instance"
          requestAnEstimateClassName="design-component-instance-node"
          text="ავტორიზაცია"
        />
        <Button requestAnEstimateClassName="button-2" text="დონაცია" />
      </div>
    </div>
  );
};
