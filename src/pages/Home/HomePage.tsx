import React from "react";
import { GoalSection } from "../../components/GoalSection";
import { HeroSection } from "../../components/HeroSection";
import { HistorySection } from "../../components/HistorySection";
import { Layout } from "../../components/Layout";
import { Container, StyledCarousel } from "./styles";
import { Divider } from "../../components/Divider";
import { usePlatform } from "../../hooks";
import { Platform } from "../../hooks/usePlatform";
import { useControlXState } from "@etlyn/control-x";

export const HomePage = (): JSX.Element => {
  //@ts-ignore
  const IMAGE_LIST = useControlXState("gallery-core").images.map((image) => ({imageURL: image.url,}));
  const platform = usePlatform();
  return (
    <Layout>
      <Container>
        <HeroSection />
        <Divider />
        <HistorySection />
        <Divider />
        <GoalSection />
        <StyledCarousel
          slidesPerScreen={platform === Platform.Web ? 3 : 1}
          platform={platform}
          className="children"
          imageClass="images"
          slideAnimation="animate"
          controls={true}
          sliderSpeed={4000}
        >
          {IMAGE_LIST.map((image, i) => (
            <div className="slide-wrapper" key={image.imageURL + i}>
              <img className="slide-image" src={image.imageURL} />
            </div>
          ))}
        </StyledCarousel>
      </Container>
    </Layout>
  );
};
