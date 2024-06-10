import React, { useEffect, useState } from "react";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import { GoalSection } from "../../components/GoalSection";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { HistorySection } from "../../components/HistorySection";
import { Facebookicon1 } from "../../icons/Facebookicon1";
import { Instagramicon1 } from "../../icons/Instagramicon1";
import { PlatformWeb } from "../../icons/PlatformWeb";
import styled from "styled-components";

const StyledHomePage = styled.div`
  align-items: center;
  background-color: #6ab271;
  flex-direction: column;
  padding: 0px 0px 32px;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;

  & .divider {
    height: 100px !important;
    position: relative !important;
    width: 1282px !important;
  }

  & .carousel-instance {
    margin-right: unset !important;
    width: 215px !important;
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

export const HomePage = (): JSX.Element => {
  const [platform, setPlatform] = useState("web");

  useEffect(() => {
    if (window.screen.width < 768) {
      setPlatform("mobile");
    }
  }, []);

  return (
    <StyledHomePage>
      <Header platform={platform} />

      <HeroSection platform={platform} />

      <PlatformWeb className="divider" />

      <HistorySection
        className="design-component-instance-node-2"
        platform={platform}
      />
      <PlatformWeb className="divider" />
      <GoalSection platform={platform} />
      <Carousel
        className="design-component-instance-node-2"
        image="https://c.animaapp.com/PUxN8WIz/img/image-03-1.png"
        imageClassName="carousel-instance"
        platform={platform}
      />
      <Footer
        buttonIcon={<Facebookicon1 className="facebookicon-1" />}
        className="footer-instance"
        logo="https://c.animaapp.com/PUxN8WIz/img/logo-5.svg"
        override={<Instagramicon1 className="instagramicon-instance" />}
        platform={platform}
      />
    </StyledHomePage>
  );
};
