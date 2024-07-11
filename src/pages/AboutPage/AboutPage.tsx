import React from "react";
import { Divider } from "../../icons/Divider";
import { Layout } from "../../components/Layout";
import * as SC from "./styles";
import { PartnerCard } from "../../components/PartnerCard";
import { partnerMockData } from "./partnerMockData";

export const AboutPage = (): JSX.Element => {
  return (
    <Layout>
      <SC.Section>
        <SC.SectionTitle>“მთიელი წიგნების” შესახებ</SC.SectionTitle>
        <SC.SectionText>
          ამ ჯგუფის არსებობა ერთმა პრობლემამ განაპირობა: მთაში ბევრ რაიონულ
          ცენტრშიც კი არ არის წიგნის მაღაზია, არ ტარდება წიგნის ფესტივალები,
          შესაბამისად, ბავშვებისთვის ხელმიუწვდომელია თანამედროვე ლიტერატურა,
          ბოლო დროის თარგმანები. ყველაფერი მეგობრების მიერ ლაშქრობებში წაღებული
          რამდენიმე წიგნით დაიწყო, რომელთაც ადგილობრივ ბავშვებს უტოვებდნენ.
          მაღალმთიან რეგიონებში მოგზაურობისას აღმოაჩინეს, რომ თანამედროვე
          ლიტერატურა ნაკლებად ხელმისაწვდომი იყო ბავშვებისთვის. ბევრ რაიონულ
          ცენტრში საერთოდ არ იყო წიგნის მაღაზია, ბიბლიოთეკებში კი სიძველისგან
          გაცრეცილი წიგნები ბავშვებს კითხვის ჟინს უკარგავდა.
        </SC.SectionText>
        <SC.PhotoGrid>
          <SC.Photo
            src="https://c.animaapp.com/rsy2ONkj/img/image-08-1@2x.png"
            alt="Image"
          />
          <SC.Photo
            src="https://c.animaapp.com/rsy2ONkj/img/image-07-1@2x.png"
            alt="Image"
          />
          <SC.Photo
            src="https://c.animaapp.com/rsy2ONkj/img/image-06-1@2x.png"
            alt="Image"
          />
          <SC.Photo
            src="https://c.animaapp.com/rsy2ONkj/img/image-05-1@2x.png"
            alt="Image"
          />
          <SC.Photo
            src="https://c.animaapp.com/rsy2ONkj/img/image-04-1@2x.png"
            alt="Image"
          />
          <SC.Photo
            src="https://c.animaapp.com/rsy2ONkj/img/image-03-1@2x.png"
            alt="Image"
          />
          <SC.Photo
            src="https://c.animaapp.com/rsy2ONkj/img/image-02-1@2x.png"
            alt="Image"
          />
          <SC.Photo
            src="https://c.animaapp.com/rsy2ONkj/img/image-01-1.png"
            alt="Image"
          />
        </SC.PhotoGrid>
      </SC.Section>

      <Divider />

      <SC.Section>
        <SC.SectionTitle>როგორ დაიწყო ყველაფერი..</SC.SectionTitle>

        <SC.SectionText>
          მეგობრებმა გადაწყვიტეს, რომ რამდენიმე წიგნის წაღების ნაცვლად, უფრო
          მასშტაბური საქმიანობა წამოეწყოთ – ასე შეიქმნა მთიელი წიგნები. ოთხი
          მეგობრის – გიორგის, ლევანის, ნათიასა და მარიამის წამოწყება თანდათან
          გაფართოვდა. ბევრ ერთგულ მხარდამჭერთან ერთად სვანეთში, ლეჩხუმსა და
          ახმეტაში მცხოვრებ 700–მდე ბავშვს და 30–მდე მცირეკონტინგენტიან სკოლას
          თანამედროვე გამოცემები გადასცეს. <br />
          ბავშვებმა კი „მთიელ წიგნებს“ უამრავი ემოციური სტრიქონი დაუბრუნეს:
          <br />
          <br />
          „ბავშვები მეკითხებოდნენ, მართლა რაც გვინდა იმ წიგნს მოგვცემენო, თანაც
          პირადადო? ვპასუხობდი, მგონი ასე იქნება–მეთქი. დაუჯერებელია ეს ამბავი,
          დიდი მადლობა წიგნებისთვის, ძალიან გაუხარდათ ბავშვებს...“
          <br />
          „საღამო მშვიდობისა... წიგნი მეორე დღესვე დავასრულე, ბოდიში, განხილვის
          მოწერა რომ დამაგვიანდა. მადლობა, ეს წიგნი რომ ჩემამდე მოვიდა... უზომოდ
          მომეწონა... თითქოს კითხვის დროს იქ ვიდექი და სიუჟეტი ჩემს თვალწინ
          ვითარდებოდა... თქვენი დამსახურებით კიდევ ერთ საუკეთესო დეტექტივს
          გავეცანი“ <br />
          „წიგნი ისეთი საინტერესო იყო, საკითხავად რომ ვჯდებოდი, თავის დანებება
          აღარ მინდოდა, მადლობა“ ბავშვების ემოციები გრძელვადიანი საქმიანობისთვის
          კარგ მოტივატორად იქცა.
        </SC.SectionText>
      </SC.Section>

      <SC.Section bg="#71C179" br="20px">
        <SC.SectionTitle>ჩვენი პარტნიორები</SC.SectionTitle>
        <SC.SectionText>
          გვიხარია, რომ ჩვენი პარტნიორი კომპანიების სია სულ უფრო იზრდება.
          მადლობას ვუხდით მათ ჩვენდამი ნდობისა და გაწეული დახმარებისთვის!
        </SC.SectionText>
        <SC.PartnerList>
          {partnerMockData.map((partner, index) => (
            <PartnerCard key={index} logo={partner.logo} text={partner.name} />
          ))}
        </SC.PartnerList>
        <SC.Button>მეტის ნახვა</SC.Button>
      </SC.Section>
    </Layout>
  );
};
