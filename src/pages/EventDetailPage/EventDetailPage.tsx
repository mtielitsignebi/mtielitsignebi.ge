import React from "react";
import { EventHeroSection } from "../../components/EventHeroSection";
import { Divider } from "../../icons/Divider";
import { Layout } from "../../components/Layout";
import * as SC from "./styles";
import { SubscribeCard } from "../../components/SubscribeSection";
import { usePlatform } from "../../hooks";

export const EventDetailPage = (): JSX.Element => {
  const platform = usePlatform();
  return (
    <Layout>
      <SC.Container>
        <EventHeroSection platform={platform} />
        <SC.Article platform={platform}>
          <SC.Heading platform={platform}>სათაური</SC.Heading>
          <SC.Paragraph platform={platform}>პარაგრაფი</SC.Paragraph>
          <SC.SubHeading platform={platform}>ქვესათაური</SC.SubHeading>
          <SC.Paragraph platform={platform}>
            დღეს ანასტასიაზე გვინდა გიამბოთ, &#34;მთიელი წიგნების&#34; ყველაზე
            პატარა წევრზე. საკუთარ თავს ასე დაარქვა და ამაყად ატარებს ამ
            &#34;სტატუსს&#34;...
            <br />
          </SC.Paragraph>
          <SC.Paragraph platform={platform}>
            ახალ წელს თოვლის ბაბუამ შორეული ლაპლანდიიდან გამოუგზავნა ციგა,
            რომელიც ჩვენი მთავარი ტრანსპორტი აღმოჩნდა სვანეთში... იქ სადაც
            მანქანა ვეღარ მოძრაობდა, ანასტასიას ციგა გვშველოდა. თოკებით
            ვამაგრებდით დიდ ყუთს და ყველაზე მძიმე წიგნებს ვალაგებდით. გვიხაროდა,
            ღიმილს გვგვრიდა, ბავშვობაში გვაბრუნებდა. მისრიალებდა ციგა გაუკვალავ
            თოვლში და ნელ-ნელა ემატებოდნენ ბავშვები მის ირგვლივ... არასდროს
            დაგვავიწყდება ეს თავგადასავალი...
            <br />
          </SC.Paragraph>
          <SC.Paragraph platform={platform}>
            მეორე სურათზე კი ყველაზე პატარა წევრის ოცნებები წერია: &#34;მე რომ
            ბევრი ფული მქონდეს &#34;მთიელ წიგნებს&#34; ვუყიდდი დიდ მანქანას,
            რათა ადვილად აუტანონ მთაში ბავშვებს წიგნები&#34; სულ თავისით
            მოიფიქრა და უსაყვარლესმა მასწავლებელმა სიტყვა-სიტყვით, უცვლელად,
            ჩაიწერა... ჰოდა ასეთი ოცნება გვაბედნიერებს და გვარწმუნებს, რომ სწორ
            საქმეს მივყვებით და ეს ყველაფერი დიდხანს გაგრძელდება... ჩვენ
            შემდეგაც კი ...
          </SC.Paragraph>
          <SC.SubHeading platform={platform}>ქვესათაური</SC.SubHeading>
          <SC.Paragraph platform={platform}>
            დღეს ანასტასიაზე გვინდა გიამბოთ, &#34;მთიელი წიგნების&#34; ყველაზე
            პატარა წევრზე. საკუთარ თავს ასე დაარქვა და ამაყად ატარებს ამ
            &#34;სტატუსს&#34;...
            <br />
          </SC.Paragraph>
          <SC.Paragraph platform={platform}>
            მეორე სურათზე კი ყველაზე პატარა წევრის ოცნებები წერია: &#34;მე რომ
            ბევრი ფული მქონდეს &#34;მთიელ წიგნებს&#34; ვუყიდდი დიდ მანქანას,
            რათა ადვილად აუტანონ მთაში ბავშვებს წიგნები&#34; სულ თავისით
            მოიფიქრა და უსაყვარლესმა მასწავლებელმა სიტყვა-სიტყვით, უცვლელად,
            ჩაიწერა... ჰოდა ასეთი ოცნება გვაბედნიერებს და გვარწმუნებს, რომ სწორ
            საქმეს მივყვებით და ეს ყველაფერი დიდხანს გაგრძელდება... ჩვენ
            შემდეგაც კი ...
          </SC.Paragraph>
        </SC.Article>
        <Divider />
        <SubscribeCard platform={platform} />
      </SC.Container>
    </Layout>
  );
};
