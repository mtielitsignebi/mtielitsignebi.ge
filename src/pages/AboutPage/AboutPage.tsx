import React from "react";
import { AboutSection } from "../../components/AboutSection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PartnerSection } from "../../components/PartnerSection";
import { Divider1 } from "../../icons/Divider1";
import { Facebookicon2 } from "../../icons/Facebookicon2";
import { Instagramicon2 } from "../../icons/Instagramicon2";
import styled from "styled-components";

const StyledAboutPage = styled.div`
  align-items: center;
  background-color: #6ab271;
  flex-direction: column;
  padding: 0px 0px 32px;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;

  & .header-instance {
    border-left-style: none !important;
    border-right-style: none !important;
    border-top-style: none !important;
    flex: 0 0 auto !important;
  }

  & .design-component-instance-node-2 {
    flex: 0 0 auto !important;
  }

  & .divider {
    height: 100px !important;
    position: relative !important;
    width: 1282px !important;
  }

  & .history-section {
    align-items: flex-end;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    padding: 64px 0px;
    position: relative;
    width: 1280px;
  }

  & .description-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    width: 600px;
  }

  & .title-2 {
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

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .text-i {
    align-self: stretch;
    color: var(--blue-800);
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 25.2px;
    position: relative;
  }

  & .span {
    color: #1e3346;
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 25.2px;
  }

  & .images {
    height: 686.28px;
    position: relative;
    width: 660px;
  }

  & .image-8 {
    height: 292px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 295px;
    width: 204px;
  }

  & .image-9 {
    height: 292px;
    left: 228px;
    object-fit: cover;
    position: absolute;
    top: 394px;
    width: 204px;
  }

  & .image-10 {
    height: 292px;
    left: 228px;
    object-fit: cover;
    position: absolute;
    top: 79px;
    width: 204px;
  }

  & .image-11 {
    height: 292px;
    left: 456px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 204px;
  }

  & .image-12 {
    height: 292px;
    left: 455px;
    position: absolute;
    top: 315px;
    width: 204px;
  }

  & .footer-instance {
    background-color: transparent !important;
    flex: 0 0 auto !important;
  }

  & .facebookicon-2 {
    margin-left: -0.5px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .instagramicon-2 {
    height: 24px !important;
    margin-left: -3px !important;
    position: relative !important;
    width: 24px !important;
  }
`;

export const AboutPage = (): JSX.Element => {
  return (
    <StyledAboutPage className="about-page">
      <Header platform="web" />
      <AboutSection
        className="design-component-instance-node-2"
        platform="web"
      />
      <Divider1 className="divider" />
      <div className="history-section">
        <div className="description-2">
          <div className="title-2">როგორ დაიწყო ყველაფერი..</div>
          <div className="flexcontainer">
            <p className="text-i">
              <span className="span">
                მეგობრებმა გადაწყვიტეს, რომ რამდენიმე წიგნის წაღების ნაცვლად,
                უფრო მასშტაბური საქმიანობა წამოეწყოთ – ასე შეიქმნა მთიელი
                წიგნები. ოთხი მეგობრის – გიორგის, ლევანის, ნათიასა და მარიამის
                წამოწყება თანდათან გაფართოვდა. ბევრ ერთგულ მხარდამჭერთან ერთად
                სვანეთში, ლეჩხუმსა და ახმეტაში მცხოვრებ 700–მდე ბავშვს და 30–მდე
                მცირეკონტინგენტიან სკოლას თანამედროვე გამოცემები გადასცეს.
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="span">
                ბავშვებმა კი „მთიელ წიგნებს“ უამრავი ემოციური სტრიქონი
                დაუბრუნეს:
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="span">
                „ბავშვები მეკითხებოდნენ, მართლა რაც გვინდა იმ წიგნს მოგვცემენო,
                თანაც პირადადო? ვპასუხობდი, მგონი ასე იქნება–მეთქი. დაუჯერებელია
                ეს ამბავი, დიდი მადლობა წიგნებისთვის, ძალიან გაუხარდათ
                ბავშვებს...“
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="span">
                {" "}
                „საღამო მშვიდობისა... წიგნი მეორე დღესვე დავასრულე, ბოდიში,
                განხილვის მოწერა რომ დამაგვიანდა. მადლობა, ეს წიგნი რომ ჩემამდე
                მოვიდა... უზომოდ მომეწონა... თითქოს კითხვის დროს იქ ვიდექი და
                სიუჟეტი ჩემს თვალწინ ვითარდებოდა... თქვენი დამსახურებით კიდევ
                ერთ საუკეთესო დეტექტივს გავეცანი“
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="span">
                „წიგნი ისეთი საინტერესო იყო, საკითხავად რომ ვჯდებოდი, თავის
                დანებება აღარ მინდოდა, მადლობა“ ბავშვების ემოციები გრძელვადიანი
                საქმიანობისთვის კარგ მოტივატორად იქცა.{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="images">
          <img
            className="image-8"
            alt="Image"
            src="https://c.animaapp.com/rsy2ONkj/img/image-5@2x.png"
          />
          <img
            className="image-9"
            alt="Image"
            src="https://c.animaapp.com/rsy2ONkj/img/image-6@2x.png"
          />
          <img
            className="image-10"
            alt="Image"
            src="https://c.animaapp.com/rsy2ONkj/img/image-7@2x.png"
          />
          <img
            className="image-11"
            alt="Image"
            src="https://c.animaapp.com/rsy2ONkj/img/image-8@2x.png"
          />
          <img
            className="image-12"
            alt="Image"
            src="https://c.animaapp.com/rsy2ONkj/img/image-9@2x.png"
          />
        </div>
      </div>
      <Divider1 className="divider" />
      <PartnerSection
        className="design-component-instance-node-2"
        partnerCardImg="https://c.animaapp.com/rsy2ONkj/img/logo-29@2x.png"
        partnerCardLogo="https://c.animaapp.com/rsy2ONkj/img/logo-28@2x.png"
        partnerCardLogo1="https://c.animaapp.com/rsy2ONkj/img/logo-30@2x.png"
        partnerCardLogo10="https://c.animaapp.com/rsy2ONkj/img/logo-39@2x.png"
        partnerCardLogo11="https://c.animaapp.com/rsy2ONkj/img/logo-40@2x.png"
        partnerCardLogo12="https://c.animaapp.com/rsy2ONkj/img/logo-41@2x.png"
        partnerCardLogo13="https://c.animaapp.com/rsy2ONkj/img/logo-42@2x.png"
        partnerCardLogo14="https://c.animaapp.com/rsy2ONkj/img/logo-43@2x.png"
        partnerCardLogo15="https://c.animaapp.com/rsy2ONkj/img/logo-44@2x.png"
        partnerCardLogo16="https://c.animaapp.com/rsy2ONkj/img/logo-45@2x.png"
        partnerCardLogo17="https://c.animaapp.com/rsy2ONkj/img/logo-46@2x.png"
        partnerCardLogo18="https://c.animaapp.com/rsy2ONkj/img/logo-47@2x.png"
        partnerCardLogo19="https://c.animaapp.com/rsy2ONkj/img/logo-48@2x.png"
        partnerCardLogo2="https://c.animaapp.com/rsy2ONkj/img/logo-31@2x.png"
        partnerCardLogo20="https://c.animaapp.com/rsy2ONkj/img/logo-49@2x.png"
        partnerCardLogo21="https://c.animaapp.com/rsy2ONkj/img/logo-50@2x.png"
        partnerCardLogo22="https://c.animaapp.com/rsy2ONkj/img/logo-51@2x.png"
        partnerCardLogo3="https://c.animaapp.com/rsy2ONkj/img/logo-32@2x.png"
        partnerCardLogo4="https://c.animaapp.com/rsy2ONkj/img/logo-33@2x.png"
        partnerCardLogo5="https://c.animaapp.com/rsy2ONkj/img/logo-34@2x.png"
        partnerCardLogo6="https://c.animaapp.com/rsy2ONkj/img/logo-35@2x.png"
        partnerCardLogo7="https://c.animaapp.com/rsy2ONkj/img/logo-36@2x.png"
        partnerCardLogo8="https://c.animaapp.com/rsy2ONkj/img/logo-37@2x.png"
        partnerCardLogo9="https://c.animaapp.com/rsy2ONkj/img/logo-38@2x.png"
        platform="web"
      />
      <Footer
        buttonIcon={<Facebookicon2 className="facebookicon-2" />}
        className="footer-instance"
        logo="https://c.animaapp.com/rsy2ONkj/img/logo-52.svg"
        override={<Instagramicon2 className="instagramicon-2" />}
        platform="web"
      />
    </StyledAboutPage>
  );
};
