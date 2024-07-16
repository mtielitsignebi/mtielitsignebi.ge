import React from "react";
import { Carousel } from "../../components/Carousel";
import { GoalSection } from "../../components/GoalSection";
import { HeroSection } from "../../components/HeroSection";
import { HistorySection } from "../../components/HistorySection";
import { Layout } from "../../components/Layout";
import { Container, StyledCarousel } from "./styles";
import { Divider } from "../../icons/Divider";
import { usePlatform } from "../../hooks";
import { Platform } from "../../hooks/usePlatform";
import { useControlXState } from "@etlyn/control-x";

export const HomePage = (): JSX.Element => {
//@ts-ignore
  const IMAGE_LIST = useControlXState("gallery-core").images.map(image => ({imageURL: image.url}))
  const platform = usePlatform();
  console.log(IMAGE_LIST)
  return (
    <Layout>
      <Container>
        <HeroSection />
        <Divider />
        <HistorySection />
        <Divider />
        <GoalSection />
        <StyledCarousel
          showSingleSlide={platform !== Platform.Web}
          imageList={IMAGE_LIST}
          platform={platform}
          allChildClass="children"
          allImageClass="images"
        />
      </Container>
    </Layout>
  );
};
