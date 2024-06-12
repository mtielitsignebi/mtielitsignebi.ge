import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

interface Props {
  className: any;
}

const StyledAboutSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 64px 0px;
  position: relative;
  width: 1280px;

  & .description {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 40px;
    position: relative;
    width: 100%;

    & .title {
      color: var(--blue-900);
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
      align-self: stretch;
      color: var(--blue-800);
      font-family: "Noto Serif Georgian", Helvetica;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 25.2px;
      position: relative;
      text-align: center;
    }
  }

  & .photos {
    height: 640px;
    position: relative;
    width: 1280px;

    & .image {
      height: 338px;
      left: 0;
      position: absolute;
      top: 0;
      width: 291px;
    }

    & .img {
      height: 266px;
      left: 0;
      object-fit: cover;
      position: absolute;
      top: 374px;
      width: 291px;
    }

    & .image-2 {
      height: 263px;
      left: 327px;
      object-fit: cover;
      position: absolute;
      top: 0;
      width: 240px;
    }

    & .image-3 {
      height: 263px;
      left: 603px;
      position: absolute;
      top: 0;
      width: 241px;
    }

    & .image-4 {
      height: 192px;
      left: 880px;
      object-fit: cover;
      position: absolute;
      top: 448px;
      width: 182px;
    }

    & .image-5 {
      height: 192px;
      left: 1098px;
      object-fit: cover;
      position: absolute;
      top: 448px;
      width: 182px;
    }

    & .image-6 {
      height: 412px;
      left: 880px;
      object-fit: cover;
      position: absolute;
      top: 0;
      width: 400px;
    }

    & .image-7 {
      height: 341px;
      left: 327px;
      object-fit: cover;
      position: absolute;
      top: 299px;
      width: 517px;
    }
  }
`;

export const AboutSection = ({ className }: Props): JSX.Element => {
  return (
    <StyledAboutSection className={`about-section ${className}`}>
      <div className="description">
        <div className="title">“მთიელი წიგნების” შესახებ</div>
        <p className="paragraph">
          ამ ჯგუფის არსებობა ერთმა პრობლემამ განაპირობა: მთაში ბევრ რაიონულ
          ცენტრშიც კი არ არის წიგნის მაღაზია, არ ტარდება წიგნის ფესტივალები,
          შესაბამისად, ბავშვებისთვის ხელმიუწვდომელია თანამედროვე ლიტერატურა,
          ბოლო დროის თარგმანები. ყველაფერი მეგობრების მიერ ლაშქრობებში წაღებული
          რამდენიმე წიგნით დაიწყო, რომელთაც ადგილობრივ ბავშვებს უტოვებდნენ.
          მაღალმთიან რეგიონებში მოგზაურობისას აღმოაჩინეს, რომ თანამედროვე
          ლიტერატურა ნაკლებად ხელმისაწვდომი იყო ბავშვებისთვის. ბევრ რაიონულ
          ცენტრში საერთოდ არ იყო წიგნის მაღაზია, ბიბლიოთეკებში კი სიძველისგან
          გაცრეცილი წიგნები ბავშვებს კითხვის ჟინს უკარგავდა.
        </p>
      </div>
      <div className="photos">
        <img
          className="image"
          alt="Image"
          src="https://c.animaapp.com/rsy2ONkj/img/image-08-1@2x.png"
        />
        <img
          className="img"
          alt="Image"
          src="https://c.animaapp.com/rsy2ONkj/img/image-07-1@2x.png"
        />
        <img
          className="image-2"
          alt="Image"
          src="https://c.animaapp.com/rsy2ONkj/img/image-06-1@2x.png"
        />
        <img
          className="image-3"
          alt="Image"
          src="https://c.animaapp.com/rsy2ONkj/img/image-05-1@2x.png"
        />
        <img
          className="image-4"
          alt="Image"
          src="https://c.animaapp.com/rsy2ONkj/img/image-04-1@2x.png"
        />
        <img
          className="image-5"
          alt="Image"
          src="https://c.animaapp.com/rsy2ONkj/img/image-03-1@2x.png"
        />
        <img
          className="image-6"
          alt="Image"
          src="https://c.animaapp.com/rsy2ONkj/img/image-02-1@2x.png"
        />
        <img
          className="image-7"
          alt="Image"
          src="https://c.animaapp.com/rsy2ONkj/img/image-01-1.png"
        />
      </div>
    </StyledAboutSection>
  );
};

AboutSection.propTypes = {
  platform: PropTypes.oneOf(["web"]),
};
