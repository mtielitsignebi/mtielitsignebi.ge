import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import styled, { css } from "styled-components";
import { usePlatform } from "../../hooks";

const StyledGoalSection = styled.div<{ platform: string }>`
  height: 702px;
  position: relative;
  width: 1280px;

  & .overlap-group {
    height: 547px;
    position: relative;
    top: 44px;
  }

  & .goal {
    align-items: center;
    background-color: var(--primitives-bg-200-duplicate);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    left: 0;
    padding: 96px 0px 64px;
    position: absolute;
    top: 127px;
    width: 1280px;

    ${({ platform }) =>
      platform !== "web" &&
      css`
        width: 342px;
      `}
  }

  & .heading-our {
    color: var(--text);
    font-family: var(--title-m-font-family);
    font-size: var(--title-m-font-size);
    font-style: var(--title-m-font-style);
    font-weight: var(--title-m-font-weight);
    letter-spacing: var(--title-m-letter-spacing);
    line-height: var(--title-m-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .p {
    color: var(--text);
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 25.2px;
    position: relative;
    text-align: center;
    width: 920px;

    ${({ platform }) =>
      platform !== "web" &&
      css`
        width: 310px;
      `}
  }

  & .img {
    height: 173px;
    left: 540px;
    position: absolute;
    top: 0;
    width: 200px;

    ${({ platform }) =>
      platform !== "web" &&
      css`
        width: 180px;
      `}
  }
`;

export const GoalSection = (): JSX.Element => {
  const platform = usePlatform();
  return (
    <StyledGoalSection platform={platform}>
      <div className="overlap-group">
        <div className="goal">
          <div className="heading-our">ჩვენი მიზანი</div>
          <p className="p">
            {" "}
            შევიძინოთ, შევაგროვოთ წიგნები მთაში მცხოვრები ბავშვებისთვის, რათა
            რაც შეიძლება მეტ ბავშვს ვაჩუქოთ მათთვის საყვარელი პერსონაჟები.
            გვინდა შევმატოთ წიგნები მცირე კონტიგენტიანი სკოლის ბიბლიოთეკებსაც და
            სრულად მოვიცვათ საქართველოს მთიანი რეგიონები და მიმდებარე სოფლები.
          </p>
          <Button icon={false} style="default" text="დონაცია" />
        </div>
        <img
          className="img"
          alt="Logo"
          src="https://c.animaapp.com/9E1pYK5V/img/logo-4@2x.png"
        />
      </div>
    </StyledGoalSection>
  );
};

GoalSection.propTypes = {
  platform: PropTypes.oneOf(["web"]),
};
