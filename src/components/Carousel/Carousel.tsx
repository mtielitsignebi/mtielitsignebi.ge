import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { usePlatform } from "../../hooks";

const StyledCarousel = styled.div<{ platform: string }>`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 64px 0px;
  position: relative;
  width: 1440px;

  ${({ platform }) =>
    platform !== "web" &&
    css`
      width: 100%;
    `}

  & .image-2 {
    height: 700px;
    object-fit: cover;
    position: relative;
    width: 495px;

    ${({ platform }) =>
      platform !== "web" &&
      css`
        width: 95%;
      `}
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

export const Carousel = (): JSX.Element => {
  const platform = usePlatform();
  return (
    <StyledCarousel platform={platform} className="carousel">
      {platform === "web" ? (
        <>
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
          <img
            className="image-4"
            alt="Image"
            src="https://c.animaapp.com/9E1pYK5V/img/image-03.png"
          />
        </>
      ) : (
        <img
          className="image-2"
          alt="Image"
          src="https://c.animaapp.com/9E1pYK5V/img/image-01-1.png"
        />
      )}
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  platform: PropTypes.oneOf(["web"]),
  image: PropTypes.string,
};
