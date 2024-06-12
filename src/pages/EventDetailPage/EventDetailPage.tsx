import React from "react";
import { Button } from "../../components/Button";
import { EventHeroSection } from "../../components/EventHeroSection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Envelopeicon1 } from "../../icons/Envelopeicon1";
import { Facebookicon2 } from "../../icons/Facebookicon2";
import { Instagramicon1 } from "../../icons/Instagramicon1";
import { Pencilicon2 } from "../../icons/Pencilicon2";
import styled from "styled-components";
import { Divider } from "../../icons/Divider";
import { Layout } from "../../components/Layout";

const StyledEventDetailPage = styled.div`
  background-color: var(--background-300);
  height: 2663px;
  position: relative;

  & .header-instance {
    border-left-style: none !important;
    border-right-style: none !important;
    border-top-style: none !important;
    left: 0 !important;
    position: absolute !important;
    top: 1px !important;
  }

  & .overlap {
    height: 1450px;
    left: 80px;
    position: absolute;
    top: 97px;
    width: 1280px;
  }

  & .event-description {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 48px;
    left: 0;
    position: absolute;
    top: 616px;
    width: 800px;
  }

  & .div-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-4 {
    align-self: stretch;
    color: var(--text);
    font-family: var(--title-l-font-family);
    font-size: var(--title-l-font-size);
    font-style: var(--title-l-font-style);
    font-weight: var(--title-l-font-weight);
    letter-spacing: var(--title-l-letter-spacing);
    line-height: var(--title-l-line-height);
    margin-top: -1px;
    position: relative;
  }

  & .div-3 {
    align-self: stretch;
    color: var(--text);
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
    position: relative;
  }

  & .text-wrapper-5 {
    align-self: stretch;
    color: var(--text);
    font-family: var(--title-m-font-family);
    font-size: var(--title-m-font-size);
    font-style: var(--title-m-font-style);
    font-weight: var(--title-m-font-weight);
    letter-spacing: var(--title-m-letter-spacing);
    line-height: var(--title-m-line-height);
    margin-top: -1px;
    position: relative;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .span {
    color: #000d38;
    font-family: var(--body-m-regular-font-family);
    font-size: var(--body-m-regular-font-size);
    font-style: var(--body-m-regular-font-style);
    font-weight: var(--body-m-regular-font-weight);
    letter-spacing: var(--body-m-regular-letter-spacing);
    line-height: var(--body-m-regular-line-height);
  }

  & .event-hero-section-instance {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .divider {
    height: 100px !important;
    left: 79px !important;
    position: absolute !important;
    top: 1600px !important;
    width: 1282px !important;
  }

  & .card {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    left: 80px;
    padding: 64px 0px;
    position: absolute;
    top: 1700px;
  }

  & .card-2 {
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

  & .content-2 {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 64px;
    justify-content: center;
    position: relative;
    width: 1200px;
  }

  & .txt-2 {
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

  & .title-3 {
    color: #000d38;
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

  & .paragraph {
    align-self: stretch;
    color: #000d38cc;
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22.4px;
    position: relative;
  }

  & .form {
    align-items: flex-start;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 24px 0px 0px;
    position: relative;
    width: 613.33px;
  }

  & .form-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    position: relative;
  }

  & .input-instance {
    flex: 0 0 auto !important;
  }

  & .pencilicon-2 {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }

  & .button-3 {
    align-self: stretch !important;
    height: unset !important;
  }

  & .image-2 {
    height: 400px;
    object-fit: cover;
    position: relative;
    width: 500px;
  }

  & .envelope-icon-wrapper {
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

  & .envelope-icon {
    height: 40px !important;
    position: relative !important;
    width: 40px !important;
  }

  & .footer-instance {
    background-color: transparent !important;
    left: 572px !important;
    position: absolute !important;
    top: 2308px !important;
  }

  & .facebookicon-2 {
    margin-left: -0.5px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .instagramicon-1 {
    height: 24px !important;
    margin-left: -3px !important;
    position: relative !important;
    width: 24px !important;
  }
`;

export const EventDetailPage = (): JSX.Element => {
  return (
    <Layout>
      <StyledEventDetailPage>
        <div className="overlap">
          <div className="event-description">
            <div className="div-2">
              <div className="text-wrapper-4">სათაური</div>
              <div className="div-3">პარაგრაფი</div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-5">ქვესათაური</div>
              <div className="flexcontainer">
                <p className="div-3">
                  <span className="span">
                    დღეს ანასტასიაზე გვინდა გიამბოთ, &#34;მთიელი წიგნების&#34;
                    ყველაზე პატარა წევრზე. საკუთარ თავს ასე დაარქვა და ამაყად
                    ატარებს ამ &#34;სტატუსს&#34;...
                    <br />
                  </span>
                </p>
                <p className="div-3">
                  <span className="span">
                    ახალ წელს თოვლის ბაბუამ შორეული ლაპლანდიიდან გამოუგზავნა
                    ციგა, რომელიც ჩვენი მთავარი ტრანსპორტი აღმოჩნდა სვანეთში...
                    იქ სადაც მანქანა ვეღარ მოძრაობდა, ანასტასიას ციგა გვშველოდა.
                    თოკებით ვამაგრებდით დიდ ყუთს და ყველაზე მძიმე წიგნებს
                    ვალაგებდით. გვიხაროდა, ღიმილს გვგვრიდა, ბავშვობაში
                    გვაბრუნებდა. მისრიალებდა ციგა გაუკვალავ თოვლში და ნელ-ნელა
                    ემატებოდნენ ბავშვები მის ირგვლივ... არასდროს დაგვავიწყდება
                    ეს თავგადასავალი...
                    <br />
                  </span>
                </p>
                <p className="div-3">
                  <span className="span">
                    მეორე სურათზე კი ყველაზე პატარა წევრის ოცნებები წერია:
                    &#34;მე რომ ბევრი ფული მქონდეს &#34;მთიელ წიგნებს&#34;
                    ვუყიდდი დიდ მანქანას, რათა ადვილად აუტანონ მთაში ბავშვებს
                    წიგნები&#34; სულ თავისით მოიფიქრა და უსაყვარლესმა
                    მასწავლებელმა სიტყვა-სიტყვით, უცვლელად, ჩაიწერა... ჰოდა
                    ასეთი ოცნება გვაბედნიერებს და გვარწმუნებს, რომ სწორ საქმეს
                    მივყვებით და ეს ყველაფერი დიდხანს გაგრძელდება... ჩვენ
                    შემდეგაც კი ...
                  </span>
                </p>
              </div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-5">ქვესათაური</div>
              <div className="flexcontainer">
                <p className="div-3">
                  <span className="span">
                    დღეს ანასტასიაზე გვინდა გიამბოთ, &#34;მთიელი წიგნების&#34;
                    ყველაზე პატარა წევრზე. საკუთარ თავს ასე დაარქვა და ამაყად
                    ატარებს ამ &#34;სტატუსს&#34;...
                    <br />
                  </span>
                </p>
                <p className="div-3">
                  <span className="span">
                    მეორე სურათზე კი ყველაზე პატარა წევრის ოცნებები წერია:
                    &#34;მე რომ ბევრი ფული მქონდეს &#34;მთიელ წიგნებს&#34;
                    ვუყიდდი დიდ მანქანას, რათა ადვილად აუტანონ მთაში ბავშვებს
                    წიგნები&#34; სულ თავისით მოიფიქრა და უსაყვარლესმა
                    მასწავლებელმა სიტყვა-სიტყვით, უცვლელად, ჩაიწერა... ჰოდა
                    ასეთი ოცნება გვაბედნიერებს და გვარწმუნებს, რომ სწორ საქმეს
                    მივყვებით და ეს ყველაფერი დიდხანს გაგრძელდება... ჩვენ
                    შემდეგაც კი ...
                  </span>
                </p>
              </div>
            </div>
          </div>
          <EventHeroSection
            className="event-hero-section-instance"
            platform="web"
          />
        </div>
        <Divider />
        <div className="card">
          <div className="card-2">
            <div className="content-2">
              <div className="txt-2">
                <div className="heading">
                  <div className="title-3">გამოიწერე სიახლეები</div>
                </div>
                <p className="paragraph">
                  მიიღე ინფორმაცია ჩვენი დაგეგმილი და შესრულებული მოგზაურობების
                  შესახებ
                </p>
                <div className="form">
                  <div className="form-2">
                    <Input
                      className="input-instance"
                      label="მეილი"
                      message={false}
                      override={<Pencilicon2 className="pencilicon-2" />}
                      stateProp="default"
                      icon={true}
                    />
                    <Button
                      className="button-3"
                      icon={false}
                      style="default"
                      text="გამოიწერე"
                    />
                  </div>
                </div>
              </div>
              <img
                className="image-2"
                alt="Image"
                src="https://c.animaapp.com/X9C4eF1s/img/image-3.png"
              />
            </div>
            <div className="envelope-icon-wrapper">
              <Envelopeicon1 className="envelope-icon" />
            </div>
          </div>
        </div>
      </StyledEventDetailPage>
    </Layout>
  );
};
