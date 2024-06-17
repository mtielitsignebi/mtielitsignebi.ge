import React from "react";
import { Button } from "../../components/Button";
import { EventHeroSection } from "../../components/EventHeroSection";
import { Input } from "../../components/Input";
import { Envelopeicon1 } from "../../icons/Envelopeicon1";
import { Pencilicon2 } from "../../icons/Pencilicon2";
import { Divider } from "../../icons/Divider";
import { Layout } from "../../components/Layout";
import { StyledEventDetailPage } from "./styles";

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
