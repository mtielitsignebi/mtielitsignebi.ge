import React from "react";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router";
import { Layout } from "../../components/Layout";
import { StyledEventPage } from "./styles";
import { usePlatform } from "../../hooks";

export const EventPage = (): JSX.Element => {
  const navigate = useNavigate();
  const platform = usePlatform();

  return (
    <Layout>
      <StyledEventPage platform={platform}>
        <div className="heading-get-wrapper">
          <div className="heading-get">სიახლეები</div>
        </div>
        <div
          onClick={() => {
            navigate(`/events/1`);
          }}
        >
          <Card
            className="card-instance"
            platform={platform}
            image="https://c.animaapp.com/H3v2GtT6/img/image-2.png"
            title='მთიელი წიგნები სვანეთში'
            date='15 მაისი, 2023'
            text="სხვა პასუხისმგებლობაც გვქონდა ამ გასვლაში - დათო ტურაშვილი იქნებოდა ჩვენ გვერდით. ერთია როცა წიგნი მიგაქვს
              ბავშვებთან, მაგრამ სხვა გრძნობაა როცა მათი საყვარელი ავტორიც თან მიგყავს."
          />
        </div>

        <div
          onClick={() => {
            navigate(`/events/1`);
          }}
        >
          <Card
            className="card-instance"
            platform={platform}
            image="https://c.animaapp.com/H3v2GtT6/img/image-3.png"
            title='მთიელი წიგნები სვანეთში'
            date='15 მაისი, 2023'
            text="სხვა პასუხისმგებლობაც გვქონდა ამ გასვლაში - დათო ტურაშვილი იქნებოდა ჩვენ გვერდით. ერთია როცა წიგნი მიგაქვს
              ბავშვებთან, მაგრამ სხვა გრძნობაა როცა მათი საყვარელი ავტორიც თან მიგყავს."
          />
        </div>
      </StyledEventPage>
    </Layout>
  );
};
