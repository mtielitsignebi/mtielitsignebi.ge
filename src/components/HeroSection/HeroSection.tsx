import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Playicon } from "../../icons/Playicon";

interface Props {
  platform: string;
  className: any;
  headingClassName: any;
}

const StyledHeroSection = styled.div`
  align-items: center;
  display: "flex";
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding: 64px 0px;

  & .hero-image {
    background-image: url(https://c.animaapp.com/9E1pYK5V/img/heroimage-1.png);
    background-position: 50% 50%;
    background-size: cover;
    height: 700px;
    position: relative;
    width: 1280px;
  }

  & .play-icon {
    height: 64px !important;
    left: 1168px !important;
    position: absolute !important;
    top: 588px !important;
    width: 64px !important;
  }

  & .hero {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    padding: 0px 80px;
  }

  & .heading {
    color: #000d38;
    font-family: var(--headline-l-font-family);
    font-size: var(--headline-l-font-size);
    font-style: var(--headline-l-font-style);
    font-weight: var(--headline-l-font-weight);
    letter-spacing: var(--headline-l-letter-spacing);
    line-height: var(--headline-l-line-height);
    margin-right: -14px;
    margin-top: -1px;
    position: relative;
    width: 1294px;
  }
`;

export const HeroSection = ({
  platform,
  className,
  headingClassName,
}: Props): JSX.Element => {
  return (
    <StyledHeroSection className={`hero-section ${className}`}>
      <div className="hero-image">
        <Playicon className="play-icon" />
      </div>
      <div className="hero">
        <p className={`heading ${headingClassName}`}>
          ჩვენი მიზანია, შევიძინოთ, შევაგროვოთ საინტერესო და სასურველი
          ლიტერატურა მთიელი მოზარდებისათვის.
        </p>
      </div>
    </StyledHeroSection>
  );
};

HeroSection.propTypes = {
  platform: PropTypes.oneOf(["web"]),
};
