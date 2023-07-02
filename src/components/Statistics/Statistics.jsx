/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Statistics = () => {
  return (
    <div className="statistics">
      <div className="title-2">ჩვენი შედეგები</div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="div-2">
            <div className="element">9 430</div>
            <div className="element-2">
              <span className="span">შეგროვებული თანხა </span>
              <span className="text-wrapper-2">₾</span>
            </div>
          </div>
          <div className="div-3">
            <div className="element">10 324</div>
            <div className="element-3">წიგნი</div>
          </div>
          <div className="div-4">
            <div className="element">12 580</div>
            <div className="element-3">გახარებული ბავშვი</div>
          </div>
          <div className="div-5">
            <div className="element">54</div>
            <div className="element-3">ლოკაცია</div>
          </div>
          <div className="div-6">
            <div className="element">753</div>
            <div className="element-3">დონორი</div>
          </div>
        </div>
      </div>
      <img
        className="map"
        alt="Map"
        src="https://generation-sessions.s3.amazonaws.com/4f51778ef214edae8b0ea1fd62cf36a9/img/map-1.png"
      />
      <div className="element-4">📍</div>
    </div>
  );
};
