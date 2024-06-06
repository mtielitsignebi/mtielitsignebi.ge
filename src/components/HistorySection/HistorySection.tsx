import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

interface Props {
  platform: string;
  className: any;
}

const StyledHistorySection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 64px 0px;
  position: relative;
  width: 1280px;

  & .image {
    height: 700px;
    position: relative;
    width: 500px;
  }

  & .frame {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
  }

  & .title {
    color: var(--text);
    font-family: var(--title-m-font-family);
    font-size: var(--title-m-font-size);
    font-style: var(--title-m-font-style);
    font-weight: var(--title-m-font-weight);
    letter-spacing: var(--title-m-letter-spacing);
    line-height: var(--title-m-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .paragraph {
    color: var(--text);
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 25.2px;
    position: relative;
    width: 700px;
  }
`;

export const HistorySection = ({ platform, className }: Props): JSX.Element => {
  return (
    <StyledHistorySection className={`history-section ${className}`}>
      <img
        className="image"
        alt="Image"
        src="https://c.animaapp.com/9E1pYK5V/img/image-1.png"
      />
      <div className="frame">
        <div className="title">“მთიელი წიგნების” შესახებ</div>
        <p className="paragraph">
          ბოლო რამდენიმე წელია ტრადიციად გვექცა სამეგობროს, რომ მოგზაურობის,
          ლაშქრობის დროს მთაში მცხოვრები ბავშვებისთვის წიგნები წაგვეყოლებინა.
          მიღებულმა შედეგებმა გვაფიქრებინა, რომ უფრო მასშტაბური გაგვეხადა ეს
          ყველაფერი. ახლა კი, მთიელი წიგნების მიზანია, შევიძინოთ, შევაგროვოთ
          საინტერესო და სასურველი ლიტერატურა მთიელი მოზარდებისათვის.
        </p>
      </div>
    </StyledHistorySection>
  );
};

HistorySection.propTypes = {
  platform: PropTypes.oneOf(["web"]),
};
