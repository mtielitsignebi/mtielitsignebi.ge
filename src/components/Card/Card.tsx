import React from "react";
import PropTypes from "prop-types";
import { Handsicon } from "../../icons/Handsicon";
import { StyledCard } from "./styles";

interface Props {
  platform: "web";
  className: any;
  image: string;
  text: string
}

export const Card = ({
  platform,
  className,
  image = "https://c.animaapp.com/H3v2GtT6/img/image-1.png",
  text,
}: Props): JSX.Element => {
  return (
    <StyledCard className={`card ${className}`}>
      <div className="div-2">
        <div className="content">
          <div className="txt">
            <div className="heading">
              <div className="title">მთიელი წიგნები სვანეთში</div>
              <div className="date">15 მაისი, 2023</div>
            </div>
            <p className="paragraph">{text}</p>
          </div>
          <img className="image" alt="Image" src={image} />
        </div>
        <div className="icon">
          <Handsicon className="hands-icon" />
        </div>
      </div>
    </StyledCard>
  );
};

Card.propTypes = {
  platform: PropTypes.oneOf(["web"]),
  image: PropTypes.string,
  text: PropTypes.string,
};
