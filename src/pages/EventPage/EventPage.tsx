import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Facebookicon1 } from "../../icons/Facebookicon1";
import { Instagramicon } from "../../icons/Instagramicon";
import { useNavigate } from "react-router";
import styled from "styled-components";

const StyledEventPage = styled.div`
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

  & .heading-get-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    padding: 64px 0px;
    position: relative;
  }

  & .heading-get {
    color: var(--text);
    font-family: var(--title-l-font-family);
    font-size: var(--title-l-font-size);
    font-style: var(--title-l-font-style);
    font-weight: var(--title-l-font-weight);
    letter-spacing: var(--title-l-letter-spacing);
    line-height: var(--title-l-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .card-instance {
    flex: 0 0 auto !important;
  }

  & .footer-instance {
    background-color: transparent !important;
    flex: 0 0 auto !important;
  }

  & .facebookicon-1 {
    margin-left: -0.5px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .instagramicon-instance {
    height: 24px !important;
    margin-left: -3px !important;
    position: relative !important;
    width: 24px !important;
  }
`;

export const EventPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState("web");

  useEffect(() => {
    if (window.screen.width < 768) {
      setPlatform("mobile");
    }
  }, []);

  return (
    <StyledEventPage>
      <Header platform={platform} />
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

      <Footer
        buttonIcon={<Facebookicon1 className="facebookicon-1" />}
        className="footer-instance"
        override={<Instagramicon className="instagramicon-instance" />}
        platform="web"
        logo=""
      />
    </StyledEventPage>
  );
};
