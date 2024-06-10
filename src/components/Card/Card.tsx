import PropTypes from "prop-types";
import React from "react";
import { Handsicon } from "../../icons/Handsicon";
import styled from "styled-components";

interface Props {
  platform: "web";
  className: any;
  image: string;
}

const StyledCard = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 64px 0px;
  position: relative;

  & .div-2 {
    align-items: flex-start;
    background-color: var(--background-200);
    border-radius: 20px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    padding: 40px;
    position: relative;
    width: 1280px;
  }

  & .content {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 64px;
    justify-content: center;
    position: relative;
    width: 1200px;
  }

  & .txt {
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
    position: relative;
  }

  & .heading {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }

  & .title {
    color: var(--text);
    font-family: var(--headline-l-font-family);
    font-size: var(--headline-l-font-size);
    font-style: var(--headline-l-font-style);
    font-weight: var(--headline-l-font-weight);
    letter-spacing: var(--headline-l-letter-spacing);
    line-height: var(--headline-l-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .date {
    color: var(--primitives-text);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    opacity: 0.5;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .paragraph {
    align-self: stretch;
    color: #000d38cc;
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    position: relative;
  }

  & .image {
    height: 400px;
    object-fit: cover;
    position: relative;
    width: 500px;
  }

  & .icon {
    align-items: center;
    background-color: var(--white);
    border-radius: 100px;
    display: flex;
    height: 72px;
    justify-content: center;
    left: 40px;
    overflow: hidden;
    padding: 16px;
    position: absolute;
    top: -36px;
    width: 72px;
  }

  & .hands-icon {
    height: 40px !important;
    position: relative !important;
    width: 40px !important;
  }
`;

export const Card = ({
  platform,
  className,
  image = "https://c.animaapp.com/H3v2GtT6/img/image-1.png",
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
            <p className="paragraph">
              სხვა პასუხისმგებლობაც გვქონდა ამ გასვლაში - დათო ტურაშვილი იქნებოდა ჩვენ გვერდით. ერთია როცა წიგნი მიგაქვს
              ბავშვებთან, მაგრამ სხვა გრძნობაა როცა მათი საყვარელი ავტორიც თან მიგყავს.
            </p>
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
};
