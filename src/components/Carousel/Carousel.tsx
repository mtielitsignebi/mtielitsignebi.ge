import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

interface Props {
  platform: string;
  className: any;
  imageClassName: any;
  image: string;
}

const StyledCarousel = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 40px;
  padding: 64px 0px;
  position: relative;
  width: 1440px;

  & .image-2 {
    height: 700px;
    object-fit: cover;
    position: relative;
    width: 495px;
  }

  & .image-3 {
    height: 700px;
    object-fit: cover;
    position: relative;
    width: 650px;
  }

  & .image-4 {
    height: 700px;
    margin-right: -20px;
    object-fit: cover;
    position: relative;
    width: 235px;
  }
`;

export const Carousel = ({
  platform,
  className,
  imageClassName,
  image = "https://c.animaapp.com/9E1pYK5V/img/image-03.png",
}: Props): JSX.Element => {
  return (
    <StyledCarousel className={`carousel ${className}`}>
      <img
        className="image-2"
        alt="Image"
        src="https://c.animaapp.com/9E1pYK5V/img/image-01-1.png"
      />
      <img
        className="image-3"
        alt="Image"
        src="https://c.animaapp.com/9E1pYK5V/img/image-02-1.png"
      />
      <img className={`image-4 ${imageClassName}`} alt="Image" src={image} />
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  platform: PropTypes.oneOf(["web"]),
  image: PropTypes.string,
};
