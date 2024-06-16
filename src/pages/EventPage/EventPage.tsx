import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router";
import { Layout } from "../../components/Layout";
import { StyledEventPage } from "./styles";

export const EventPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState("web");

  useEffect(() => {
    if (window.screen.width < 768) {
      setPlatform("mobile");
    }
  }, []);

  return (
    <Layout>
      <StyledEventPage>
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
            platform="web"
            image="https://c.animaapp.com/H3v2GtT6/img/image-2.png"
          />
        </div>

        <div
          onClick={() => {
            navigate(`/events/1`);
          }}
        >
          <Card
            className="card-instance"
            platform="web"
            image="https://c.animaapp.com/H3v2GtT6/img/image-3.png"
          />
        </div>
      </StyledEventPage>
    </Layout>
  );
};
