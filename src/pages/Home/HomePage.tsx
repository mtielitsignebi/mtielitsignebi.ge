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
  const IMAGE_LIST = [
    { imageURL: "https://picsum.photos/800/400?random=1" },
    { imageURL: "https://picsum.photos/800/400?random=2" },
    { imageURL: "https://picsum.photos/800/400?random=3" },
    { imageURL: "https://picsum.photos/800/400?random=4" },
    { imageURL: "https://picsum.photos/800/400?random=5" },
    { imageURL: "https://picsum.photos/800/400?random=6" },
    { imageURL: "https://picsum.photos/800/400?random=7" },
  ];
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
          showSingleSlide={platform !== Platform.Web}
          imageList={IMAGE_LIST}
          platform={platform}
        />
      </Container>
    </Layout>
  );
};
