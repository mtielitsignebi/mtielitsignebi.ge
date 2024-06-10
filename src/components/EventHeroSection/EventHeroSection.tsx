import PropTypes from "prop-types";
import React from "react";
import { ScheduleCard } from "../ScheduleCard";
import styled from "styled-components";

interface Props {
  platform: "web";
  className: any;
}

const StyledEventHeroSection = styled.div`
  height: 771px;
  position: relative;
  width: 1280px;

  & .overlap-group {
    height: 637px;
    position: relative;
    top: 64px;
  }

  & .image {
    height: 486px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 1280px;
  }

  & .schedule-card-instance {
    left: 880px !important;
    position: absolute !important;
    top: 361px !important;
  }
`;

export const EventHeroSection = ({ platform, className }: Props): JSX.Element => {
  return (
    <StyledEventHeroSection className={`event-hero-section ${className}`}>
      <div className="overlap-group">
        <img className="image" alt="Image" src="https://c.animaapp.com/X9C4eF1s/img/image-2.png" />
        <ScheduleCard className="schedule-card-instance" />
      </div>
    </StyledEventHeroSection>
  );
};

EventHeroSection.propTypes = {
  platform: PropTypes.oneOf(["web"]),
};
