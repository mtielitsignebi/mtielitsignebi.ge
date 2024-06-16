import React from "react";
import PropTypes from "prop-types";
import { Handsicon } from "../../icons/Handsicon";
import { StyledCard } from "./styles";
import { Platform } from "../../hooks/usePlatform";

interface Props {
  platform: string;
  className: any;
  image: string;
  text: string;
  title: string;
  date: string;
  clickHandler: () => void;
}

export const Card = ({
  platform,
  className,
  image = "https://c.animaapp.com/H3v2GtT6/img/image-1.png",
  text,
  title,
  date,
  clickHandler,
}: Props): JSX.Element => {
  return (
    <StyledCard
      platform={platform}
      className={`card ${className}`}
      onClick={clickHandler}
    >
      <div className="div-2">
        <div className="content">
          <div className="txt">
            <div className="heading">
              <div className="title">{title}</div>
              <div className="date">{date}</div>
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
  platform: PropTypes.oneOf(Object.values(Platform)),
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  clickHandler: PropTypes.func,
};
